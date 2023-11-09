import "./WeatherCard.css";

const weatherOptions = [
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/night/cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/moon.svg").default,
    day: false,
    type: "moon",
  },
];

const WeatherCard = ({ day, type, weatherTemp }) => {
  console.log("WeatherCard");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img className="weather__image" src={imageSrcUrl}></img>
    </section>
  );
};

export default WeatherCard;
