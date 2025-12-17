import { useRef } from "react";
import Webcam from "react-webcam";
import "./CameraCapture.css";

export default function CameraCapture({ label, onCapture }) {
  const webcamRef = useRef(null);

  const captureImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    const blob = await fetch(imageSrc).then((res) => res.blob());
    const file = new File([blob], `${label}.jpg`, { type: "image/jpeg" });

    onCapture(file);
  };

  return (
    <div className="camera-box">
      <p className="camera-label">{label}</p>

      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: "environment" }}
        className="camera-preview"
      />

      <button type="button" className="capture-btn" onClick={captureImage}>
        Capture {label}
      </button>
    </div>
  );
}
