// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 33.4255;
const longitude = 111.94;
const APIkey = "136a476d7f0fd862bf31bfeafd75eccf";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      console.log(res);
    } else {
      return Promise.reject(`Error:  ${res.status}`);
    }
  });
  return weatherApi;
};
