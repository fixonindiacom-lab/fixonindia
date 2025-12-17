import { useEffect, useState , useMemo } from "react";
import API from "../../../config/axiosConfig";
import "./BookingManager.css";

const statusOptions = ["requested", "accepted", "in-progress", "completed", "cancelled"];

export default function BookingManager() {
  const [workers, setWorkers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [workerId, setWorkerId] = useState("");
  const [status, setStatus] = useState("");

  // FILTER STATES
const [filterStatus, setFilterStatus] = useState("");
const [filterAssigned, setFilterAssigned] = useState("");

  // FILTERED BOOKINGS
const filteredBookings = useMemo(() => {
  return bookings.filter(b => {
    let statusMatch = filterStatus ? b.taskStatus === filterStatus : true;
    let assignedMatch = filterAssigned === "assigned" ? b.worker : filterAssigned === "unassigned" ? !b.worker : true;
    return statusMatch && assignedMatch;
  });
}, [bookings, filterStatus, filterAssigned]);


  const fetchWorkers = async () => {
    try {
      const res = await API.get("/admin/workers");
      setWorkers(res.data.workers);
    } catch {
      alert("Failed to load workers");
    }
  };

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await API.get("/booking");
      setBookings(res.data);
    } catch {
      alert("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
    fetchWorkers();
  }, []);

  const assignWorker = async () => {
    if (!workerId) return alert("Select a worker");
    try {
      await API.put("/admin/assign-worker", {
        bookingId: selectedBooking._id,
        workerId,
      });
      alert("Worker assigned");
      setWorkerId("");
      fetchBookings();
    } catch (err) {
      alert(err.response?.data?.message || "Assignment failed");
    }
  };

  const updateStatus = async () => {
    if (!status) return alert("Select status");
    try {
      await API.put(`/booking/${selectedBooking._id}/status`, { status });
      alert("Status updated");
      fetchBookings();
    } catch {
      alert("Status update failed");
    }
  };

  const cancelBooking = async () => {
    if (!window.confirm("Cancel this booking?")) return;
    try {
      await API.put(`/booking/${selectedBooking._id}/cancel`);
      alert("Booking cancelled");
      fetchBookings();
    } catch {
      alert("Cancel failed");
    }
  };

  if (loading) return <div className="bm-loading">Loading bookings…</div>;




  return (
    <div className="bm-wrapper">
      <h2 className="bm-title">Booking Management</h2>

        <div className="bm-filters">
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="">All Statuses</option>
                {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <select value={filterAssigned} onChange={e => setFilterAssigned(e.target.value)}>
                <option value="">All</option>
                <option value="assigned">Assigned</option>
                <option value="unassigned">Unassigned</option>
            </select>

            <button className="btn primary" onClick={() => { setFilterStatus(""); setFilterAssigned(""); }}>Clear Filters</button>
        </div>

      <div className="bm-table-card">
        <table className="bm-table pro">
          <thead>
            <tr>
              <th>User</th>
              <th>Service</th>
              <th>Status</th>
              <th>Worker</th>
              <th>Payment</th>
              <th>Amount</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b._id}>
                <td>
                  <div className="cell-main">{b.username}</div>
                  <div className="cell-sub">ID: {b._id.slice(-6)}</div>
                </td>
                <td>{b.service}</td>
                <td>
                  <span className={`status-pill ${b.taskStatus}`}>{b.taskStatus}</span>
                </td>
                <td>{b.worker?.name || "—"}</td>
                <td>
                  <span className={`payment ${b.payment.status}`}>{b.payment.status}</span>
                </td>
                <td className="amount">₹{b.payment.amount}</td>
                <td className="amount">₹{b.phone}</td>
                <td>
                  <button
                    className="btn ghost"
                    onClick={() => {
                      setSelectedBooking(b);
                      setStatus(b.taskStatus);
                    }}
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {selectedBooking && (
        <div className="bm-manage-card slide-up">
          <h3>Manage Booking</h3>

          <div className="bm-grid">
            <p><b>ID:</b> {selectedBooking._id}</p>
            <p><b>Status:</b> {selectedBooking.taskStatus}</p>
            <p><b>Address:</b> {selectedBooking.location.address}</p>
            <p><b>Coords:</b> {selectedBooking.location.lat}, {selectedBooking.location.lng}</p>
          </div>

          <div className="bm-section">
            <h4>Assign Worker</h4>
            <div className="bm-row">
              <select value={workerId} onChange={(e) => setWorkerId(e.target.value)}>
                <option value="">Select Worker</option>
                {workers.map((w) => (
                  <option key={w._id} value={w.workerId}>{w.workerId} – {w.name}</option>
                ))}
              </select>
              <button className="btn success" onClick={assignWorker}>Assign</button>
            </div>
          </div>

          <div className="bm-section">
            <h4>Update Status</h4>
            <div className="bm-row">
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <button className="btn primary" onClick={updateStatus}>Update</button>
            </div>
          </div>

          <button className="btn danger" onClick={cancelBooking}>Cancel Booking</button>
        </div>
      )} */}

      {selectedBooking && (
  <div className="bm-modal-overlay" onClick={() => setSelectedBooking(null)}>
    <div className="bm-modal-card" onClick={e => e.stopPropagation()}>
      <h3>Manage Booking</h3>

      <div className="bm-grid">
        <p><b>ID:</b> {selectedBooking._id}</p>
        <p><b>Status:</b> {selectedBooking.taskStatus}</p>
        <p><b>Address:</b> {selectedBooking.location.address}</p>
        <p><b>Coords:</b> {selectedBooking.location.lat}, {selectedBooking.location.lng}</p>
      </div>

      <div className="bm-section">
        <h4>Assign Worker</h4>
        <div className="bm-row">
          {/* <select value={workerId} onChange={(e) => setWorkerId(e.target.value)}>
            <option value="">Select Worker</option>
            {workers.map((w) => (
              <option key={w._id} value={w.workerId}>{w.workerId} – {w.name}</option>
            ))}
          </select> */}
          <select
            value={workerId}
            onChange={(e) => setWorkerId(e.target.value)}
          >
            <option value="">Select Verified Worker</option>

            {workers
              .filter(w => w.verified === true)
              .map((w) => (
                <option key={w._id} value={w.workerId}>
                  {w.workerId} – {w.name}
                </option>
              ))}
          </select>

          <button className="btn success" onClick={assignWorker}>Assign</button>
        </div>
      </div>

      <div className="bm-section">
        <h4>Update Status</h4>
        <div className="bm-row">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <button className="btn primary" onClick={updateStatus}>Update</button>
        </div>
      </div>

      <button className="btn danger" onClick={cancelBooking}>Cancel Booking</button>
      <button className="btn ghost" onClick={() => setSelectedBooking(null)}>Close</button>
    </div>
  </div>
)}




    </div>
  );
}






















