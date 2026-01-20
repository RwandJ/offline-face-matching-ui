import { useState } from "react";
import "./FaceCompare.css";

export default function FaceCompare() {
  const [leftImage, setLeftImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImage = (e, side) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      side === "left" ? setLeftImage(url) : setRightImage(url);
    }
  };

  const handleMatch = () => {
    if (!leftImage || !rightImage) return;

    // Placeholder logic (backend will replace this)
    setResult({
      pixel: "78%",
      semantic: "Likely Same Person",
    });
  };

  return (
    <div className="compare-container">
      <h2 className="compare-title">Face Matching</h2>

      <div className="compare-grid">
        {/* LEFT IMAGE */}
        <div className="face-card">
          <h4>Image A</h4>
          <div className="image-box">
            {leftImage ? (
              <img src={leftImage} alt="Left Face" />
            ) : (
              <span>No Image</span>
            )}
          </div>
          <input type="file" accept="image/*" onChange={(e) => handleImage(e, "left")} />
        </div>

        {/* RIGHT IMAGE */}
        <div className="face-card">
          <h4>Image B</h4>
          <div className="image-box">
            {rightImage ? (
              <img src={rightImage} alt="Right Face" />
            ) : (
              <span>No Image</span>
            )}
          </div>
          <input type="file" accept="image/*" onChange={(e) => handleImage(e, "right")} />
        </div>
      </div>

      <button className="match-btn" onClick={handleMatch}>
        Match Faces
      </button>

      {result && (
        <div className="result-box">
          <p><strong>Pixel Similarity:</strong> {result.pixel}</p>
          <p><strong>Semantic Result:</strong> {result.semantic}</p>
        </div>
      )}
    </div>
  );
}
