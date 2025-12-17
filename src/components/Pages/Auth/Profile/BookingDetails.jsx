import { useNavigate } from "react-router-dom";
import API from "../../../../config/axiosConfig";

export default function BookingDetails({ booking, onClose }) {
  const navigate = useNavigate();

  const canTrack =
    booking.taskStatus === "accepted" ||
    booking.taskStatus === "in-progress";

  return (
    <div className="modal">
      <div className="modal-box">
        <h2>{booking.service}</h2>

        <div className="details-grid">
          <p><b>Status:</b> {booking.taskStatus}</p>
          <p><b>Booking ID:</b> {booking._id}</p>
          <p><b>Worker ID:</b> {booking.worker || "Not assigned yet"}</p>
          <p><b>Phone:</b> {booking.phone}</p>
          <p><b>Scheduled:</b> {booking.scheduledDate} • {booking.scheduledTime}</p>
          <p><b>Payment:</b> ₹{booking.payment.amount} ({booking.payment.status})</p>
          <p><b>Address:</b> {booking.location?.address}</p>
        </div>

        <div className="actions">
          {canTrack && booking.worker && (
            <button
              className="track-btn"
              onClick={() =>
                navigate(`/track-worker/${booking._id}`)
              }
            >
              Track Worker
            </button>
          )}

          <button className="close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}































// import API from "../../../../config/axiosConfig";
// import TrackWorker from "./TrackWorker";

// export default function BookingDetails({ booking, onClose }) {

//   const updateStatus = async (status) => {
//     await API.put(`/booking/${booking._id}/status`, { status });
//     window.location.reload();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-box">
//         <h2>{booking.service}</h2>

//         <p><b>Address:</b> {booking.location?.address}</p>
//         <p><b>Phone:</b> {booking.phone}</p>
//         <p><b>Amount:</b> ₹{booking.payment.amount}</p>
//         <p><b>Status:</b> {booking.taskStatus}</p>

//         <div className="actions">
//           {booking.taskStatus !== "completed" && (
//             <>
//               {/* <button onClick={() => updateStatus("in-progress")}>
//                 Start
//               </button> */}
//               {/* <button onClick={() => updateStatus("completed")}>
//                 Complete
//               </button> */}
//             </>
//           )}
//         </div>

//         {booking.worker && (
//           <TrackWorker workerId={booking.worker} />
//         )}

//         <button className="close" onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }
