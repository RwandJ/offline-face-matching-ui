import { useState } from "react";
import "./FaceCompare.css";

const API_URL = "http://127.0.0.1:8000/api/v1/face-matching/compare";

export default function FaceCompare() {
  const [leftImage, setLeftImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);
  const [leftFile, setLeftFile] = useState(null);
  const [rightFile, setRightFile] = useState(null);

  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e, side) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    if (side === "left") {
      setLeftImage(imageUrl);
      setLeftFile(file);
    } else {
      setRightImage(imageUrl);
      setRightFile(file);
    }

    setError(null);
    setResult(null);
  };

  const handleMatch = async () => {
    if (!leftFile || !rightFile) {
      setError("يرجى رفع صورتين قبل المقارنة");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("image1", leftFile);
      formData.append("image2", rightFile);

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        if (response.status === 400)
          throw new Error("يرجى التأكد من رفع صورتين صحيحتين");
        if (response.status === 422)
          throw new Error("إحدى الصور لا تحتوي على وجه بشري واضح");
        throw new Error("حدث خطأ في الخادم");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="compare-container">
      <h2 className="compare-title">Face Matching</h2>

      {error && <p className="error-text">{error}</p>}

      <div className="compare-grid">
        {/* Image A */}
        <div className="face-card">
          <h4>Image A</h4>
          <div className="image-box">
            {leftImage ? (
              <img src={leftImage} alt="Image A" />
            ) : (
              <span>No Image</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "left")}
          />
        </div>

        {/* Image B */}
        <div className="face-card">
          <h4>Image B</h4>
          <div className="image-box">
            {rightImage ? (
              <img src={rightImage} alt="Image B" />
            ) : (
              <span>No Image</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "right")}
          />
        </div>
      </div>

      <button className="match-btn" onClick={handleMatch} disabled={loading}>
        {loading ? "Matching..." : "Match Faces"}
      </button>

      {result && (
        <div className="result-box">
          <p>
            <strong>Match:</strong> {result.match ? "Yes" : "No"}
          </p>
          <p>
            <strong>Similarity:</strong>{" "}
            {(result.similarity * 100).toFixed(1)}%
          </p>
        </div>
      )}
    </div>
  );
}
