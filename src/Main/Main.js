import { defaultClothingItems } from "../util/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherTemp }) {
  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={weatherTemp} />
      <section className="card-section" id="card-section>">
        Today is {weatherTemp} / You may want to wear:
        <div className="card__items">
          {defaultClothingItems.map((item) => {
            return <ItemCard item={item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;