import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { weatherReducer } from "./reducers/weather.js";
import { imageReduser } from "./reducers/backgroundImage.js";
import { composeWithDevTools } from "redux-devtools-extension";
import { countryReducer } from "./reducers/favorites.js";

const rootReducer = combineReducers({
  country: countryReducer,
  weather: weatherReducer,
  imageBackground: imageReduser,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
