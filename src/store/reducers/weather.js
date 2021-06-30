import * as ActionTypes from "../actionTypes";
import cities from "../../dataCityJSON/cities.json";

export const initialState = {
  data: [],
  city: {},
  selectedDay: null,
  objWeatherData: null,
  loading: true,
  cities,
  error: false,
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_WEATHER_DATA:
      return {
        ...state,
        objWeatherData: payload.objWeatherData,
        data: payload.list,
        city: payload.city,
      };
    case ActionTypes.SET_WEATHER_SELECTED_DAY:
      return {
        ...state,
        selectedDay: payload.selectedDay,
      };
    case ActionTypes.SET_LOADING_SELECED_DATA:
      return {
        ...state,
        loading: payload.loading,
      };
    case ActionTypes.ERROR_WEATHER: {
      return {
        ...state,
        error: payload.error,
      };
    }
    default:
      return state;
  }
};
