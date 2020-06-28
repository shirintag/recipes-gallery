import React, { useState, useHover } from "react";
import Star from "./Star";

import "./StarRating.css";
const StarRating = ({ totalStars, onRate }) => {
  const [starsSelected, selectStar] = useState(0);
  const [starsHovered, handelHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected || i < starsHovered}
          onClick={() => {
            selectStar(i + 1);
            onRate(i + 1);
          }}
          onMouseOver={() => handelHover(i + 1)}
          onMouseOut={() => handelHover(0)}
        />
      ))}
    </div>
  );
};

export default StarRating;
