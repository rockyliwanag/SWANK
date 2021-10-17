import React /*, { Component }*/ from "react";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";

function HomePage(props) {
  return (
    <>
      {/* <h1>THE SWANKIEST</h1> */}
      {console.log("HOME-PROPS",props)}
      <div>
        <WelcomeCard />
      </div>
    </>
  );
}

export default HomePage;
