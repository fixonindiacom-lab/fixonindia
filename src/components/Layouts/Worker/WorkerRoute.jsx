import { Navigate } from "react-router-dom";

export default function WorkerRoute({ children }) {
  const isWorkerLoggedIn = localStorage.getItem("WORKER_AUTH") === "true";
  return isWorkerLoggedIn ? children : <Navigate to="/worker/login" replace />;
}
