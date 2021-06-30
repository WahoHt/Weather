import React from "react";
import "./Style.scss";
function ButtonFavorite(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.textBtn}
    </button>
  );
}
export default ButtonFavorite;
