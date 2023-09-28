/* assume the review object will be
available in props.review */
export default function Review(props) {
    return (
        <div className="card mt-3">
          <div className="card-body">
            <h3 className="card-title">{props.review.restaurant}</h3>
            <p className="card-text">{props.review.review}</p>
            <p className="card-text">Rating: {props.review.rating}/5</p>
          </div>
        </div>
      );
}