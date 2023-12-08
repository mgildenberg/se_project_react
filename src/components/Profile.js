import { defaultClothingItems } from "../utils/constants";
import "../blocks/Profile.css";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";
import { useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import avatar from "../images/avatar.svg";

const Profile = ({
  weatherTemp,
  onSelectCard,
  onCreateModal,
  clothingItems,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  // console.log(currentTemperatureUnit);

  // const weatherUnit = `°${currentTemperatureUnit}`;

  return (
    <main className="profile__main">
      <Sidebar />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
      />
    </main>
  );
};

export default Profile;
