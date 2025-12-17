import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../config/axiosConfig";
import "./Forgot.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await API.post("/auth/forgot-password", { email });
      setMsg(res.data.message);

      localStorage.setItem("resetEmail", email);
      navigate("/reset-password");
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fp-wrapper">
      <form className="fp-form" onSubmit={handleSubmit}>
        <h2 className="fp-title">Forgot Password</h2>

        {msg && <p className="fp-msg">{msg}</p>}

        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="fp-input"
          required
        />

        <button type="submit" className="fp-btn" disabled={loading}>
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      </form>
    </div>
  );
}
