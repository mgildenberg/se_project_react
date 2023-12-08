import { defaultClothingItems } from "../utils/constants";
import "../blocks/Sidebar.css";
// import WeatherCard from "./WeatherCard";
// import ItemCard from "./ItemCard";
// import ClothesSection from "./ClothesSection";
// import { useMemo, useContext } from "react";
import { Link } from "react-router-dom";
// import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import avatar from "../images/avatar.svg";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div>
        <img src={avatar} alt="avatar"></img>
      </div>
      <p>
        <Link className="sidebar__link" to="profile">
          Name
        </Link>
      </p>
    </section>
  );
};

export default Sidebar;
