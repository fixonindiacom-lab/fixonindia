import { useEffect, useState } from "react";
import API from "../../../../config/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function UserServices({ username }) {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/booking/user/${username}`)
      .then((res) => setBookings(res.data))
      .catch(console.error);
  }, [username]);

  return (
    <div className="services-card">
      <h3>My Services</h3>

      {bookings.length === 0 && <p>No services booked</p>}

      {bookings.map((b) => (
        <div
          key={b._id}
          className="service-item"
          onClick={() => navigate(`/service/${b._id}`)}
        >
          <div>
            <strong>{b.serviceName}</strong>
            <p>Status: <span className={b.taskStatus}>{b.taskStatus}</span></p>
          </div>

          <p>₹{b.price}</p>
        </div>
      ))}
    </div>
  );
}
