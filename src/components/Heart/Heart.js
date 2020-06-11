import React, { useState } from "react";

import "./Heart.css";

const Heart = () => {
  const [selectedRecipe, selectRecipe] = useState(false);

  return (
    <div>
      <div
        className={selectedRecipe ? "heart selected" : "heart"}
        onClick={() => selectRecipe(!selectedRecipe)}
      />
    </div>
  );
};

export default Heart;
