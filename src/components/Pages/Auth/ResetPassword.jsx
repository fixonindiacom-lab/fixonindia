import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../config/axiosConfig";
import "./Reset.css"; // new css file

export default function ResetPassword() {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const email = localStorage.getItem("resetEmail");

  useEffect(() => {
    if (!email) navigate("/forgot-password");
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await API.post("/auth/reset-password", {
        email,
        otp,
        newPassword,
      });

      setMessage(res.data.message);
      localStorage.removeItem("resetEmail");
      navigate("/login");
    } catch (err) {
      setMessage(err.response?.data?.message || "Password reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="auth-header">Reset Password</h2>

        {message && <p className="auth-alert">{message}</p>}

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="auth-field"
          required
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="auth-field"
          required
        />

        <button type="submit" className="auth-submit" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
