import * as ActionTypes from "../actionTypes";

export const addCountryFavorites = (localFavoritCityData) => ({
  type: ActionTypes.ADD_COUNTRY_FAVORITES,
  payload: {
    localFavoritCityData,
  },
});

export const remoteCountryFavorites = (localFavoritCityData) => ({
  type: ActionTypes.REMOTE_COUNTRY_FAVORITES,
  payload: {
    localFavoritCityData,
  },
});
