import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faLeaf } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import "./Style.scss";
export function FooterWeatherBlock(props) {
  const weather = useSelector(({ weather }) => weather);
  function сurrentDay() {
    if (weather.selectedDay) {
      return Object.entries(weather.objWeatherData).map(
        ([item, value], index) => {
          const speed = value.wind.speed.toString().slice(0, 1);
          const titleHumidity = `Pressure: ${value.main.pressure}`;
          const titleSpeed = `Gust: ${value.wind.gust}`;
          if (weather.selectedDay === value.dt) {
            return (
              <div className="footerWeatherBlock" key={index}>
                <Tooltip title={titleHumidity}>
                  <div className="humidity">
                    <h2>{value.main.humidity}</h2>
                    <div className="humidityIcon">
                      <FontAwesomeIcon
                        icon={faLeaf}
                        style={{
                          color: "rgb(155,166,160)",
                          fontSize: "34px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        marginTop: "50px",
                        color: "#7c7f88",
                        fontSize: "15px",
                        marginLeft: "20px",
                      }}
                    >
                      Air Quality Index
                    </p>
                  </div>
                </Tooltip>
                <Tooltip title={titleSpeed}>
                  <div className="speed">
                    <h2>{speed}</h2>
                    <div className="speedIcon">
                      <FontAwesomeIcon
                        icon={faWind}
                        style={{
                          color: "rgb(155,166,160)",
                          fontSize: "28px",
                          marginRight: "5px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        marginTop: "50px",
                        color: "#7c7f88",
                        fontSize: "15px",
                      }}
                    >
                      kmph
                    </p>
                  </div>
                </Tooltip>
              </div>
            );
          }
        }
      );
    }
  }
  return <div className="s">{сurrentDay()}</div>;
}
