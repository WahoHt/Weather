import React, { useMemo } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import "./Style.scss";

export function PresentDay(props) {
  const weather = useSelector(({ weather }) => weather.objWeatherData);
  const statusWeather = useMemo(
    () => (weather ? Object.values(weather)[0].weather[0].main : ""),
    [weather]
  );
  const date = new Date();
  const currentDay = moment(date).format("MMM Do");
  return (
    <div className="presentDay">
      <h4 className="currDay">{currentDay}</h4>
      <h2 className="statusWeather">{statusWeather}</h2>
    </div>
  );
}
