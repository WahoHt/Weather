import * as ActionTypes from "../actionTypes";
const favoriteLocalStorage = localStorage.getItem("favorite");
export const initialState = {
  localFavoritCityData: favoriteLocalStorage
    ? JSON.parse(favoriteLocalStorage)
    : [],
};
export const countryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_COUNTRY_FAVORITES:
      const addCountries = [
        ...state.localFavoritCityData,
        payload.localFavoritCityData,
      ];
      localStorage.setItem("favorite", JSON.stringify(addCountries));
      return {
        ...state,
        localFavoritCityData: addCountries,
      };
    case ActionTypes.REMOTE_COUNTRY_FAVORITES:
      const remoteCountries = state.localFavoritCityData.filter(
        (item) => item !== payload.localFavoritCityData
      );
      localStorage.setItem("favorite", JSON.stringify(remoteCountries));
      return {
        ...state,
        localFavoritCityData: remoteCountries,
      };
    default:
      return state;
  }
};
