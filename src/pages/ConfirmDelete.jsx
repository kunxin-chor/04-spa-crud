import { useContext } from "react";
import { ReviewContext } from "../ReviewContext";
import { useParams, useNavigate } from "react-router-dom";

export default function ConfirmDelete(){

    // get the id of the review
    const params = useParams();

    // get access to the navigate function
    const navigate = useNavigate();

    // get access to the review context
    const context = useContext(ReviewContext);
    // assuming the url is /delete/:id
    const reviewToDelete = context.findReviewById(params.id);

    return <>
    <div className="alert alert-danger">
        Are you sure you want to delete this review:
        <ul>
            <li>Restaurant: {reviewToDelete.restaurant}</li>
            <li>Review: {reviewToDelete.review}</li>
            <li>Rating: {reviewToDelete.rating}</li>
        </ul>
        <button className="btn btn-danger" onClick={()=>{
            context.deleteReview(params.id);
            navigate("/");
        }}>Yes</button>
        <button className="btn btn-success ms-3" onClick={()=>{
            navigate("/");
        }}>No</button>
    </div>
    </>   

}