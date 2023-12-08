// import { getClothes } from "../utils/api";
//import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "./WeatherCard";
import "../blocks/Main.css";
import ItemCard from "./ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherTemp, onSelectCard, clothingItems }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  // console.log(currentTemperatureUnit);
  const weatherType = useMemo(() => {
    // console.log("weatherTemp", weatherTemp);
    if (
      (currentTemperatureUnit === "F" && temp >= 86) ||
      (currentTemperatureUnit === "C" && temp >= 30)
    ) {
      return "hot";
    } else if (
      (currentTemperatureUnit === "F" && temp >= 66 && temp <= 85) ||
      (currentTemperatureUnit == "C" && temp >= 19 && temp <= 30)
    ) {
      return "warm";
    } else if (
      (currentTemperatureUnit === "F" && temp <= 65) ||
      (currentTemperatureUnit === "C" && temp <= 18)
    ) {
      return "cold";
    }
  }, [temp]);

  // console.log(weatherType);

  const weatherUnit = `°${currentTemperatureUnit}`;

  const filteredCards = clothingItems.filter((item) => {
    // console.log("filteredCard map item", item);
    return item.weather.toLowerCase() === weatherType;
  });

  // console.log("filteredCards", filteredCards);

  return (
    <main className="main">
      <WeatherCard
        day={true}
        type="cloudy"
        weatherTemp={temp}
        weatherUnit={weatherUnit}
      />
      <section className="card-section" id="card-section>">
        <p>
          Today is {temp}
          {weatherUnit} / You may want to wear:
        </p>
        <div className="card__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                item={item}
                onSelectCard={onSelectCard}
                key={item._id}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
