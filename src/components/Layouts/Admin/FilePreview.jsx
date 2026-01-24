export default function FilePreview({ fileUrl, label }) {
  if (!fileUrl) {
    return <p style={{ color: "#999" }}>No file uploaded</p>;
  }

  const extension = fileUrl.split(".").pop().toLowerCase();

  const isImage = ["jpg", "jpeg", "png", "webp"].includes(extension);
  const isPdf = extension === "pdf";

  if (isImage) {
    return (
      <img
        src={fileUrl}
        alt={label}
        className="preview-image"
      />
    );
  }

  if (isPdf) {
    return (
      <iframe
        src={fileUrl}
        title={label}
        className="preview-pdf"
      />
    );
  }

  // Fallback for DOC, ZIP, etc.
  return (
    <a href={fileUrl} target="_blank" rel="noopener noreferrer">
      Download {label}
    </a>
  );
}
