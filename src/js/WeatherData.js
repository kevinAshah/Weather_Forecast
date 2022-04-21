import WeatherIcon from "./WeatherIcon";

import Temperature from "./Temperature";
import FormattedDate from "./FormattedDate";
import "../css/WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="CurrentWeather row">
      <div className="col-12 col-lg-7">
        <div className="row">
          <div className="col-6 col-lg-4 weather-icon-elem">
            <WeatherIcon code={props.data.icon} />
            {/* <img
              src={props.data.icon}
              alt={props.data.description}
              className="weather-icon"
            /> */}
          </div>
          <div className="col-6 col-lg-4 weather-info">
            <Temperature celsius={props.data.temperature} />
            <div className="weather-description">{props.data.description}</div>
          </div>
          <div className="col-12 col-lg-4 more-info-weather">
            Humidity: {props.data.humidity}%{" "}
            <span>Wind: {props.data.wind} km/h </span>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-5 location">
        <div className="city">{props.data.city}</div>
        <div className="last-updated">
          Last updated: <FormattedDate date={props.data.date} />
        </div>
      </div>
    </div>
  );
}
