import { useState, useEffect } from "react";
import * as faceapi from "face-api.js";
import "./FaceCompare.css";

export default function FaceCompare() {
  const [leftImage, setLeftImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);
  const [leftValid, setLeftValid] = useState(false);
  const [rightValid, setRightValid] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load face detection model once
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    };
    loadModels();
  }, []);

  // Face detection with confidence threshold
  const detectFace = async (imageUrl, side) => {
    const img = await faceapi.fetchImage(imageUrl);

    const detection = await faceapi.detectSingleFace(
      img,
      new faceapi.TinyFaceDetectorOptions({
        inputSize: 416,
        scoreThreshold: 0.6, // STRICT face-only threshold
      })
    );

    if (!detection || detection.score < 0.6) {
      setError(`No valid human face detected in ${side} image`);
      side === "left" ? setLeftValid(false) : setRightValid(false);
      return;
    }

    // Valid face detected
    setError("");
    side === "left" ? setLeftValid(true) : setRightValid(true);
  };

  const handleImageUpload = async (e, side) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    if (side === "left") {
      setLeftImage(imageUrl);
      setLeftValid(false);
    } else {
      setRightImage(imageUrl);
      setRightValid(false);
    }

    await detectFace(imageUrl, side);
  };

  const handleMatch = () => {
    if (!leftValid || !rightValid) {
      setError("Both images must contain a clear human face");
      return;
    }

    setError("");
    setLoading(true);

    // Placeholder logic – backend / ML will replace this
    setTimeout(() => {
      setResult({
        pixel: "81%",
        semantic: "Same Person (High Confidence)",
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="compare-container">
      <h2 className="compare-title">Face Matching (Face-Only)</h2>

      {error && <p className="error-text">{error}</p>}

      <div className="compare-grid">
        {/* IMAGE A */}
        <div className="face-card">
          <h4>Image A</h4>
          <div className="image-box">
            {leftImage ? (
              <img src={leftImage} alt="Face A" />
            ) : (
              <span>No Image</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "left")}
          />
          {!leftValid && leftImage && (
            <small className="warning-text">No valid face detected</small>
          )}
        </div>

        {/* IMAGE B */}
        <div className="face-card">
          <h4>Image B</h4>
          <div className="image-box">
            {rightImage ? (
              <img src={rightImage} alt="Face B" />
            ) : (
              <span>No Image</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "right")}
          />
          {!rightValid && rightImage && (
            <small className="warning-text">No valid face detected</small>
          )}
        </div>
      </div>

      <button
        className="match-btn"
        onClick={handleMatch}
        disabled={loading}
      >
        {loading ? "Matching..." : "Match Faces"}
      </button>

      {result && (
        <div className="result-box">
          <p>
            <strong>Pixel Similarity:</strong> {result.pixel}
          </p>
          <p>
            <strong>Semantic Result:</strong> {result.semantic}
          </p>
        </div>
      )}
    </div>
  );
}
