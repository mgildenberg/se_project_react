import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import { getForecastWeather } from "./util/weatherApi";

function App() {
  const weatherTemp = "102°F"; // this will be replaced
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

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
      console.log(data);
    });
  }, []);

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
