import { useState } from "react";
import BookingDetails from "./BookingDetails";

export default function BookingCard({ booking }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="booking-card" onClick={() => setOpen(true)}>
        <h4>{booking.service}</h4>

        <span className={`badge ${booking.taskStatus}`}>
          {booking.taskStatus}
        </span>

        <p>₹ {booking.payment.amount}</p>
        <small>{booking.scheduledDate} • {booking.scheduledTime}</small>
      </div>

      {open && (
        <BookingDetails booking={booking} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
