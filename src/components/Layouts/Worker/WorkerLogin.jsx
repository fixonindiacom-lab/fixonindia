import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./worker.css";

export default function WorkerLogin() {
  const [workerId, setWorkerId] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (workerId.trim()) {
      localStorage.setItem("WORKER_AUTH", "true");
      navigate("/worker");
    }
  };

  return (
    <div className="worker-login">
      <div className="login-card">
        <h2>Worker Login</h2>

        <input
          placeholder="Worker ID"
          value={workerId}
          onChange={(e) => setWorkerId(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
