import React from "react";
import { useSelector } from "react-redux";
import { CustomHeader } from "../HeaderWeather/HeaderWeather.jsx";
import { WeatherBlock } from "../WeatherBlock/WeatherBlock.jsx";
import { PresentDay } from "../PresentDay/PresentDay.jsx";
import "./Style.scss";

export function StartPageData() {
  const { imageBackground } = useSelector(({ imageBackground }) => ({
    imageBackground,
  }));
  const backImage = imageBackground.data.find((item) => item.urls.full);
  const image = backImage
    ? backImage.urls.full
    : `https://source.unsplash.com/random/1200x800`;
  const divBackgroundImage = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeate: "no-repeate",
    display: "block",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="imageBackground" style={divBackgroundImage}>
      <div className="pageWrapper">
        <div className="content">
          <CustomHeader />
          <PresentDay />
        </div>
        <WeatherBlock />
      </div>
    </div>
  );
}
