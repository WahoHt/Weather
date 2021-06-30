import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./ButtonSearch.scss";

function ButtonSearch(props) {
  return (
    <IconButton
      color="default"
      aria-label="upload picture"
      component="span"
      onClick={props.onClick}
      style={{ position: "relative", padding: "11px" }}
    >
      <SearchIcon />
    </IconButton>
  );
}

export default ButtonSearch;
