import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import API from "../../config/axiosConfig";
import "leaflet/dist/leaflet.css";

// Custom icons
const userIcon = new L.Icon({
  iconUrl: "https://tse2.mm.bing.net/th/id/OIP.4eonAlabRGvB5Jj95VYydgHaHa?pid=Api&P=0&h=180",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const workerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Fix default icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function WorkerLocationCheck() {
  const [userPosition, setUserPosition] = useState(null);
  const [workerPosition, setWorkerPosition] = useState(null);

  const [workerId, setWorkerId] = useState(""); // input
  const [activeWorkerId, setActiveWorkerId] = useState(""); // final worker ID to fetch

  // -------------------------
  // Track user GPS live
  // -------------------------
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("GPS not supported");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setUserPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => console.error("User GPS error:", err),
      { enableHighAccuracy: true, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // -------------------------
  // Fetch selected worker's GPS every 5 seconds
  // -------------------------
  useEffect(() => {
    if (!activeWorkerId) return;

    const fetchWorkerLocation = async () => {
      try {
        const { data } = await API.get(`/worker/location/${activeWorkerId}`);
        if (data.location && data.location.length === 2) {
          setWorkerPosition({
            lat: data.location[0],
            lng: data.location[1],
          });
        }
      } catch (err) {
        console.error("Worker fetch error:", err);
      }
    };

    fetchWorkerLocation();
    const interval = setInterval(fetchWorkerLocation, 5000);

    return () => clearInterval(interval);
  }, [activeWorkerId]);

  if (!userPosition) return <p>Fetching your GPS location...</p>;

  const center = workerPosition
    ? {
        lat: (userPosition.lat + workerPosition.lat) / 2,
        lng: (userPosition.lng + workerPosition.lng) / 2,
      }
    : userPosition;

  return (
    <div>
      {/* Worker ID Input */}
      <div style={{ padding: "10px", background: "#f0f0f0" }}>
        <input
          type="text"
          placeholder="Enter Worker ID"
          value={workerId}
          onChange={(e) => setWorkerId(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            marginRight: "10px",
            borderRadius: "8px",
          }}
        />
        <button
          onClick={() => setActiveWorkerId(workerId)}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            background: "blue",
            color: "white",
            cursor: "pointer",
          }}
        >
          Track Worker
        </button>
      </div>

      <MapContainer center={center} zoom={15} style={{ height: "90vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* User Marker */}
        <Marker position={userPosition} icon={userIcon}>
          <Popup>You are here</Popup>
        </Marker>

        {/* Worker Marker */}
        {workerPosition && (
          <Marker position={workerPosition} icon={workerIcon}>
            <Popup>Worker Location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
