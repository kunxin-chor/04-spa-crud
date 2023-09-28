import { useState, useContext } from "react";
import Review from "../components/Review";
import {ReviewContext} from "../ReviewContext";

export default function ShowReviews() {
  
  // For a component to have an access to a context, two requirements
  // 1. make use of the ReviewContext
  // 2. it must be nested under its provider
  const context = useContext(ReviewContext)

  const renderReviews = () => {
    const results = [];
    for (let r of context.reviews) {
      const eachReview = (
        <div key={r._id}>
          <h3>{r.restaurant}</h3>
          <p>{r.review}</p>
          <p>Rating: {r.rating}/5</p>
        </div>
      );

      results.push(eachReview);
    }
    return results;
  };
  // How do render any list of JSX elements
  //   // storing a JSX object in a variable
  // const header = <h2>All Reviews</h2>;

  // // if a variable can store JSX, then it stands to reason we can store JSX in an array
  // const list = [
  //     <li>Apples</li>,
  //     <li>Oranges</li>,
  //     <li>Bananas</li>
  // ]

  return (
    <>
      <h2>All Reviews</h2>
      {/* Rendering list via functions */}
      {/* {renderReviews()} */}

      {
        // returns a new array
        // each element of the new array is transformed an element in an array
        context.reviews.map((r, index) => {
          return (
            <Review key={r._id} review={r}/>
          );
        })
      }
    </>
  );
}
