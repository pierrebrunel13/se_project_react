import React from "react";
import { useContext } from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
// import App from "../App/App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App /> 
//     </BrowserRouter>
//   </React.StrictMode>
// );
 

function Main({ weatherData, clothingItems, handleCardClick,}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  
  return (
    <main>
      
      <WeatherCard weatherData={weatherData}/>
      <section className="cards">
        <p className="cards__text">Today is {weatherData.temp[currentTemperatureUnit]}  &deg; {currentTemperatureUnit} / You may want to wear:</p>
        <ul className="cards__list">
          {clothingItems
            .filter((item)=> {
                return item.weather === weatherData.type;
            })
            .map((item) => {
              return <ItemCard key={item._id} item={item} onCardClick={handleCardClick } />;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