// import { useEffect, useState } from "react";
// import API from "../../../config/axiosConfig";
// import "./BookingManager.css";

// const statusOptions = ["requested", "accepted", "in-progress", "completed", "cancelled"];

// export default function BookingManager() {
//   const [workers, setWorkers] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [workerId, setWorkerId] = useState("");
//   const [status, setStatus] = useState("");

//   const fetchWorkers = async () => {
//     try {
//       const res = await API.get("/admin/workers");
//       setWorkers(res.data.workers);
//     } catch {
//       alert("Failed to load workers");
//     }
//   };

//   const fetchBookings = async () => {
//     try {
//       setLoading(true);
//       const res = await API.get("/booking");
//       setBookings(res.data);
//     } catch {
//       alert("Failed to load bookings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//     fetchWorkers();
//   }, []);

//   const assignWorker = async () => {
//     if (!workerId) return alert("Select a worker");
//     try {
//       await API.put("/admin/assign-worker", {
//         bookingId: selectedBooking._id,
//         workerId,
//       });
//       alert("Worker assigned");
//       setWorkerId("");
//       fetchBookings();
//     } catch (err) {
//       alert(err.response?.data?.message || "Assignment failed");
//     }
//   };

//   const updateStatus = async () => {
//     if (!status) return alert("Select status");
//     try {
//       await API.put(`/booking/${selectedBooking._id}/status`, { status });
//       alert("Status updated");
//       fetchBookings();
//     } catch {
//       alert("Status update failed");
//     }
//   };

