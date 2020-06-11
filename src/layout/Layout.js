import React, { useState } from "react";
import Login from "components/Login/Login";
import RecipeGallery from "components/RecipeGallery/RecipeGallery";

import "./Layout.css";

const Layout = () => {
  const [loggedin, setLogin] = useState(true);
  console.log(loggedin);

  return (
    <div className="layout">
      <header>
        <img
          src="https://www.hellofreshgo.de/wp-content/uploads/2018/04/dark.png"
          className="header-logo"
          alt="HelloFreshGo"
        />
      </header>
      <div>
        {!loggedin && <Login handleSubmit={() => setLogin(!loggedin)} />}
        {loggedin && <RecipeGallery />}
      </div>
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
