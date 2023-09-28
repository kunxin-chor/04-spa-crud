import { useContext, useState } from "react";
import { ReviewContext } from "../ReviewContext";
import { useNavigate } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

export default function AddReview() {
  const context = useContext(ReviewContext);

    // create the navigate hook
    // we can use it to switch to a different route
    const navigate = useNavigate();

  const processAddReview = (restaurant, review, rating) => {
    context.addReview({
        restaurant, review, rating
    });
    navigate('/');
  }

  return (
    <>
      <h1>Add new review</h1>
      {/* we send to ReviewForm (the child component)
      a function to call when the button in the form clicked */}
      <ReviewForm buttonLabel="Add New"
                  onSubmit={processAddReview}
      />
    </>
  );
}
