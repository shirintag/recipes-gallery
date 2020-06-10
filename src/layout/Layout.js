import React from "react";
import Login from "../components/Login/Login";
import RecipeCard from "../components/RecipeCard/RecipeCard";

import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <img
          src="https://www.hellofreshgo.de/wp-content/uploads/2018/04/dark.png"
          className="header-logo"
          alt="HelloFreshGo"
        />
      </header>
      <content>
        <Login />
        <RecipeCard />
      </content>

      <footer>
        <img
          src="https://www.hellofreshgo.de/wp-content/uploads/2018/04/dark.png"
          className="footer-logo"
          alt="HelloFreshGo"
        />
      </footer>
    </div>
  );
};

export default Layout;
