import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";


// Fix marker icons
import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function LiveLocationMap() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        alert("GPS not supported");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.error(err);
        },
        { enableHighAccuracy: true }
      );
    };

    // Get first location
    getLocation();

    // Update every 5 seconds
    const interval = setInterval(getLocation, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!position) return <p>Fetching your GPS location...</p>;

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "90vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
}
