import { useEffect } from "react";
import API from "../../config/axiosConfig";

export default function WorkerLiveUpdater() {
  // Check localStorage for worker data
  const workerData = JSON.parse(localStorage.getItem("workerData"));
  if (!workerData || !workerData.workerId) return null;

  const workerId = workerData.workerId;

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation not supported");
      return;
    }

    const sendLocation = (pos) => {
      const lat = pos.coords.latitude + 0.005 ;
      const lng = pos.coords.longitude + 0.005;


      // Call backend to update location
      API.put(`/worker/location/update/${workerId}`, { lat, lng })
        .then(() => console.log("Location updated:", lat, lng))
        .catch((err) => console.error("Location update error:", err));
    };

    // Start watching the worker location
    const watchId = navigator.geolocation.watchPosition(
      sendLocation,
      (err) => console.error("GPS Error:", err),
      { enableHighAccuracy: true, maximumAge: 0 }
    );

    // Cleanup watcher on unmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, [workerId]);

  return null; // This component renders nothing
}
