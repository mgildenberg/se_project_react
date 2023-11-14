import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { useMemo } from "react";

const Main = ({ weatherTemp, onSelectCard }) => {
  const weatherType = useMemo(() => {
    // console.log("weatherTemp", weatherTemp);
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  // console.log(weatherType);

  const weatherUnit = "°F";

  const filteredCards = defaultClothingItems.filter((item) => {
    // console.log("filteredCard map item", item);
    return item.weather.toLowerCase() === weatherType;
  });

  // console.log("filteredCards", filteredCards);

  return (
    <main className="main">
      <WeatherCard
        day={true}
        type="cloudy"
        weatherTemp={weatherTemp}
        weatherUnit={weatherUnit}
      />
      <section className="card-section" id="card-section>">
        <p>
          Today is {weatherTemp}
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
