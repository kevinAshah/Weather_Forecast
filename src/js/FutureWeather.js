import "../css/FutureWeather.css";

import weatherIcon1 from "../images/02d.png";
import weatherIcon2 from "../images/04d.png";
import weatherIcon3 from "../images/09d.png";
import weatherIcon4 from "../images/01d.png";
import weatherIcon5 from "../images/10d.png";

export default function FutureWeather() {
  return (
    <div className="FutureWeather row">
      <div className="col-6 col-md-4 col-lg-2 future-weather-elem">
        <div className="future-weather-day">Wednesday</div>
        <img
          src={weatherIcon1}
          alt="future weather"
          className="future-weather-icon"
        />
        <div className="future-weather-temperature">
          <span>20° </span>
          <span>15°</span>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-2 future-weather-elem">
        <div className="future-weather-day">Thursday</div>
        <img
          src={weatherIcon2}
          alt="future weather"
          className="future-weather-icon"
        />
        <div className="future-weather-temperature">
          <span>27° </span>
          <span>11°</span>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-2 future-weather-elem">
        <div className="future-weather-day ">Friday</div>
        <img
          src={weatherIcon3}
          alt="future weather"
          className="future-weather-icon"
        />
        <div className="future-weather-temperature">
          <span>26° </span>
          <span>16°</span>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-2 future-weather-elem">
        <div className="future-weather-day ">Saturday</div>
        <img
          src={weatherIcon4}
          alt="future weather"
          className="future-weather-icon"
        />
        <div className="future-weather-temperature">
          <span>28° </span>
          <span>19°</span>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-2 future-weather-elem">
        <div className="future-weather-day">Sunday</div>
        <img
          src={weatherIcon5}
          alt="future weather"
          className="future-weather-icon"
        />
        <div className="future-weather-temperature">
          <span>31° </span>
          <span>21°</span>
        </div>
      </div>
    </div>
  );
}
