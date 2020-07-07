import React from "react";
import StarRating from "components/Rater/StarRating";
import Heart from "components/Heart/Heart";
import { rate } from "../../utilis";

import "./RecipeCard.css";

const RecipeCard = ({
  name,
  headline,
  calories,
  time,
  rating,
  usersRated,
  recipeIndex,
}) => {
  const updateRating = (newRating) => {
    rating = rate(newRating, rating, usersRated);
    usersRated++;
    console.log(newRating, rating, usersRated);
    return rating, usersRated;
  };

  return (
    <div className="recipe-card">
      <div className="recipe-heart">
        <Heart />
      </div>
      <div className="recipe-image-container">
        <img
          className="recipe-image"
          src={`https://source.unsplash.com/235x150/?recipe&sig=${recipeIndex}`}
          alt={name}
        />
      </div>

      <div className="recipe-data f-subcopy">
        <StarRating totalStars={5} onRate={updateRating} />
        <div className="f-title">{name}</div>
        <div className="f-subtitle">{headline}</div>
        <span>Calories: {calories || "--"}</span>
        <span>Time: {time.substring(2) || "--"}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
