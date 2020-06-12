import React from "react";
import StarRating from "components/Rater/StarRating";
import Heart from "components/Heart/Heart";

import "./RecipeCard.css";
const RecipeCard = (props) => {
  return (
    <div className="recipe-card">
      <div className="recipe-heart">
        <Heart />
      </div>
      <div className="recipe-image-container">
        <img
          className="recipe-image"
          src={
            "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
          }
          alt={props.name}
        />
      </div>

      <div className="recipe-data f-subcopy">
        <StarRating totalStars={5} />
        <div className="f-title">{props.name}</div>
        <div className="f-subtitle">{props.headline}</div>
        <span>calories: {props.calories || "--"}</span>
        <span>Time: {props.time.substring(2) || "--"}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
