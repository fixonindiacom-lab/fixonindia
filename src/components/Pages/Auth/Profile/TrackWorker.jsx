import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../../../config/axiosConfig";
import LiveLocationMapWithWorker from "../../../Maps/LiveLocationMapWithWorker";

export default function TrackWorkerPage() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    API.get(`/booking/${bookingId}`)
      .then((res) => setBooking(res.data))
      .catch(console.error);
  }, [bookingId]);

  if (!booking) return <p>Loading tracking...</p>;

  if (!booking.worker)
    return <p>Worker not assigned yet</p>;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* INFO BAR */}
      <div
        style={{
          padding: "12px",
          background: "#0f172a",
          color: "white",
        }}
      >
        <b>Service:</b> {booking.service} |
        <b> Worker ID:</b> {booking.wrkr} |
        <b> Status:</b> {booking.taskStatus}
      </div>

      {/* MAP */}
      <LiveLocationMapWithWorker workerId={booking.wrkr} />
    </div>
  );
}
