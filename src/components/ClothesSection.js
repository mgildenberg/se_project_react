import { defaultClothingItems } from "../utils/constants";
import "../blocks/ClothesSection.css";
// import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
// import { useMemo, useContext } from "react";
// import { Link } from "react-router-dom";
// import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
// import avatar from "../images/avatar.svg";

const ClothesSection = ({ onSelectCard, onCreateModal }) => {
  return (
    <section className="clothes-section" id="clothes-section>">
      <div className="clothes-section__header">
        <p>Your items</p>
        <div>
          <p
            className="clothes-section__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add new
          </p>
        </div>
      </div>
      <div className="card__items">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
