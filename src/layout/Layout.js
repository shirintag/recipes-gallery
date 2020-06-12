import React, { useState } from "react";
import Login from "components/Login/Login";
import RecipeGallery from "components/RecipeGallery/RecipeGallery";

import "./Layout.css";

const Layout = () => {
  const [loggedin, setLogin] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const handleSubmit = () => {
    setLogin(true);
    fetch("/recipes", {
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setRecipes(json))
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  };

  return (
    <React.Fragment>
      <header>
        <div className="header-container">
          <img
            src="https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg"
            className="header-logo"
            alt="HelloFreshGo"
          />
          {loggedin && (
            <div className="logout-button" onClick={() => setLogin(false)}>
              logout
            </div>
          )}
        </div>
      </header>
      <div className="layout">
        {!loggedin && <Login handleSubmit={() => handleSubmit()} />}
        {loggedin && <RecipeGallery recipes={recipes} />}
      </div>
      <footer>
        <img
          src="https://www.hellofreshgo.de/wp-content/uploads/2018/04/dark.png"
          className="footer-logo"
          alt="HelloFreshGo"
        />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
