import React, { useState } from "react";
import CustomInput from "../CustomInput/Input.jsx";
import Button from "../CustomButton/Button.jsx";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../../store/actions/weather.js";
import { getImage } from "../../store/actions/backgroundImage.js";
import { CheckBox } from "../CheckBoxCustom/CheckBox.jsx";
import "./Style.scss";

export function CustomHeader(props) {
  const weather = useSelector(({ weather }) => weather);
  const dispatch = useDispatch();
  const [listIsOpen, setListIsOpen] = useState(false);

  const [queryCity, setQueryCity] = useState("");

  const filterCities = weather.cities
    .filter((country) => country.includes(queryCity))
    .slice(0, 5);

  const history = useHistory();

  function checkQueryData(event) {
    setQueryCity(event.target.value);
  }
  function handelOnClick(country) {
    setQueryCity(country);
    setListIsOpen(false);
  }

  function cityFilter() {
    return filterCities.map((country, index) => (
      <div
        className="city"
        key={index}
        style={{
          alignItems: "center",
          display: "flex",
          padding: "3px 8px 5px 10px",
        }}
      >
        <CheckBox id={country} />
        <li key={index} onClick={() => handelOnClick(country)}>
          {country}
        </li>
      </div>
    ));
  }

  function setQueryMain() {
    history.push(queryCity);
    setListIsOpen(false);
  }

  return (
    <div className="queryBlock">
      <div className="query">
        <CustomInput
          value={queryCity || ""}
          place="Search"
          onClick={setListIsOpen}
          onChange={checkQueryData}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              dispatch(getWeather(queryCity));
              dispatch(getImage(queryCity));
              history.push(queryCity);
              setListIsOpen(false);
            }
          }}
        />
        <Button onClick={setQueryMain} />
        <ul className="cityFilter">{listIsOpen && cityFilter()}</ul>
      </div>
    </div>
  );
}
