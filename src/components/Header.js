import "../blocks/Header.css";
import avatar from "../images/avatar.svg";
import logo from "../images/logo.svg";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, weatherLocation }) => {
  const currentLocation = weatherLocation;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div>
          {currentDate}, {currentLocation}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <p>
          <Link className="header__link" to="profile">
            Name
          </Link>
        </p>
        <div>
          <img src={avatar} alt="avatar"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