//   const cancelBooking = async () => {
//     if (!window.confirm("Cancel this booking?")) return;
//     try {
//       await API.put(`/booking/${selectedBooking._id}/cancel`);
//       alert("Booking cancelled");
//       fetchBookings();
//     } catch {
//       alert("Cancel failed");
//     }
//   };

//   if (loading) return <div className="bm-loading">Loading bookings…</div>;

//   return (
//     <div className="bm-wrapper">
//       <h2 className="bm-title">Booking Management</h2>

//       <div className="bm-table-card">
//         <table className="bm-table">
//           <thead>
//             <tr>
//               <th>User</th>
//               <th>Service</th>
//               <th>Status</th>
//               <th>Worker</th>
//               <th>Payment</th>
//               <th>Amount</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((b) => (
//               <tr key={b._id} className="fade-in">
//                 <td>{b.username}</td>
//                 <td>{b.service}</td>
//                 <td><span className={`status ${b.taskStatus}`}>{b.taskStatus}</span></td>
//                 <td>{b.worker?.name || "Not Assigned"}</td>
//                 <td>{b.payment.status}</td>
//                 <td>₹{b.payment.amount}</td>
//                 <td>
//                   <button className="btn primary" onClick={() => {
//                     setSelectedBooking(b);
//                     setStatus(b.taskStatus);
//                   }}>
//                     Manage
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {selectedBooking && (
//         <div className="bm-manage-card slide-up">
//           <h3>Manage Booking</h3>

//           <div className="bm-grid">
//             <p><b>ID:</b> {selectedBooking._id}</p>
//             <p><b>Status:</b> {selectedBooking.taskStatus}</p>
//             <p><b>Address:</b> {selectedBooking.location.address}</p>
//             <p><b>Coords:</b> {selectedBooking.location.lat}, {selectedBooking.location.lng}</p>
//           </div>

//           <div className="bm-section">
//             <h4>Assign Worker</h4>
//             <div className="bm-row">
//               <select value={workerId} onChange={(e) => setWorkerId(e.target.value)}>
//                 <option value="">Select Worker</option>
//                 {workers.map((w) => (
//                   <option key={w._id} value={w.workerId}>{w.workerId} – {w.name}</option>
//                 ))}
//               </select>
//               <button className="btn success" onClick={assignWorker}>Assign</button>
//             </div>
//           </div>

//           <div className="bm-section">
//             <h4>Update Status</h4>
//             <div className="bm-row">
//               <select value={status} onChange={(e) => setStatus(e.target.value)}>
//                 {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
//               </select>
//               <button className="btn primary" onClick={updateStatus}>Update</button>
//             </div>
//           </div>

//           <button className="btn danger" onClick={cancelBooking}>Cancel Booking</button>
//         </div>
//       )}
//     </div>
//   );
// }








































// import { useEffect, useState } from "react";
// import API from "../../../config/axiosConfig";

// const statusOptions = [
//   "requested",
//   "accepted",
//   "in-progress",
//   "completed",
//   "cancelled",
// ];

// export default function BookingManager() {
//     const [workers, setWorkers] = useState([]);

//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [workerId, setWorkerId] = useState("");
//   const [status, setStatus] = useState("");





//   const fetchWorkers = async () => {
//   try {
//     const res = await API.get("/admin/workers");
//     setWorkers(res.data.workers);
//   } catch (err) {
//     alert("Failed to load workers");
//   }
// };



//   // =========================
//   // FETCH ALL BOOKINGS
//   // =========================
//   const fetchBookings = async () => {
//     try {
//       setLoading(true);
//       const res = await API.get("/booking");
//       setBookings(res.data);
//     } catch (err) {
//       alert("Failed to load bookings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//     fetchWorkers();
//   }, []);

//   // =========================
//   // ASSIGN WORKER
//   // =========================
//   const assignWorker = async () => {
//   if (!workerId) return alert("Select a worker");

//   try {
//     console.log(workerId);
//     await API.put("/admin/assign-worker", {
//       bookingId: selectedBooking._id,
//       workerId, // this is mongoose _id
//     });

//     alert("Worker assigned");
//     setWorkerId("");
//     fetchBookings();
//   } catch (err) {
//     alert(err.response?.data?.message || "Assignment failed");
//   }
// };


//   // =========================
//   // UPDATE STATUS
//   // =========================
//   const updateStatus = async () => {
//     if (!status) return alert("Select status");

//     try {
//       await API.put(`/booking/${selectedBooking._id}/status`, {
//         status,
//       });

//       alert("Status updated");
//       fetchBookings();
//     } catch {
//       alert("Status update failed");
//     }
//   };

//   // =========================
//   // CANCEL BOOKING
//   // =========================
//   const cancelBooking = async () => {
//     if (!window.confirm("Cancel this booking?")) return;

//     try {
//       await API.put(`/booking/${selectedBooking._id}/cancel`);
//       alert("Booking cancelled");
//       fetchBookings();
//     } catch {
//       alert("Cancel failed");
//     }
//   };

//   if (loading) return <h3>Loading bookings...</h3>;

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>📋 Booking Management Panel</h2>

//       {/* ================= BOOKINGS LIST ================= */}
//       <table border="1" cellPadding="10" width="100%">
//         <thead>
//           <tr>
//             <th>User</th>
//             <th>Service</th>
//             <th>Status</th>
//             <th>Worker</th>
//             <th>Payment</th>
//             <th>Amount</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((b) => (
//             <tr key={b._id}>
//               <td>{b.username}</td>
//               <td>{b.service}</td>
//               <td>{b.taskStatus}</td>
//               <td>{b.worker?.name || "Not Assigned"}</td>
//               <td>{b.payment.status}</td>
//               <td>₹{b.payment.amount}</td>
//               <td>
//                 <button onClick={() => {
//                   setSelectedBooking(b);
//                   setStatus(b.taskStatus);
//                 }}>
//                   Manage
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* ================= BOOKING CONTROLS ================= */}
//       {selectedBooking && (
//         <div style={{ marginTop: 30, padding: 20, border: "2px solid #333" }}>
//           <h3>⚙ Manage Booking</h3>

//           <p><b>Booking ID:</b> {selectedBooking._id}</p>
//           <p><b>Address:</b> {selectedBooking.location.address}</p>
//           <p>
//             <b>Coordinates:</b>{" "}
//             {selectedBooking.location.lat}, {selectedBooking.location.lng}
//           </p>

//           <p>
//             <b>Worker Live Location:</b>{" "}
//             {selectedBooking.workerLiveLocation?.coordinates?.join(", ") || "N/A"}
//           </p>

//           <hr />

//           {/* ASSIGN WORKER */}
//           <h4>👷 Assign Worker</h4>
//           <select value={workerId} onChange={(e) => setWorkerId(e.target.value)}>
//             <option value="">-- Select Worker --</option>
//             {workers.map((w) => (
//                 <option key={w._id} value={w.workerId}>
//                 {w.workerId} - {w.name}
//                 </option>
//             ))}
//             </select>

//             <button onClick={assignWorker}>Assign</button>

//           <hr />

//           {/* UPDATE STATUS */}
//           <h4>🔄 Update Status</h4>
//           <select value={status} onChange={(e) => setStatus(e.target.value)}>
//             {statusOptions.map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>
//           <button onClick={updateStatus}>Update</button>

//           <hr />

//           {/* CANCEL */}
//           <button style={{ color: "red" }} onClick={cancelBooking}>
//             ❌ Cancel Booking
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }