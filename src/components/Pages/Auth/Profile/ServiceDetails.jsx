import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../../config/axiosConfig";
import TrackWorker from "./TrackWorker";

export default function ServiceDetails() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  const updateStatus = async (status) => {
    const { data } = await API.put(`/booking/${id}/status`, { status });
    setBooking(data.booking);
  };

  useEffect(() => {
    API.get(`/booking/${id}`)
      .then((res) => setBooking(res.data))
      .catch(console.error);
  }, [id]);

  if (!booking) return <p>Loading service...</p>;

  return (
    <div className="service-detail">
      <h2>{booking.serviceName}</h2>
      <p>Status: {booking.taskStatus}</p>
      <p>Amount: ₹{booking.price}</p>

      <div className="status-actions">
        <button onClick={() => updateStatus("in-progress")}>Start</button>
        <button onClick={() => updateStatus("completed")}>Complete</button>
        <button onClick={() => updateStatus("cancelled")}>Cancel</button>
      </div>

      {/* TRACK WORKER */}
      {booking.worker && (
        <TrackWorker workerId={booking.worker._id} />
      )}
    </div>
  );
}
