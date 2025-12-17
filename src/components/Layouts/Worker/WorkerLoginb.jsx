import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../config/axiosConfig";
import "./WorkerLoginb.css";

export default function WorkerLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await API.post("/worker/login", {
        email: email || undefined,
        phone: phone || undefined,
      });

      setMessage(res.data.message);

      // save token
      localStorage.setItem("workerToken", res.data.token);
      localStorage.setItem("workerData", JSON.stringify(res.data.worker));

      navigate("/worker/tasks");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="worker-login-container">
      <form className="worker-login-card" onSubmit={handleLogin}>
        <h2>Worker Login</h2>

        {message && <p className="msg">{message}</p>}

        <input
          type="email"
          placeholder="Email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p style={{ textAlign: "center", margin: "5px 0", color: "#555" }}>
          OR
        </p>

        <input
          type="text"
          placeholder="Phone Number "
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
