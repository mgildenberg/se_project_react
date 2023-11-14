import "../blocks/Header.css";
import avatar from "../images/avatar.svg";
import logo from "../images/logo.svg";

const Header = ({ onCreateModal, weatherLocation }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentLocation = weatherLocation;

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logo} alt="logo"></img>
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
        <p>Name</p>
        <div>
          <img src={avatar} alt="logo"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
