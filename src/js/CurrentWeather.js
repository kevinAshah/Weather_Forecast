import "../css/CurrentWeather.css";

import weatherNow from "../images/01d.png";

export default function CurrentWeather() {
  const weatherData = {
    city: "London",
    temp: 30,
    humidity: 10,
    wind: 10,
    description: "Sunny",
    dateTime: "Tuesday 13:40",
  };

  return (
    <div className="CurrentWeather row">
      <div className="col-12 col-lg-7">
        <div className="row">
          <div className="col-6 col-lg-4 weather-icon-elem">
            <img
              src={weatherNow}
              alt={weatherData.description}
              className="weather-icon"
            />
          </div>
          <div className="col-6 col-lg-4 weather-info">
            <div className="temperature">
              {weatherData.temp} <span className="units">°C | °F</span>
            </div>
            <div className="weather-description">{weatherData.description}</div>
          </div>
          <div className="col-12 col-lg-4 more-info-weather">
            Humidity: {weatherData.humidity}%<br />
            Wind: {weatherData.wind} km/h
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-5 location">
        <div className="city">{weatherData.city}</div>
        <div className="last-updated">Last updated: {weatherData.dateTime}</div>
      </div>
    </div>
  );
}
