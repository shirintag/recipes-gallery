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

      <img className="recipe-image" src={props.image} />
      <div className="recipe-data f-subcopy">
        <StarRating totalStars={5} />
        <div className="f-title">{props.name}</div>
        <div className="f-subtitle">{props.headline}</div>
        <span>calories: {props.calories}</span>
        <span>time: {props.time}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
