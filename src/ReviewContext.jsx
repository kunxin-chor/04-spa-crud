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

  const findReviewById = (id) => {
    // findIndex takes in one argument which is a function
    // each element of the array is passed into it
    // the first instance when the function return true
    // means we want the index for that current execution
    const wantedReview = reviews.find(r=> r._id == id);
    return wantedReview;
  }

  const updateReview = (id, restaurant, review, rating) => {
    const modifiedReview = {
      _id : id,
      restaurant: restaurant,
      review: review,
      rating: rating
    }
    // goal: insert modified review back at its original index in the array
    // 1. find the index
    const indexToReplace = reviews.findIndex(r => r._id == id);

    // 2. create the replacement array
    const updated = [ ...reviews.slice(0, indexToReplace),
                      modifiedReview,
                      ...reviews.slice(indexToReplace+1)
    
    ];
    setReviews(updated);
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
        "addReview": addReview,
        "findReviewById": findReviewById,
        "updateReview": updateReview
      }}
    >
        {props.children}
    </ReviewContext.Provider>
  );
};

// if going to export more than one
// don't use export default
export { ReviewContext, ReviewProvider };
