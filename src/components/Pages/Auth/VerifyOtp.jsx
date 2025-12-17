import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../config/axiosConfig";
import "./VerifyOtp.css";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const email = localStorage.getItem("verifyEmail");

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  useEffect(() => {
    if (!email) navigate("/register");
  }, [email, navigate]);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await API.post("/auth/verify-register", {
        email,
        otp,
        name: localStorage.getItem("regName"),
        phone: localStorage.getItem("regPhone"),
        password: localStorage.getItem("regPassword"),
      });
      localStorage.setItem("utoken", res.data.utoken);

      setMessage(res.data.message);

      // clear temp data
      localStorage.removeItem("verifyEmail");
      localStorage.removeItem("regName");
      localStorage.removeItem("regPhone");
      localStorage.removeItem("regPassword");


      navigate("/complete-profile");
      window.location.reload();

    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    setResendLoading(true);
    try {
      const res = await API.post("/auth/resend-otp", { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="otp-page">
      <form className="otp-card" onSubmit={handleVerify}>
        <h2 className="otp-header">Verify OTP</h2>

        <p className="otp-subtitle">
          OTP sent to <b>{email}</b>
        </p>

        {message && <p className="otp-alert">{message}</p>}

        <input
          type="text"
          className="otp-field"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button className="otp-submit" disabled={loading}>
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <button
          type="button"
          className="otp-resend"
          onClick={resendOtp}
          disabled={resendLoading}
        >
          {resendLoading ? "Resending..." : "Resend OTP"}
        </button>
      </form>
    </div>
  );
}
