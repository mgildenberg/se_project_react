const baseUrl = "http://localhost:3001";

export const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const getClothes = () => {
  const defaultClothingItems = fetch(`${baseUrl}/items`);
  //   .then(
  //     checkServerResponse
  //   );
  return defaultClothingItems;
};

export const addClothes = ({ name, imageUrl, weather }) => {
  //   console.log("addClothes", { name, imageUrl, weather });
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  }).then(checkServerResponse);
};

export const deleteClothes = (id) => {
  //   console.log("deleteclothes api.js", id);
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkServerResponse);
};
