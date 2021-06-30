import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../../store/actions/weather.js";
import { getImage } from "../../store/actions/backgroundImage.js";
import { useHistory } from "react-router-dom";
import "./Style.scss";

export function FavoriteList() {
  const dispatch = useDispatch();
  const history = useHistory();
  function setCity(item) {
    dispatch(getWeather(item));
    dispatch(getImage(item));
    history.push(item);
  }
  const country = useSelector(({ country }) => country.localFavoritCityData);
  return country.map((item, index) => (
    <li
      className="liDropDown"
      key={index}
      onClick={() => {
        setCity(item);
      }}
    >
      {item}
    </li>
  ));
}
