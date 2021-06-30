import React from "react";
import { useSelector } from "react-redux";
import { CurrentCityName } from "../CityName/CityName.jsx";
import { SelectedDay } from "../SelectWeatherDay/SelectedDay.jsx";
import { WeatherWeekDay } from "../WeatherWeekDayBlock/WeatherWeekDay.jsx";
import { FooterWeatherBlock } from "../Footer/FooterWeathBlock.jsx";
import { Favorite } from "../FavoritesCity/Favorites.jsx";
import { FooterButton } from "../FooterButtonBlock/FooterButton.jsx";
import { FromDawnToDusk } from "../FromDawnToDusk/FromDawnToDusk.jsx";
import "./Style.scss";

export function WeatherBlock() {
  const weather = useSelector(({ weather }) => weather);

  return (
    <div className="weatherBlock">
      {weather.objWeatherData ? (
        <>
          <div className="headerWeatherBlock">
            <CurrentCityName />
            <Favorite />
          </div>
          <SelectedDay />
          <WeatherWeekDay />
          <FromDawnToDusk />
          <FooterWeatherBlock />
          <FooterButton />
        </>
      ) : (
        <div className="defaultWeatherBlock">
          Use search to find you location
        </div>
      )}
    </div>
  );
}
