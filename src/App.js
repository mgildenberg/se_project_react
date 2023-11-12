import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ModalWithForm from "./components/ModalWithForm";
import ItemModal from "./components/ItemModal";
import { getForecastWeather, parseWeatherData } from "./utils/weatherApi";

function App() {
  // const weatherTemp = "102°F"; // this will be replaced
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

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

      // const weather = () = {if (temperature >= 86) {
      //   return 'hot';
      // } else if (temperature >= 66 && temperature <= 85) {
      //   return 'warm';
      // } else if (temperature <= 65) {
      //   return 'cold';
      // }}

      // set;
    });
  }, []);

  // console.log(temp);
  const weatherTemp = temp; //`${temp}°F`;

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label>
            Name
            <input type="text" name="name" minLength="1" maxLength="30" />
          </label>
          <label>
            Image URL
            <input type="url" name="link" minlength="1"></input>
          </label>
          <p>Select the weather type:</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot"></input>
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm"></input>
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold"></input>
              <label>Cold</label>
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
