import React, { useMemo } from "react";
import {
  addCountryFavorites,
  remoteCountryFavorites,
} from "../../store/actions/favorites.js";
import { useDispatch, useSelector } from "react-redux";
import ButtonFavorite from "../ButtonFavorite/ButtonFavorite.jsx";
import "./Style.scss";

export function FooterButton() {
  const dispatch = useDispatch();
  const { weather } = useSelector(({ weather }) => ({ weather }));
  const localFavoritCityData = useSelector(
    ({ country }) => country.localFavoritCityData
  );

  const status = useMemo(
    () => localFavoritCityData.includes(weather.city.name),
    [localFavoritCityData]
  );
  function handelOnClick() {
    if (status) {
      dispatch(remoteCountryFavorites(weather.city.name));
    } else {
      dispatch(addCountryFavorites(weather.city.name));
    }
  }
  const country = status ? (
    <ButtonFavorite
      className="buttonFavorite"
      textBtn="Remove from favorites"
    />
  ) : (
    <ButtonFavorite className="buttonFavorite" textBtn="Add to favorites" />
  );
  return (
    <div className="footerButton" onClick={handelOnClick}>
      {country}
    </div>
  );
}
