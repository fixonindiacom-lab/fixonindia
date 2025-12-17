import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../config/axiosConfig";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("utoken", res.data.utoken);
      setMessage(res.data.message);
      navigate("/profile");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-header">Sign In</h2>

        {message && <p className="login-alert">{message}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="login-field"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="login-field"
          required
        />

        <button type="submit" className="login-submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="login-footer">
          Forgot password? <span onClick={() => navigate("/forgot-password")}>Reset here</span>
        </p>
      </form>
    </div>
  );
}
