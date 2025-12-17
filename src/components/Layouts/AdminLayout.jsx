import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./Admin/admin.css";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("ADMIN_ACCESS_GRANTED");
    navigate("/admin/login");
  };

  return (
    <div className="admin-wrapper">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h3>Admin Panel</h3>

        <NavLink to="bookings">Bookings</NavLink>
        <NavLink to="workers">Workers</NavLink>
        <NavLink to="tracking">Live Tracking</NavLink>

        <button className="logout" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h2>Dashboard</h2>
        </header>

        <section className="admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}




















// import { useEffect, useState } from "react";
// import AdminWorkers from "../Pages/Admin/AdminWorkers";
// import WorkerLocationCheck from "../Maps/WorkerLocationCheck";
// import BookingManager from "../Pages/Bookings/BookingManager";

// const ADMIN_KEY = "ADMIN_ACCESS_GRANTED";
// const ADMIN_PIN = "123456"; // 🔒 change this

// export default function AdminLayout() {
//   const [authorized, setAuthorized] = useState(false);
//   const [pin, setPin] = useState("");
//   const [error, setError] = useState("");
//   const [tab, setTab] = useState("bookings");

//   useEffect(() => {
//     const saved = localStorage.getItem(ADMIN_KEY);
//     if (saved === "true") setAuthorized(true);
//   }, []);

//   const handleLogin = () => {
//     if (pin === ADMIN_PIN) {
//       localStorage.setItem(ADMIN_KEY, "true");
//       setAuthorized(true);
//     } else {
//       setError("Invalid 6-digit admin PIN");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem(ADMIN_KEY);
//     setAuthorized(false);
//     setPin("");
//   };

//   // ================= ACCESS SCREEN =================
//   if (!authorized) {
//     return (
//       <div style={styles.lockScreen}>
//         <div style={styles.lockCard}>
//           <h2>🔐 Admin Access</h2>
//           <p>Enter 6-digit admin password</p>

//           <input
//             type="password"
//             maxLength={6}
//             value={pin}
//             onChange={(e) => setPin(e.target.value)}
//             style={styles.input}
//           />

//           {error && <p style={{ color: "red" }}>{error}</p>}

//           <button style={styles.primaryBtn} onClick={handleLogin}>
//             Enter Admin Panel
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ================= ADMIN DASHBOARD =================
//   return (
//     <div style={styles.container}>
//       {/* TOP BAR */}
//       <header style={styles.header}>
//         <h2>🛠 Admin Control Panel</h2>
//         <button onClick={logout} style={styles.logoutBtn}>Logout</button>
//       </header>

//       {/* NAV TABS */}
//       <nav style={styles.nav}>
//         <button
//           style={tab === "bookings" ? styles.activeTab : styles.tab}
//           onClick={() => setTab("bookings")}
//         >
//           📋 Bookings
//         </button>
//         <button
//           style={tab === "workers" ? styles.activeTab : styles.tab}
//           onClick={() => setTab("workers")}
//         >
//           👷 Workers
//         </button>
//         <button
//           style={tab === "tracking" ? styles.activeTab : styles.tab}
//           onClick={() => setTab("tracking")}
//         >
//           📍 Live Tracking
//         </button>
//       </nav>

//       {/* CONTENT */}
//       <main style={styles.content}>
//         {tab === "bookings" && <BookingManager />}
//         {tab === "workers" && <AdminWorkers />}
//         {tab === "tracking" && <WorkerLocationCheck />}
//       </main>
//     </div>
//   );
// }

// // ================= STYLES =================
// const styles = {
//   lockScreen: {
//     height: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "linear-gradient(135deg, #0f172a, #020617)",
//   },
//   lockCard: {
//     background: "#fff",
//     padding: 30,
//     width: 320,
//     borderRadius: 12,
//     textAlign: "center",
//     boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//   },
//   input: {
//     width: "100%",
//     padding: 10,
//     fontSize: 18,
//     textAlign: "center",
//     letterSpacing: 5,
//     marginBottom: 15,
//   },
//   primaryBtn: {
//     width: "100%",
//     padding: 12,
//     background: "#2563eb",
//     color: "#fff",
//     border: "none",
//     borderRadius: 6,
//     cursor: "pointer",
//   },
//   container: {
//     minHeight: "100vh",
//     background: "#f8fafc",
//   },
//   header: {
//     padding: "15px 30px",
//     background: "#020617",
//     color: "#fff",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   logoutBtn: {
//     background: "#ef4444",
//     color: "#fff",
//     border: "none",
//     padding: "8px 14px",
//     borderRadius: 6,
//     cursor: "pointer",
//   },
//   nav: {
//     display: "flex",
//     gap: 10,
//     padding: 15,
//     background: "#e5e7eb",
//   },
//   tab: {
//     padding: "10px 16px",
//     border: "none",
//     cursor: "pointer",
//     borderRadius: 6,
//     background: "#fff",
//   },
//   activeTab: {
//     padding: "10px 16px",
//     border: "none",
//     cursor: "pointer",
//     borderRadius: 6,
//     background: "#2563eb",
//     color: "#fff",
//   },
//   content: {
//     padding: 20,
//   },
// };





















// // import AdminWorkers from "../Pages/Admin/AdminWorkers";
// // import WorkerLocationCheck from "../Maps/WorkerLocationCheck";
// // import BookingManager from "../Pages/Bookings/BookingManager";

// // const AdminLayout = () => {
// //     return (
// //         <>
// //             <h1>Admin Zone</h1>
// //             <AdminWorkers/>
// //             <WorkerLocationCheck/>
// //             <BookingManager/>
// //         </>
// //     );
// // };

// // export default AdminLayout;