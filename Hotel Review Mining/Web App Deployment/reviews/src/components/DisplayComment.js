import React from "react";

const DisplayComment = (props) => {
  return (
    <div>
      {props.state.comments.map((review, i) => {
        return (
          <div className="review">
            <div className="review-item">{review.name}</div>
            <div className="review-item">
              {[...Array(parseInt(review.rating))].map((icon, i) => (
                <i class="icon-star" key={i}></i>
              ))}
            </div>
            <div className="review-item review-summary">
              {review.review_summary}
            </div>
            <div className="review-item">{review.review}</div>
            <div className="review-item">
              {" "}
              <b>Date: </b>
              {review.date}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayComment;
