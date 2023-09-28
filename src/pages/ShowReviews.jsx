import { useState } from "react";
import Review from "../components/Review";

export default function ShowReviews() {
  const [reviews, setReviews] = useState([
    {
      _id: "64931f23755a1426a2343234",
      restaurant: "Tian Tian Chicken Rice2222",
      review: "Nice rice and juicy meat",
      rating: 5,
    },
    {
      _id: "651264db7841ce1f3dedd662",
      restaurant: "Taco Bell",
      review: "Great tacos!",
      rating: 3,
    },
    {
      _id: "651264db7841ce1f3dedd663",
      restaurant: "Arnold's Chicken",
      review: "Great fried chicken!",
      rating: 5,
    },
  ]);

  const renderReviews = () => {
    const results = [];
    for (let r of reviews) {
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
        reviews.map((r, index) => {
          return (
            <Review key={r._id} review={r}/>
          );
        })
      }
    </>
  );
}
