import axios from "axios";
import { API_KEY_IMAGE } from "../../constants/APIConfig.jsx";
import * as ActionTypes from "../actionTypes";

export const getImage = (city) => (dispatch) => {
  const GET_IMAGE_ENDPOINT = `https://api.unsplash.com/search/photos?query=${
    city ? city : "weather"
  }&client_id=${API_KEY_IMAGE}`;
  return axios
    .get(GET_IMAGE_ENDPOINT)
    .then((response) => {
      dispatch({
        type: ActionTypes.SET_IMAGE_DATA,
        payload: {
          image: response.data.results,
        },
      });
    })
    .catch((Error) => {
      dispatch({ type: ActionTypes.SET_ERROR_IMAGE, payload: Error });
    });
};

export const setLoadingImage = (loading) => {
  return { type: ActionTypes.SET_LOADING_IMAGE_DATA, payload: { loading } };
};
