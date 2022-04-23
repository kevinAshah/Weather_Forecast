import { useState } from "react";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";

import "../css/Weather.css";

import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      coords: response.data.coord,
    });
  }

  function searchCity() {
    const apiKey = "5a6903eab650be6a07243d3bc71995a1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div>
        <form className="Search row" onSubmit={handleSubmit}>
          <input
            type="search"
            className="col-12 col-lg-8 form-control search-input "
            placeholder="Enter a city..."
            onChange={handleChange}
          />
          <div className="col-12 col-lg-4 search-buttons">
            <button type="submit" className="btn col-6 col-lg-2 search-button">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </button>
            <button
              type="submit"
              className="btn col-6 col-lg-2 current-position-button"
            >
              <FontAwesomeIcon icon={faLocationDot} size="lg" />
            </button>
          </div>
        </form>
        <WeatherData data={weatherData} />
        <WeatherForecast coords={weatherData.coords} />
      </div>
    );
  } else {
    searchCity();
    return (
      <div className="spinner">
        <SpinnerCircular color="#3a438b" />
      </div>
    );
  }
}
