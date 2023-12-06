const baseUrl = "http://localhost:3001";

// GET https://localhost:3001/items

// mport { latitude, longitude, APIkey } from "../utils/constants";

export const getClothes = () => {
  const defaultClothingItems = fetch(`${baseUrl}/items`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return defaultClothingItems;
};

export const addClothes = ({ name, imageUrl, weather }) => {
  console.log("addClothes", { name, imageUrl, weather });
  fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name: "test clothes",
      imageUrl:
        "https://ih1.redbubble.net/image.930670983.1556/ssrco,slim_fit_t_shirt,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000-bg,f8f8f8.jpg",
      weather: "hot",
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const deleteClothes = (id) => {
  fetch(`${baseUrl}/items/:${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};
