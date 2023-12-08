//import { defaultClothingItems } from "../utils/constants";
// import { clothingItems } from "./App";
import "../blocks/ClothesSection.css";
// import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
// import avatar from "../images/avatar.svg";

const ClothesSection = ({ onSelectCard, onCreateModal, clothingItems }) => {
  console.log("ClothesSection clothingItems", clothingItems);
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
      <div className="clothes-section__card__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
