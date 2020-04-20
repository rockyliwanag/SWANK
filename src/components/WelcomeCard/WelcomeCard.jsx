import React from "react";
import "./WelcomeCard.css";

function WelcomeCard() {
  return (
    <div className="jumbotron">
      <div className="welcome-container">
        <h1 className="">WELCOME TO SWANK!</h1>
        <h2>A Social Inventory Application.</h2>
        <br />
        <p>
          Manage all your swag for you to brag about. You can Add, Edit, or
          Delete your most prized possessions, then we will rank the Swankiest
          user based on the total net value of your inventory. Let's see who has
          the bragging rights as the top ranked <b>SWANKER!</b>
        </p>
        <p>
          <a class="btn btn-primary btn-lg" href="/inventory" role="button">
            GET STARTED
          </a>
        </p>
      </div>
    </div>
  );
}

export default WelcomeCard;
