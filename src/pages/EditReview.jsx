import {useContext} from 'react'
import { ReviewContext } from '../ReviewContext'
import { useParams, useNavigate} from 'react-router-dom'
import ReviewForm from '../components/ReviewForm';

export default function EditReview() {

    const context = useContext(ReviewContext);
    const params = useParams();
    const navigate = useNavigate();
    
    // find the review which is being edited
    // so that it can be displayed in a form
    const review = context.findReviewById(params.index);

    const processEditReview = (restaurant, review, rating) => {
        context.updateReview(params.index, restaurant, review, rating);
        console.log("Updating review = ", restaurant, review, rating);
        navigate('/');
    }

    return <>
        <h1>Edit Review</h1>
        <ReviewForm 
            initialRestaurant={review.restaurant}
            initialReview={review.review}
            initialRating={review.rating}
            buttonLabel="Edit"
            onSubmit={processEditReview}
            />
    </>
}