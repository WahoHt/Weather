import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../../store/actions/weather.js";
import { getImage } from "../../store/actions/backgroundImage.js";
import { useHistory } from "react-router-dom";

import "./Style.scss";

export function CurrentCityName(props) {
  const { weather } = useSelector(({ weather }) => ({ weather }));
  const setCityName = weather.city.name;
  const country = useSelector(({ country }) => country.localFavoritCityData);
  const dispatch = useDispatch();

  const history = useHistory();

  const checkCityTwo = country.filter(
    (country) => !country.includes(setCityName)
  );

  const cityTwo = checkCityTwo[0];

  function setCity(cityTwo) {
    dispatch(getWeather(cityTwo));
    dispatch(getImage(cityTwo));
    history.push(cityTwo);
  }
  return (
    <div className="cityName">
      <h4 className="cityText">{setCityName ? setCityName : ""}</h4>
      <h4
        className="cityTextTwo"
        onClick={() => {
          setCity(cityTwo);
        }}
      >
        {setCityName ? cityTwo : setCityName}
      </h4>
    </div>
  );
}
