import { useContext, useState } from "react";
import { ReviewContext } from "../ReviewContext";
import { useNavigate } from "react-router-dom";

export default function AddReview() {
  const context = useContext(ReviewContext);

  const [restaurant, setRestaurant] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

    // create the navigate hook
    // we can use it to switch to a different route
    const navigate = useNavigate();

  const processAddReview = () => {
    context.addReview({
        restaurant, review, rating
    });
    navigate('/');
  }

  return (
    <>
      <h1>Add new review</h1>
        <div className="form-group">
          <label>Restaurant</label>
          <input
            type="text"
            className="form-control"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Review</label>
          <input
            type="text"
            className="form-control"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <button onClick={processAddReview}>Submit</button>
    </>
  );
}
