import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WorkerProfile.css"; // <-- new CSS file

const WorkerProfile = () => {
  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("workerToken");

        if (!token) {
          setError("Not logged in");
          setLoading(false);
          return;
        }

        const res = await axios.get("http://localhost:3001/api/worker/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setWorker(res.data.worker);
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="wp-loading">Loading profile...</div>;
  if (error) return <div className="wp-error">{error}</div>;

  return (
    <div className="wp-container">
      <h2 className="wp-title">Worker Profile</h2>

      <div className="wp-card">

        <div className="wp-left">
          <img
            src={worker.profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="wp-profile-pic"
          />

          <div className={`wp-status ${worker.verified ? "verified" : "not-verified"}`}>
            {worker.verified ? "✔ Verified Worker" : "✖ Not Verified"}
          </div>
        </div>

        <div className="wp-details">

          <p><strong>Name:</strong> {worker.name}</p>
          <p><strong>Email:</strong> {worker.email}</p>
          <p><strong>Phone:</strong> {worker.phone}</p>
          <p><strong>Address:</strong> {worker.address}</p>
          <p><strong>City:</strong> {worker.city}</p>
          <p><strong>Worker ID:</strong> {worker.workerId}</p>

          <hr />

          <h3 className="wp-doc-title">Uploaded Documents</h3>

          <div className="wp-doc-grid">
            <div className="wp-doc-item">
              <p><strong>Aadhar</strong></p>
              <img
                src={worker.aadharPic}
                alt="Aadhar"
                className="wp-doc-img"
              />
            </div>

            <div className="wp-doc-item">
              <p><strong>PAN</strong></p>
              <img
                src={worker.panPic}
                alt="PAN"
                className="wp-doc-img"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default WorkerProfile;
