import React from "react";
import "./StyleInp.scss";

function CustomInput({ place, onChange, value, onClick, onKeyPress }) {
  return (
    <>
      <input
        className="inputSearch"
        type="text"
        value={value}
        placeholder={place}
        onChange={onChange}
        onClick={() => onClick(true)}
        onKeyPress={onKeyPress}
      />
    </>
  );
}

export default CustomInput;
