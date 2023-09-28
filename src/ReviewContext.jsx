import { createContext, useState } from "react";

// 1. create the review context
// a context can store a value
// in our case we only store an entire object as our value
const ReviewContext = createContext();

// 2. create a ReviewProvider component
const ReviewProvider = (props) => {
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

  // assume the first argument will be the review object itself
  // - restaurant  
  // - review
  // - rating
  // - _id 
  const addReview = (review) => {
    // temporarily assign it a random number as ID
    review._id = Math.floor(Math.random() * 1000000);
    const updatedReviews = [...reviews, review];
    setReviews(updatedReviews);
  }

  // create the context provider and return it
  return (
    // Set whatever the ReviewContext is storing to
    // be the object in the value
    // ReviewContext is like the private members of a class
    // Provider is both the getter/setter
    <ReviewContext.Provider
      value={{
        "reviews": reviews,
        "addReview": addReview
      }}
    >
        {props.children}
    </ReviewContext.Provider>
  );
};

// if going to export more than one
// don't use export default
export { ReviewContext, ReviewProvider };
