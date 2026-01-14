import { useState } from "react";
import "./FaceUpload.css";

export default function FaceUpload() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleMatch = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(82);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="card">
      <header className="card-header">
        <h1>Offline Face Matching</h1>
        <span className="status">System Ready</span>
      </header>

      <p className="subtitle">
        Upload a face image to compare identities
      </p>

      <div className="avatar">
        {image ? (
          <img src={image} />
        ) : (
          <span>No Image</span>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          e.target.files &&
          setImage(URL.createObjectURL(e.target.files[0]))
        }
      />

      <button
        className={`primary ${!image || loading ? "disabled" : ""}`}
        onClick={handleMatch}
        disabled={!image || loading}
      >
        {loading ? "Matching..." : "Match Face"}
      </button>

      {loading && <div className="skeleton"></div>}

      {result && (
        <div className="result fade-in">
          Match Confidence
          <strong>{result}%</strong>
        </div>
      )}
    </div>
  );
}
