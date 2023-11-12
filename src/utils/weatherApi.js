// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 10.99;
const longitude = 44.34;
const APIkey = "136a476d7f0fd862bf31bfeafd75eccf";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      console.log(res);
      //   let parsed = parseWeatherData(res.json());
      //   return parsed;
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  //   console.log("parseWeatherData", data);
  const main = data.main;
  //   console.log("main", main);
  const temperature = main && main.temp;

  console.log("temperature", temperature);
  //   const weather = main && main.weather;
  return Math.ceil(temperature);
};

export const parseWeatherLocation = (data) => {
  //   console.log("parseWeatherData", data);
  // const main = data.main;
  //   console.log("main", main);
  console.log("data name", data.name);
  const location = data.name;

  console.log("location", location);
  //   const weather = main && main.weather;
  return location;
};
