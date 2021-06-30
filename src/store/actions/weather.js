import axios from "axios";
import { API_KEY_WEATHER } from "../../constants/APIConfig";
import * as ActionTypes from "../actionTypes";
import moment from "moment";

export const getWeather = (city) => (dispatch) => {
  const GET_WEATHER_ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY_WEATHER}&units=metric`;
  return axios
    .get(GET_WEATHER_ENDPOINT)
    .then((response) => {
      const objWeatherData = {};
      response.data.list.forEach((elem) => {
        const weatherDate = moment(elem.dt_txt.slice(0, 10))
          .format("dddd")
          .slice(0, 2);
        objWeatherData[weatherDate] = elem;
      });
      dispatch({
        type: ActionTypes.SET_WEATHER_DATA,
        payload: {
          list: response.data.list,
          city: response.data.city,
          objWeatherData,
        },
      });
      dispatch(setWeatherSelectedDay(Object.values(objWeatherData)[0].dt));
    })
    .catch((error) =>
      dispatch({
        type: ActionTypes.ERROR_WEATHER,
        payload: { error: true },
      })
    );
};

export const setWeatherSelectedDay = (selectedDay) => {
  return {
    type: ActionTypes.SET_WEATHER_SELECTED_DAY,
    payload: { selectedDay },
  };
};
export const setLoadingSelectWeather = (loading) => {
  return {
    type: ActionTypes.SET_LOADING_SELECED_DATA,
    payload: { loading },
  };
};
