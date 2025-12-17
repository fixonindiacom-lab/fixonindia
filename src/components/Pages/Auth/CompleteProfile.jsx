import { useState, useEffect } from "react";
import API from "../../../config/axiosConfig";
import "./CompleteProfile.css";

export default function CompleteProfile() {
  const [form, setForm] = useState({
    address: "",
    location: "",  // auto-filled from GPS
  });

  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Load user data (except services & location)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/auth/profile");
        const user = res.data.user;
        setForm((prev) => ({
          ...prev,
          address: user.address || "",
        }));

        if (user.avatar) setAvatarPreview(user.avatar);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  // Auto-detect location LIVE
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("GPS not supported");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setForm((prev) => ({
          ...prev,
          location: `${lat},${lng}`, // always updated
        }));
      },
      (err) => console.error("GPS error:", err),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  // Submit profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const formData = new FormData();
      formData.append("address", form.address);

      // Always send auto-GPS
      formData.append("location", form.location);

      if (avatar) {
        formData.append("avatar", avatar);
      }

      const res = await API.put("/auth/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Profile update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cp-wrapper">
      <form onSubmit={handleSubmit} className="cp-form">
        <h2 className="cp-title">Complete Profile</h2>

        {msg && <p className="cp-msg">{msg}</p>}

        {/* Avatar preview */}
        <div className="cp-avatar-box">
          {avatarPreview ? (
            <img src={avatarPreview} alt="Preview" className="cp-avatar" />
          ) : (
            <div className="cp-avatar placeholder">No Avatar</div>
          )}
        </div>

        <label className="cp-label">Upload Avatar</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="cp-file"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="cp-input"
          required
        />

        <button type="submit" disabled={loading} className="cp-btn">
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}




























// import { useState, useEffect } from "react";
// import API from "../../../config/axiosConfig";
// import "./CompleteProfile.css";

// export default function CompleteProfile() {
//   const [form, setForm] = useState({
//     address: "",
//     services: "",
//     location: "",
//   });
//   const [avatar, setAvatar] = useState(null);
//   const [avatarPreview, setAvatarPreview] = useState("");
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await API.get("/auth/profile");
//         const user = res.data.user;

//         setForm({
//           address: user.address || "",
//           services: user.services || "",
//           location: user.location || "",
//         });

//         if (user.avatar) setAvatarPreview(user.avatar);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAvatarChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       setAvatar(file);
//       setAvatarPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("");

//     try {
//       const formData = new FormData();
//       formData.append("address", form.address);
//       formData.append("services", form.services);
//       formData.append("location", form.location);
//       if (avatar) formData.append("avatar", avatar);

//       const res = await API.put("/auth/profile", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setMsg(res.data.message);
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Profile update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="cp-wrapper">
//       <form onSubmit={handleSubmit} className="cp-form">
//         <h2 className="cp-title">Complete Profile</h2>

//         {msg && <p className="cp-msg">{msg}</p>}

//         {/* Avatar preview */}
//         <div className="cp-avatar-box">
//           {avatarPreview ? (
//             <img src={avatarPreview} alt="Preview" className="cp-avatar" />
//           ) : (
//             <div className="cp-avatar placeholder">No Avatar</div>
//           )}
//         </div>

//         <label className="cp-label">Upload Avatar</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleAvatarChange}
//           className="cp-file"
//         />

//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={form.address}
//           onChange={handleChange}
//           className="cp-input"
//           required
//         />

//         <input
//           type="text"
//           name="services"
//           placeholder="Services (comma separated)"
//           value={form.services}
//           onChange={handleChange}
//           className="cp-input"
//           required
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={form.location}
//           onChange={handleChange}
//           className="cp-input"
//           required
//         />

//         <button type="submit" disabled={loading} className="cp-btn">
//           {loading ? "Updating..." : "Update Profile"}
//         </button>
//       </form>
//     </div>
//   );
// }
