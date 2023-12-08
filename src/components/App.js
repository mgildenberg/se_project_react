import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Profile from "./Profile";
import ModalWithForm from "./ModalWithForm";
import { getClothes, addClothes, deleteClothes } from "../utils/api";
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
  // console.log("defaultclothingitems", defaultClothingItems);
  const [clothingItems, setClothingItems] = useState([]);

  //defaultClothingItems
  // console.log("getClothes", getClothes());

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

  const handleClickDelete = (id) => {
    console.log("handleClickDelete", id);
    deleteClothes(id);
    // Use the filter method to create a new array without the item
    const updatedItems = clothingItems.filter(
      (clothingItem) => clothingItem._id !== id
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
    addClothes(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        // console.log(data);
        const temp = parseWeatherData(data);
        setTemp(temp);
        const location = parseWeatherLocation(data);
        setLocation(location);
        getClothes().then((res) => {
          console.log("getclothes() res", res);
          setClothingItems(res);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   console.log("Updated clothingItems:", clothingItems);
  // }, [clothingItems]);

  useEffect(() => {
    getClothes()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} weatherLocation={location} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onCreateModal={handleCreateModal}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            onAddItem={handleAddItemSubmit}
            isOpen={activeModal === "create"}
            onSubmit={addClothes}
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
