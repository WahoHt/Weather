import React from "react";
import { useSelector } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
import "./Style.scss";

export function SelectedDay(props) {
  const weather = useSelector(({ weather }) => weather);
  function сurrentDay() {
    if (weather.selectedDay) {
      return Object.entries(weather.objWeatherData).map(
        ([item, value], index) => {
          const weatherTemp = value.main.temp_max.toString().slice(0, 2);
          const titleWeather = `Detail: ${value.weather[0].description},
					Feels:${value.main.feels_like}`;
          if (weather.selectedDay === value.dt) {
            return (
              <div className="currInfo" key={index}>
                <Tooltip title={titleWeather}>
                  <div className="currentDay">
                    <img
                      src={`http://openweathermap.org/img/wn/${value.weather[0].icon}.png`}
                      style={{ height: "100px" }}
                    />
                    <p className="currentDayTemp">{weatherTemp}</p>
                    <h2 className="weatherName">{value.weather[0].main}</h2>
                    <div className="weatherFullName">
                      <h4 className="description">Description:</h4>
                      <p className="descriptionName">
                        {value.weather[0].description}
                      </p>
                    </div>
                  </div>
                </Tooltip>
              </div>
            );
          }
        }
      );
    }
  }
  return <div className="s">{сurrentDay()}</div>;
}
