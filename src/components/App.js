import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Profile from "./Profile";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import {
  getForecastWeather,
  parseWeatherData,
  parseWeatherLocation,
} from "../utils/weatherApi";
import AddItemModal from "./AddItemModal";
import { defaultClothingItems } from "../utils/constants";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  // console.log("defaultclothingitems", defaultClothingItems);

  const handleCreateModal = () => {
    setActiveModal("create");
    console.log(activeModal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setSelectedCard({});
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleClickDelete = (values) => {
    console.log("handleClickDelete", values);
    // const clothingItems = setClothingItems([values, ...clothingItems]);
    const valueName = values.name;
    console.log("valueName", valueName);
    // Use the filter method to create a new array without the item
    const updatedItems = clothingItems.filter(
      (clothingItem) => clothingItem.name !== valueName
    );

    console.log("updatedItems", updatedItems);
    // Update the state with the new array
    setClothingItems(updatedItems);
    handleCloseModal();
  };

  const handleToggleSwitchChange = (e) => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItemSubmit = (values) => {
    console.log("values", values);
    setClothingItems([values, ...clothingItems]);
    console.log("clothingitems log", clothingItems);
    // setClothingItems([item, ...clothingItems]);
  };

  // const handleAddSubmit = (e) => {
  //   console.log(e);
  // };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        // console.log(data);
        const temp = parseWeatherData(data);
        setTemp(temp);
        const location = parseWeatherLocation(data);
        setLocation(location);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("Updated clothingItems:", clothingItems);
  }, [clothingItems]);

  // console.log(currentTemperatureUnit);
  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} weatherLocation={location} />
        <Switch>
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
          </Route>
          <Route path="/profile">
            <Profile
              onCreateModal={handleCreateModal}
              onSelectCard={handleSelectedCard}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            onAddItem={handleAddItemSubmit}
            isOpen={activeModal === "create"}
            onSubmit={console.log("meow")}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onClickDelete={handleClickDelete}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
