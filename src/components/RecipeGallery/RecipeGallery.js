import React from "react";
import recipes from "../../../recipes.json";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeGallery.css";

const RecipesGallery = () => {
  const products = recipes.map((recpie) => (
    <RecipeCard {...recpie} key={recpie.id} />
  ));
  return <div className="recipes-gallery">{products}</div>;
};

export default RecipesGallery;
