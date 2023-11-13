import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ModalWithForm from "./components/ModalWithForm";
import ItemModal from "./components/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
  parseWeatherLocation,
} from "./utils/weatherApi";

function App() {
  // const weatherTemp = "102°F"; // this will be replaced
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setSelectedCard({});
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      // console.log(data);
      const temp = parseWeatherData(data);
      setTemp(temp);
      const location = parseWeatherLocation(data);
      // setLocation("Arizona");
      setLocation(location);
    });
  }, []);

  // console.log(temp);
  const weatherTemp = temp; //`${temp}°F`;

  return (
    <div>
      <Header onCreateModal={handleCreateModal} weatherLocation={location} />
      <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label>
            Name
            <input
              className="modal__input"
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              placeholder="Name"
              required
            />
          </label>
          <label>
            Image URL
            <input
              className="modal__input"
              type="url"
              name="link"
              minlength="1"
              placeholder="Image URL"
              required
            ></input>
          </label>
          <p>Select the weather type:</p>
          <div>
            <div>
              <input
                className="modal__input_radio"
                type="radio"
                id="hot"
                value="hot"
              ></input>
              <label>
                Hot
                {/* <span>Hot</span> */}
              </label>
            </div>
            <div>
              <input
                className="modal__input_radio"
                type="radio"
                id="warm"
                value="warm"
              ></input>
              <label>
                Warm
                {/* <span>Warm</span> */}
              </label>
            </div>
            <div>
              <input
                className="modal__input_radio"
                type="radio"
                id="cold"
                value="cold"
              ></input>
              <label>
                Cold
                {/* <span>Cold</span> */}
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
