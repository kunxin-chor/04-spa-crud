import { useNavigate } from "react-router-dom";

/* assume the review object will be
available in props.review */
export default function Review(props) {
  const navigate = useNavigate();
    return (
        <div className="card mt-3">
          <div className="card-body">
            <h3 className="card-title">{props.review.restaurant}</h3>
            <p className="card-text">{props.review.review}</p>
            <p className="card-text">Rating: {props.review.rating}/5</p>
            <button className="btn btn-primary" onClick={()=>{
              navigate("/edit/" + props.review._id);
            }}>Edit</button>
            <button className="btn btn-danger ms-3" onClick={()=>{
              navigate("/delete/" + props.review._id);
            }}>Delete</button>
          </div>
        </div>
      );
}