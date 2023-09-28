import { useState } from "react";

export default function ReviewForm(props) {
  const [restaurant, setRestaurant] = useState(props.initialRestaurant || "");
  const [review, setReview] = useState(props.initialReview || "");
  const [rating, setRating] = useState(props.initialRating || 1);

  return (
    <>
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
      {/* for child to inform parents that an event has happened
      we use a callback function from the parent */}
      <button onClick={()=>{
        props.onSubmit(restaurant, review, rating);
      }}>{props.buttonLabel}</button>
    </>
  );
}
