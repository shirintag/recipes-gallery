import React from "react";

import "./StarRating.css";

const Star = ({
  selected = false,
  onClick = (f) => f,
  onMouseOver = (f) => f,
  onMouseOut = (f) => f,
}) => (
  <div
    className="star-container"
    onClick={onClick}
    onMouseEnter={onMouseOver}
    onMouseLeave={onMouseOut}
  >
    <div className={selected ? "star selected" : "star"} />
  </div>
);

export default Star;
