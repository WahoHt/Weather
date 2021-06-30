import * as ActionTypes from "../actionTypes";

const initialState = {
  data: [],
  loading: true,
};

export const imageReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_IMAGE_DATA:
      return {
        ...state,
        data: payload.image,
      };
    case ActionTypes.SET_LOADING_IMAGE_DATA:
      return {
        ...state,
        loading: payload.loading,
      };
    case ActionTypes.SET_ERROR_IMAGE:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
