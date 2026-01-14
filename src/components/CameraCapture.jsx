import { useRef } from "react";
import { Button } from "./ui/button";

export default function CameraCapture({ onCapture }) {
  const videoRef = useRef(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0, 200, 200);
    onCapture(canvas.toDataURL("image/png"));
  };

  return (
    <div className="space-y-2">
      <video ref={videoRef} autoPlay className="rounded-xl mx-auto w-48" />
      <Button onClick={startCamera}>Open Camera</Button>
      <Button onClick={capturePhoto}>Capture</Button>
    </div>
  );
}
