import React, { useEffect } from "react";
import { getImage, setLoadingImage } from "../store/actions/backgroundImage.js";
import { getWeather } from "../store/actions/weather.js";
import { useDispatch, useSelector } from "react-redux";
import { NotFound } from "../components/NotFound/NotFound.jsx";
import { useParams } from "react-router-dom";
import { StartPageData } from "../components/StartPage/StartPageData.jsx";
import "./Style.scss";

function Home(props) {
  const dispatch = useDispatch();

  const loadingStartPage = useSelector(({ imageBackground, weather }) => ({
    imageBackground,
    weather,
  }));
  const { cityName } = useParams();

  useEffect(() => {
    loadingImage();
  }, []);

  useEffect(() => {
    if (cityName) {
      dispatch(getWeather(cityName));
    }
    dispatch(getImage(cityName));
  }, [cityName]);

  async function loadingImage() {
    dispatch(setLoadingImage(true));
    await dispatch(getImage());
    dispatch(setLoadingImage(false));
  }

  return (
    <div className="homePage">
      {loadingStartPage.imageBackground.loading ? (
        <p>...Loading</p>
      ) : loadingStartPage.weather.error ? (
        <NotFound />
      ) : (
        <StartPageData />
      )}
    </div>
  );
}
export default Home;
