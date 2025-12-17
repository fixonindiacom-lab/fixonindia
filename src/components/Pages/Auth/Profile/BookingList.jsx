import BookingCard from "./BookingCard";

export default function BookingList({ bookings }) {
  if (!bookings.length) {
    return <p className="empty">No services booked yet</p>;
  }

  return (
    <div className="booking-grid">
      {bookings.map((b) => (
        <BookingCard key={b._id} booking={b} />
      ))}
    </div>
  );
}
