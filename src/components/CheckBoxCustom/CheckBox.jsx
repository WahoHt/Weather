import React, { useMemo } from "react";
import imagesBlack from "../../images/icon-star-black.png";
import imagesYellow from "../../images/icon-star-yellow.png";
import {
  addCountryFavorites,
  remoteCountryFavorites,
} from "../../store/actions/favorites.js";
import { useDispatch, useSelector } from "react-redux";

export function CheckBox(props) {
  const dispatch = useDispatch();
  const localFavoritCityData = useSelector(
    ({ country }) => country.localFavoritCityData
  );

  const status = useMemo(
    () => localFavoritCityData.includes(props.id),
    [localFavoritCityData, props.id]
  );
  function handelOnClick() {
    if (status) {
      dispatch(remoteCountryFavorites(props.id));
    } else {
      dispatch(addCountryFavorites(props.id));
    }
  }
  const image = status ? <img src={imagesYellow} /> : <img src={imagesBlack} />;
  return (
    <div className="checkBox" onClick={handelOnClick}>
      {image}
    </div>
  );
}
