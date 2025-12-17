import { useEffect, useState } from "react";
import APIW from "../../../config/workerAxios";
import "./WorkerTasks.css";

export default function WorkerTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await APIW.get("/worker/my-bookings");
      setTasks(res.data.bookings);
    } catch {
      alert("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const rejWork = async (id) => {
    if (!window.confirm("Reject this task?")) return;

    try {
      await APIW.patch(`/worker/bookings/${id}/rej`);
      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.message || "Action failed");
    }
  };


  const startWork = async (id) => {
    if (!window.confirm("Start this task?")) return;

    try {
      await APIW.patch(`/worker/bookings/${id}/start`);
      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.message || "Action failed");
    }
  };

  if (loading) return <p className="wt-loading">Loading tasks...</p>;

  return (
    <div className="wt-wrapper">
      <h2 className="wt-title">My Tasks</h2>

      {tasks.length === 0 && <p>No tasks assigned</p>}

      <div className="wt-grid">
        {tasks.map((t) => (
          <div className="wt-card" key={t._id}>
            <div className="wt-header">
              <span className={`wt-status ${t.taskStatus}`}>
                {t.taskStatus}
              </span>
              <span className="wt-service">{t.service}</span>
            </div>

            <div className="wt-body">
              <p><b>User:</b> {t.username}</p>
              <p><b>Address:</b> {t.location.address}</p>
              <p><b>Date:</b> {t.scheduledDate || "—"}</p>
              <p><b>Time:</b> {t.scheduledTime || "—"}</p>
              <p><b>Payment:</b> ₹{t.payment.amount} ({t.payment.status})</p>
            </div>

            {t.taskStatus === "accepted" && (
              <>
              <button
                className="wt-btn start"
                onClick={() => startWork(t._id)}
              >
                ▶ Start Work
              </button>

              <button
                className="rj-btn start"
                onClick={() => rejWork(t._id)}
              >
                Reject
              </button>
              </>
            )}

            {t.taskStatus === "in-progress" && (
              <>
                <div className="wt-active">🟢 Work in progres</div>        
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}