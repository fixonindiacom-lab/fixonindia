import { useEffect, useState } from "react";
import API from "../../../config/axiosConfig";
import "./AdminWorkers.css";

export default function AdminWorkers() {
  const [workers, setWorkers] = useState([]);
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedWorker, setSelectedWorker] = useState(null);

  // Fetch workers
  const getWorkers = async () => {
    try {
      const res = await API.get(`/admin/workers`);
      setWorkers(res.data.workers);
      setFilteredWorkers(res.data.workers);
    } catch (err) {
      console.log("Error fetching workers:", err);
    }
  };

  useEffect(() => {
    getWorkers();
  }, []);

  // Search + Filter Logic
  useEffect(() => {
    let result = workers;

    // Search by name
    if (search.trim() !== "") {
      result = result.filter((w) =>
        w.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter verified/unverified/all
    if (filter === "verified") {
      result = result.filter((w) => w.verified === true);
    } else if (filter === "unverified") {
      result = result.filter((w) => w.verified === false);
    }

    setFilteredWorkers(result);
  }, [search, filter, workers]);

  // Verify worker
  const verifyWorker = async (id) => {
    try {
      await API.put(`/admin/verify/${id}`);
      getWorkers(); // refresh list
    } catch (error) {
      console.log("Error verifying worker:", error);
    }
  };

  return (
    <div className="admin-workers">      

      {/* ==================== Search + Filter ==================== */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search worker by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Workers</option>
          <option value="verified">Verified</option>
          <option value="unverified">Unverified</option>
        </select>
      </div>

      {/* ==================== Workers List ==================== */}
      <div className="workers-list">
        {filteredWorkers.map((worker) => (
          <div key={worker._id} className="worker-card">
            <img
              src={worker.profilePic || "https://via.placeholder.com/80"}
              alt="profile"
            />

            <div className="worker-info">
              <h3>{worker.name}</h3>
              <p>{worker.email}</p>
              <p>Status: {worker.verified ? "✅ Verified" : "❌ Unverified"}</p>
            </div>

            <div className="worker-actions">
              {!worker.verified && (
                <button
                  className="verify-btn"
                  onClick={() => verifyWorker(worker._id)}
                >
                  Verify
                </button>
              )}

              <button
                className="details-btn"
                onClick={() => setSelectedWorker(worker)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ==================== Worker Details Modal ==================== */}
      {selectedWorker && (
  <div className="modal">
    <div className="modal-content">

      {/* Close Modal Button */}
      <button className="modal-close" onClick={() => setSelectedWorker(null)}>
        ✖
      </button>

      {/* HEADER */}
      <div className="modal-header">
        <img
          src={selectedWorker.profilePic || "https://via.placeholder.com/150"}
          alt="profile"
        />

        <h2>{selectedWorker.name}</h2>

        <p className="status">
          {selectedWorker.verified ? "Verified Worker ✅" : "Not Verified ❌"}
        </p>

        <p className="id">Worker ID: {selectedWorker.workerId}</p>
      </div>

      {/* CONTENT */}
      <div className="modal-details">

        {/* Email */}
        <div className="detail-row">
          <span className="label">Email:</span>
          <span>{selectedWorker.email}</span>
        </div>

        {/* Phone */}
        <div className="detail-row">
          <span className="label">Phone:</span>
          <span>{selectedWorker.phone}</span>
        </div>

        {/* City */}
        <div className="detail-row">
          <span className="label">City:</span>
          <span>{selectedWorker.city}</span>
        </div>

        {/* Address */}
        <div className="detail-row">
          <span className="label">Address:</span>
          <span>{selectedWorker.address}</span>
        </div>

        {/* Aadhar Pic */}
        <div className="detail-row images-row">
          <span className="label">Aadhar Card:</span>
          <div className="image-grid">
            <img src={selectedWorker.aadharPic} alt="Aadhar" />
          </div>
        </div>

        {/* PAN Pic */}
        <div className="detail-row images-row">
          <span className="label">PAN Card:</span>
          <div className="image-grid">
            <img src={selectedWorker.panPic} alt="PAN" />
          </div>
        </div>

        {/* Work Stats */}
        {/* <div className="detail-row">
          <span className="label">Work Experience:</span>
          <span>{selectedWorker.workeds} days/months</span>
        </div> */}

        {/* Tasks Completed */}
        {/* <div className="detail-row">
          <span className="label">Tasks Completed:</span>
          <span>{selectedWorker.tasksCompleted}</span>
        </div> */}

        {/* Tasks Pending */}
        {/* <div className="detail-row">
          <span className="label">Tasks Pending:</span>
          <span>{selectedWorker.tasksPending}</span>
        </div> */}

        {/* Rating */}
        {/* <div className="detail-row">
          <span className="label">Rating:</span>
          <span>{selectedWorker.rating}%</span>
        </div> */}

        {/* Joined Date */}
        <div className="detail-row">
          <span className="label">Joined On:</span>
          <span>{new Date(selectedWorker.createdAt).toDateString()}</span>
        </div>

      </div>
    </div>
  </div>
)}

    </div>
  );
}
