import { useEffect, useState } from "react";
import API from "../../../../config/axiosConfig";
import BookingList from "./BookingList";
import "./Profile.css";

export default function ProfileDashboard() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const profileRes = await API.get("/auth/profile");
      console.log(profileRes.data.user);
      const userData = profileRes.data.user;
      setUser(userData);

      const bookingRes = await API.get(`/booking/user/${userData._id}`);
      setBookings(bookingRes.data);

      setLoading(false);
    };

    loadData().catch(console.error);
  }, []);

  if (loading) return <div className="pd-loader">Loading dashboard...</div>;

  return (
    <div className="pd-wrapper">
      {/* Sidebar */}
      <aside className="pd-sidebar fade-slide">
        <img
          src={user.avatar || "/avatar.png"}
          alt="avatar"
          className="pd-avatar"
        />

        <h3>{user.name}</h3>
        <p className="pd-email">{user.email}</p>
        <p className="pd-phone">{user.phone}</p>

        <div className="pd-wallet">
          <span className="wallet-label">Wallet Balance</span>
          <span className="wallet-amount">
            🪙 {user.wallet ?? 0}
          </span>
        </div>


        <button
          className="pd-edit-btn"
          onClick={() => (window.location.href = "/complete-profile")}
        >
          Edit Profile
        </button>
      </aside>

      {/* Main Content */}
      <main className="pd-content fade-in">
        <h2>My Services</h2>
        <BookingList bookings={bookings} />
      </main>
    </div>
  );
}






























// import { useEffect, useState } from "react";
// import API from "../../../../config/axiosConfig";
// import BookingList from "./BookingList";
// import "./Profile.css";

// export default function ProfileDashboard() {
//   const [user, setUser] = useState(null);
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       const profileRes = await API.get("/auth/profile");
//       const userData = profileRes.data.user;
//       setUser(userData);

//       // IMPORTANT: username === userId
//       const bookingRes = await API.get(
//         `/booking/user/${userData._id}`
//       );
//       setBookings(bookingRes.data);

//       setLoading(false);
//     };

//     loadData().catch(console.error);
//   }, []);

//   if (loading) return <div className="loader">Loading dashboard...</div>;

//   return (
//     <div className="dashboard">
//       <aside className="sidebar">
//         <img src={user.avatar || "/avatar.png"} alt="avatar" />
//         <h3>{user.name}</h3>
//         <p>{user.email}</p>
//         <p>{user.phone}</p>

//         <button onClick={() => location.href="/complete-profile"}>
//           Edit Profile
//         </button>
//       </aside>

//       <main className="content">
//         <h2>My Services</h2>
//         <BookingList bookings={bookings} />
//       </main>
//     </div>
//   );
// }
