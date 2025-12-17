import { useEffect, useState } from "react";
import API from "../../config/axiosConfig";
import { FaStar } from "react-icons/fa";
import "./RatingPage.css";

export default function RatingPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");

  const [ratingsList, setRatingsList] = useState([]);
  const [average, setAverage] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const loadRatings = async () => {
    try {
      const avgRes = await API.get("/ratings/average");
      const listRes = await API.get("/ratings");

      setAverage(avgRes.data.averageRating.toFixed(1));
      setTotalRatings(avgRes.data.totalRatings);
      setRatingsList(listRes.data.data);
    } catch (err) {
      console.error("Error fetching ratings", err);
    }
  };

  useEffect(() => {
    loadRatings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating) return alert("Please select a star rating");

    try {
      await API.post("/ratings/add", { rating, feedback });

      alert("Thanks for rating!");

      setRating(0);
      setFeedback("");
      loadRatings();
    } catch (err) {
      console.error("Error adding rating:", err);
    }
  };

  const visibleRatings = showMore ? ratingsList : ratingsList.slice(0, 2);

  return (
    <div className="rating-page">

      {/* Summary Section */}
      <div className="rating-summary">
        <h2 className="rating-summary-title">Customer Feedback</h2>

        <p className="rating-average">{average} <span>/ 5</span></p>

        <div className="rating-stars-large">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={30}
              color={i < Math.round(average) ? "#ffc107" : "#d3d3d3"}
            />
          ))}
        </div>

        <p className="rating-total">{totalRatings} Total Reviews</p>
      </div>

      {/* Rating Form */}
      <form className="rating-form" onSubmit={handleSubmit}>
        <h3>Rate Your Experience</h3>

        <div className="rating-input-stars">
          {[...Array(5)].map((_, i) => {
            const star = i + 1;
            return (
              <FaStar
                key={i}
                size={28}
                className="star"
                color={star <= (hover || rating) ? "#ffc107" : "#d3d3d3"}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              />
            );
          })}
        </div>

        <textarea
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit Rating
        </button>
      </form>

      {/* Ratings List */}
      <div className="ratings-list">
        <h3>Recent Reviews</h3>

        {visibleRatings.length === 0 && <p>No ratings yet.</p>}

        {visibleRatings.map((item, index) => (
          <div className="rating-card fade-in" key={index}>
            <div className="rating-card-top">
              <h4>{item.username}</h4>
              <div>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={18}
                    color={i < item.rating ? "#ffc107" : "#d3d3d3"}
                  />
                ))}
              </div>
            </div>

            <p className="rating-feedback">"{item.feedback}"</p>
            <p className="rating-date">
              {new Date(item.date).toLocaleDateString()}
            </p>
          </div>
        ))}

        {ratingsList.length > 5 && (
          <button
            className="show-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

    </div>
  );
}
