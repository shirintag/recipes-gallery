import React from "react";

import "./StarRating.css";

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div className="star-container" onClick={onClick}>
    <div className={selected ? "star selected" : "star"} />
  </div>
);

export default Star;
