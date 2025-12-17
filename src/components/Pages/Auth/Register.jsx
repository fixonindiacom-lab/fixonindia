import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../config/axiosConfig";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

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
      const res = await API.post("/auth/register", form);
      setMessage(res.data.message);

      localStorage.setItem("verifyEmail", form.email);
      localStorage.setItem("regName", form.name);
      localStorage.setItem("regPhone", form.phone);
      localStorage.setItem("regPassword", form.password);

      navigate("/verify-otp");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2 className="register-header">Create Account</h2>

        {message && <p className="register-alert">{message}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="register-field"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="register-field"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="register-field"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="register-field"
          required
        />

        <button
          type="submit"
          className="register-submit"
          disabled={loading}
        >
          {loading ? "Sending OTP..." : "Register"}
        </button>

        <p className="register-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}
