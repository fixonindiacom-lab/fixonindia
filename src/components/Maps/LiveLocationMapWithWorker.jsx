import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState , useRef } from "react";
import API from "../../config/axiosConfig";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

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

// Routing component
function Routing({ start, end }) {
  const map = useMap();
  const routingRef = useRef(null);

  useEffect(() => {
    if (!start || !end) return;

    // Create routing control only once
    if (!routingRef.current) {
      routingRef.current = L.Routing.control({
        waypoints: [L.latLng(start.lat, start.lng), L.latLng(end.lat, end.lng)],
        lineOptions: { styles: [{ color: "blue", weight: 5 }] },
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true, // Only fits once
        showAlternatives: false,
      }).addTo(map);
    } else {
      // Update waypoints without recreating control
      routingRef.current.setWaypoints([L.latLng(start.lat, start.lng), L.latLng(end.lat, end.lng)]);
    }

    return () => {
      // Don't remove the routingControl on every update
      // Only remove on unmount if needed
    };
  }, [start, end, map]);

  return null;
}


export default function LiveLocationMapWithWorkerRouting({ workerId }) {
  const [userPosition, setUserPosition] = useState(null);
  const [workerPosition, setWorkerPosition] = useState(null);

  // Track user GPS live
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => setUserPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => console.error(err),
      { enableHighAccuracy: true, maximumAge: 0 }
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // Fetch worker GPS
  useEffect(() => {
    if (!workerId) return;

    const fetchWorkerLocation = async () => {
      try {
        const { data } = await API.get(`/worker/location/${workerId}`);
        if (data.location && data.location.length === 2) {
          setWorkerPosition({ lat: data.location[0], lng: data.location[1] });
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchWorkerLocation();
    const interval = setInterval(fetchWorkerLocation, 5000);
    return () => clearInterval(interval);
  }, [workerId]);

  if (!userPosition) return <p>Fetching your GPS location...</p>;

  const center = workerPosition
    ? { lat: (userPosition.lat + workerPosition.lat) / 2, lng: (userPosition.lng + workerPosition.lng) / 2 }
    : userPosition;

  return (
    <MapContainer center={center} zoom={15} style={{ height: "90vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Markers */}
      <Marker position={userPosition} icon={userIcon}>
        <Popup>You are here</Popup>
      </Marker>
      {workerPosition && (
        <Marker position={workerPosition} icon={workerIcon}>
          <Popup>Worker Location</Popup>
        </Marker>
      )}

      {/* Routing */}
      {userPosition && workerPosition && <Routing start={userPosition} end={workerPosition} />}
    </MapContainer>
  );
}





















































// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import { useEffect, useState } from "react";
// import API from "../../config/axiosConfig";
// import "leaflet/dist/leaflet.css";



// // Custom icons
// const userIcon = new L.Icon({
//   iconUrl: "https://up.yimg.com/ib/th/id/OIP.idVGEWhECKALf0pVSnr5kgHaHk?pid=Api&rs=1&c=1&qlt=95&w=106&h=109", // blue
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const workerIcon = new L.Icon({
//    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", // blue
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });






// // Fix marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// export default function LiveLocationMapWithWorker({ workerId }) {
//   const [userPosition, setUserPosition] = useState(null);
//   const [workerPosition, setWorkerPosition] = useState(null);

//   // -------------------------
//   // Track user GPS live
//   // -------------------------
//   useEffect(() => {
//     if (!navigator.geolocation) {
//       alert("GPS not supported");
//       return;
//     }

//     const watchId = navigator.geolocation.watchPosition(
//       (pos) => {
//         setUserPosition({
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//         });
//       },
//       (err) => console.error("User GPS error:", err),
//       { enableHighAccuracy: true, maximumAge: 0 }
//     );

//     return () => navigator.geolocation.clearWatch(watchId);
//   }, []);

//   // -------------------------
//   // Fetch worker GPS every 5 seconds
//   // -------------------------
//   useEffect(() => {
//     if (!workerId) return;

//     const fetchWorkerLocation = async () => {
//       try {
//         const { data } = await API.get(`/worker/location/${workerId}`);
//         if (data.location && data.location.length === 2) {
//           setWorkerPosition({
//             lat: data.location[0],
//             lng: data.location[1],
//           });
//         }
//       } catch (err) {
//         console.error("Worker fetch error:", err);
//       }
//     };

//     fetchWorkerLocation(); // initial fetch
//     const interval = setInterval(fetchWorkerLocation, 5000); // refresh every 5 sec

//     return () => clearInterval(interval);
//   }, [workerId]);

//   if (!userPosition) return <p>Fetching your GPS location...</p>;

//   // Center map between user and worker if both exist
//   const center = workerPosition
//     ? {
//         lat: (userPosition.lat + workerPosition.lat) / 2,
//         lng: (userPosition.lng + workerPosition.lng) / 2,
//       }
//     : userPosition;

//   return (
//     <MapContainer center={center} zoom={15} style={{ height: "90vh", width: "100%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="&copy; OpenStreetMap contributors"
//       />

//       {/* User Marker */}
//       <Marker position={userPosition}  icon={userIcon}>
//         <Popup>You are here</Popup>
//       </Marker>

//       {/* Worker Marker */}
//       {workerPosition && (
//         <Marker position={workerPosition} icon={workerIcon} >
//           <Popup>Worker Location</Popup>
//         </Marker>
//       )}
//     </MapContainer>
//   );
// }
