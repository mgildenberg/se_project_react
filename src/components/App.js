import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Profile from "./Profile";
import {
  getClothes,
  addClothes,
  deleteClothes,
  checkServerResponse,
} from "../utils/api";
import ItemModal from "./ItemModal";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import {
  getForecastWeather,
  parseWeatherData,
  parseWeatherLocation,
} from "../utils/weatherApi";
import AddItemModal from "./AddItemModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateModal = () => {
    setActiveModal("create");
    console.log(activeModal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setSelectedCard({});
  };

  //

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal
    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

  //

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleClickDelete = (id) => {
    // console.log("handleClickDelete", id);
    deleteClothes(id).then((data) => {
      // console.log("handleClickDelete DeleteClothes", data);
      const updatedItems = clothingItems.filter(
        (clothingItem) => clothingItem._id !== id
      );
      setClothingItems(updatedItems);
      handleCloseModal();
    });
  };

  const handleToggleSwitchChange = (e) => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItemSubmit = (values) => {
    console.log("values", values);
    setIsLoading(true);
    addClothes(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

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
    getClothes()
      .then(checkServerResponse)
      .then((res) => {
        setClothingItems(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    // <div>
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
          isLoading={isLoading}
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
    // </div>
  );
}
export default App;
