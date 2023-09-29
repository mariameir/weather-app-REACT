import React from "react";
import "./WeatherApp.css";

import clear from "../Assets/clear.png";
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import humidity from "../Assets/humidity.png";
import rain from "../Assets/rain.png";
import search from "../Assets/search.png";
import snow from "../Assets/snow.png";
import wind from "../Assets/wind.png";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Pesquisa" />
        <div className="search-icon">
          <img src={search} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">Brazil</div>
      <div className="data-container">

        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">65%</div>
            <div className="text">Umidade</div>
          </div>
        </div>

        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">23km/h</div>
            <div className="text">Vento</div>
          </div>
        </div>


      </div>
    </div>

);
};

export default WeatherApp;
