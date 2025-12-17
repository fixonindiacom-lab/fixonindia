import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const isAdmin = localStorage.getItem("ADMIN_ACCESS_GRANTED") === "true";
  return isAdmin ? children : <Navigate to="/admin/login" replace />;
}
