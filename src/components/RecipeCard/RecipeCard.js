import React from "react";
import StarRating from "../Rater/StarRating";
import "./RecipeCard.css";
const RecipeCard = (props) => {
  return (
    <div className="recipe-card">
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
