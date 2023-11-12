import "../blocks/Header.css";
// import logo from "./logo.svg";
// import { useMemo } from "react";
// import { parseWeatherLocation } from "..utils/weatherApi.js";

const Header = ({ onCreateModal, weatherLocation }) => {
  console.log("Header");

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentLocation = weatherLocation;
  console.log("currentLocation", currentLocation);
  // const currentLocation = "Arizona";

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/logo.svg").default} alt="logo"></img>
        </div>
        <div>
          {currentDate}, {currentLocation}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <div>Name</div>
        <div>
          <img src={require("../images/avatar.svg").default} alt="logo"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
