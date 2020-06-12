import React, { useState } from "react";
import Login from "components/Login/Login";
import RecipeGallery from "components/RecipeGallery/RecipeGallery";

import "./Layout.css";

const Layout = () => {
  const [loggedin, setLogin] = useState(false);

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
    </React.Fragment>
  );
};

export default Layout;
