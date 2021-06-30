import React, { useState } from "react";
import { FavoriteList } from "../FavoriteList/FavoriteList.jsx";
import ButtonFavorite from "../ButtonFavorite/ButtonFavorite.jsx";
import "./Style.scss";

export function Favorite() {
  const [listIsOpen, setListOpen] = useState(false);
  return (
    <div className="favoritCity">
      <div className="buttonDropDown">
        <ButtonFavorite
          className="buttonDrop"
          textBtn="More"
          onClick={() => setListOpen((listIsOpen) => !listIsOpen)}
        />
      </div>
      <ul className="dropDown">{listIsOpen && <FavoriteList />}</ul>
    </div>
  );
}
