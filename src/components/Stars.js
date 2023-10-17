import React from "react";

function Stars({ rating }) {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

    function renderStars(){
        const stars = [];
        for (let i = 0; i < filledStars; i++) {
          stars.push(<span key={i} className="fa fa-star active"></span>);
        }
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<span key={filledStars + i} className="fa fa-star"></span>);
        }
        return stars;
    }

  return (
    <div>
      {renderStars()}
    </div>
  );
}

export default Stars;
