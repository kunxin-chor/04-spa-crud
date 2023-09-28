import { createContext, useState, useEffect } from "react";

// 1. create the review context
// a context can store a value
// in our case we only store an entire object as our value
const ReviewContext = createContext();

const BASE_API_URL = "https://kcx-rest-reviews-api.onrender.com/";

// 2. create a ReviewProvider component
const ReviewProvider = (props) => {

  const [reviews, setReviews] = useState([]);

  // two arguments
  // 1. the function to run when the effect activated (CANNOT BE ASYNC)
  // 2. the second argument is known as the dependency
  // -- when those values changed, the function in the first argument will run automatically
  useEffect(()=>{

    // define a function to fetch the data in an async manner
    // (work around for the function in the effect not being async)
    const fetchReviews = async () => {
      const response = await fetch(BASE_API_URL + "reviews");
      const data = await response.json();
      setReviews(data);
    }
    // call that function
    fetchReviews();

  }, []); // leave the dependency as an empty array if we want the function to actiate
          // after the component is rendered for the first time

  // assume the first argument will be the review object itself
  // - restaurant  
  // - review
  // - rating
  // - _id 
  const addReview = async (review) => {

    review.rating = parseInt(review.rating);

    const response = await fetch(BASE_API_URL + 'reviews',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(review)
    });
    const results = await response.json();
    review._id = results.insertedId;

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

  const updateReview = async (id, restaurant, review, rating) => {
    const modifiedReview = {
      _id : id,
      restaurant: restaurant,
      review: review,
      rating: parseInt(rating)
    }

    const response = await fetch(BASE_API_URL + "reviews/" + id,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(modifiedReview)
    });

    const results = await response.json();

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

  const deleteReview = async (id) => {

    const response = await fetch(BASE_API_URL + "reviews/" + id,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      }
    });

    // find the index
    const indexToDelete = reviews.findIndex(r => r._id == id);
    const modifiedReviews = [
        ...reviews.slice(0, indexToDelete),
        ...reviews.slice(indexToDelete+1)

    ];
    setReviews(modifiedReviews);
  
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
        "updateReview": updateReview,
        "deleteReview": deleteReview
      }}
    >
        {props.children}
    </ReviewContext.Provider>
  );
};

// if going to export more than one
// don't use export default
export { ReviewContext, ReviewProvider };
