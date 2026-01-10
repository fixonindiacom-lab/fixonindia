import { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./CameraCapture.css";

export default function CameraCapture({ label, onCapture }) {
  const webcamRef = useRef(null);

  const [capturedImage, setCapturedImage] = useState(null);
  const [facingMode, setFacingMode] = useState("environment"); // back cam default

  const handleCapture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc); // freeze image preview
  };

  const handleConfirm = async () => {
    if (!capturedImage) return;

    const blob = await fetch(capturedImage).then((res) => res.blob());
    const file = new File([blob], `${label}.jpg`, { type: "image/jpeg" });

    onCapture(file);
  };

  const handleRetake = () => {
    setCapturedImage(null);
  };

  const switchCamera = () => {
    setFacingMode((prev) => (prev === "environment" ? "user" : "environment"));
  };

  return (
    <div className="camera-box">

      <p className="camera-label">{label}</p>

      {/* If image is captured show final preview */}
      {capturedImage ? (
        <img src={capturedImage} alt="Captured" className="captured-preview" />
      ) : (
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode }}
          className="camera-preview"
        />
      )}

      <div className="camera-actions">
        {!capturedImage ? (
          <>
            <button type="button" onClick={handleCapture} className="capture-btn">
              Capture
            </button>

            <button type="button" onClick={switchCamera} className="switch-btn">
              Switch Camera
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={handleRetake} className="retake-btn">
              Retake
            </button>

            <button type="button" onClick={handleConfirm} className="confirm-btn">
              Confirm
            </button>
          </>
        )}
      </div>
    </div>
  );
}





























// import { useRef } from "react";
// import Webcam from "react-webcam";
// import "./CameraCapture.css";

// export default function CameraCapture({ label, onCapture }) {
//   const webcamRef = useRef(null);

//   const captureImage = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();

//     const blob = await fetch(imageSrc).then((res) => res.blob());
//     const file = new File([blob], `${label}.jpg`, { type: "image/jpeg" });

//     onCapture(file);
//   };

//   return (
//     <div className="camera-box">
//       <p className="camera-label">{label}</p>

//       <Webcam
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         videoConstraints={{ facingMode: "environment" }}
//         className="camera-preview"
//       />

//       <button type="button" className="capture-btn" onClick={captureImage}>
//         Capture {label}
//       </button>
//     </div>
//   );
// }
