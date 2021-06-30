import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "./Style.scss";

export function FromDawnToDusk(params) {
  const nowDate = Date.now() / 1000;
  const weather = useSelector(({ weather }) => weather.city);
  const sunrise = moment(weather.sunrise * 1000).format("HH:mm");
  const sunset = moment(weather.sunset * 1000).format("HH:mm");

  const full = weather.sunset - weather.sunrise;
  let current = nowDate - weather.sunrise;

  if (current > full) current = full;

  // console.log(full);
  // console.log(current);

  const sunDegree = (current / full) * 100;
  const degree = (90 / 100) * sunDegree;

  return (
    <div className="dawnToDusk">
      <div className="ballOne">
        <p className="txtBallOne">sunrise</p>
        <h4 className="timeBallOne">{sunrise}</h4>
      </div>
      <div className="wrapper">
        <div className="dottedLine">
          <div className="square" style={{ transform: `rotate(${degree}deg)` }}>
            <div className="sun" />
          </div>
        </div>
      </div>
      <div className="ballTwo">
        <p className="txtBallTwo">sunset</p>
        <h4 className="timeBallTwo">{sunset}</h4>
      </div>
    </div>
  );
}
