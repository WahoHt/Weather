import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setWeatherSelectedDay } from "../../store/actions/weather.js";
import "./Style.scss";

export function WeatherWeekDay(props) {
  const objWeatherData = useSelector(({ weather }) => weather.objWeatherData);
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  function getIndexWeatherCard(index, value) {
    setActive(index);
    dispatch(setWeatherSelectedDay(value.dt));
  }
  function weatherBlock(props) {
    return Object.entries(objWeatherData).map(([item, value], index) => {
      const weatherTemp = value.main.temp_max.toString().slice(0, 2);
      return (
        <li
          key={index}
          onClick={() => getIndexWeatherCard(index, value)}
          className={`weatherCard ${
            index === active ? "weatherCardActive" : "weatherCard"
          }`}
        >
          <p className="dayOfWeek">{item}</p>
          <img
            src={`http://openweathermap.org/img/wn/${value.weather[0].icon}.png`}
          />
          <p className="weatherTemp">{weatherTemp}</p>
        </li>
      );
    });
  }
  return (
    <ul className="chosenWeather">{objWeatherData ? weatherBlock() : null}</ul>
  );
}
