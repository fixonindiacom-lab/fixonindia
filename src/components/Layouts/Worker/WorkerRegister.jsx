import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../config/axiosConfig";
import CameraCapture from "./CameraCapture";
import "./WorkerRegister.css";

export default function WorkerRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [profilePic, setProfilePic] = useState(null);
  const [aadharPic, setAadharPic] = useState(null);
  const [panPic, setPanPic] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!profilePic || !aadharPic || !panPic) {
      return setMessage("Please capture all required images");
    }

    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();

      Object.keys(form).forEach((key) =>
        data.append(key, form[key])
      );

      data.append("profilePic", profilePic);
      data.append("aadharPic", aadharPic);
      data.append("panPic", panPic);

      const res = await API.post("/worker/register", data);

      setMessage(res.data.message);
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="worker-register-container">
      <form className="worker-register-card" onSubmit={handleRegister}>
        <h2>Register Worker</h2>

        {message && <p className="msg">{message}</p>}

        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="city" placeholder="City" onChange={handleChange} required />

        {/* CAMERA ONLY */}
        <CameraCapture label="Profile Picture" onCapture={setProfilePic} />
        <CameraCapture label="Aadhaar Card" onCapture={setAadharPic} />
        <CameraCapture label="PAN Card" onCapture={setPanPic} />

        <button disabled={loading}>
          {loading ? "Registering..." : "Register Worker"}
        </button>
      </form>
    </div>
  );
}
































// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../../../config/axiosConfig";
// import "./WorkerRegister.css";

// export default function WorkerRegister() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//   });

//   const [profilePic, setProfilePic] = useState(null);
//   const [aadharPic, setAadharPic] = useState(null);
//   const [panPic, setPanPic] = useState(null);

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const data = new FormData();
//       data.append("name", form.name);
//       data.append("email", form.email);
//       data.append("phone", form.phone);
//       data.append("address", form.address);
//       data.append("city", form.city);

//       data.append("profilePic", profilePic);
//       data.append("aadharPic", aadharPic);
//       data.append("panPic", panPic);

//       const res = await API.post("/worker/register", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setMessage(res.data.message);

//       // redirect to dashboard or home
//       navigate("/");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="worker-register-container">
//       <form className="worker-register-card" onSubmit={handleRegister}>
//         <h2>Register Worker</h2>

//         {message && <p className="msg">{message}</p>}

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Worker Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           value={form.phone}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="address"
//           placeholder="Full Address"
//           value={form.address}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={form.city}
//           onChange={handleChange}
//           required
//         />

//         {/* FILE UPLOADS */}
//         <label>Profile Picture</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setProfilePic(e.target.files[0])}
//           required
//         />

//         <label>Aadhar Card Picture</label>
//         <input
//           type="file"
//           accept="image/*"
//           capture="environment"
//           onChange={(e) => setAadharPic(e.target.files[0])}
//           required
//         />

//         <label>PAN Card Picture</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setPanPic(e.target.files[0])}
//           required
//         />

//         <button disabled={loading}>
//           {loading ? "Registering..." : "Register Worker"}
//         </button>
//       </form>
//     </div>
//   );
// }
