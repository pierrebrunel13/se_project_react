import { useEffect, useState } from "react";

import "./App.css";
// import { coordinates, APIkey } from "../../utils/constants";
import { coordinates, APIkey, defaultClothingItems } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
// import { defaultClothingItems } from "../../utils/constants";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
      });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} 
        handleCardClick={handleCardClick} 
        clothingItems={clothingItems}
        />
      </div>
      <ModalWithForm
        title="New garment "
        buttonText="Add garment"
        // activeModal={activeModal}
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name {""}
          <input type="text" className="modal__input" id="name" placeholder="Name" />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          image {""}
          <input type="url" className="modal__input" id="imageUrl" placeholder="image Url" />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              name="weather"
              value="hot"
              type="radio"
              className="modal__radio-input"
            />
            hot
          </label>
          <label htmlFor="warm" className="modal__label modal__label_type_radio">
            <input
              id="warm"
              name="weather"
              value="warm"
              type="radio"
              className="modal__radio-input"
            />
            warm
          </label>
          <label htmlFor="cold" className="modal__label modal__label_type_radio">
            <input
              id="cold"
              name="weather"
              value="cold"
              type="radio"
              className="modal__radio-input"
            />
            cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal activeModal={activeModal} card={selectedCard} onClose={closeActiveModal} />
      <Footer />
    </div>
  );
}

export default App;
