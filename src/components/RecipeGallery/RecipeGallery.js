import React from "react";
// import recipes from "../../../recipes.json";
import RecipeCard from "components/RecipeCard/RecipeCard";
import "./RecipeGallery.css";

const RecipesGallery = ({ recipes }) => {
  const products = recipes.map((recipe) => (
    <RecipeCard {...recipe} key={recipe.id} />
  ));
  return <div className="recipes-gallery">{products}</div>;
};

export default RecipesGallery;
