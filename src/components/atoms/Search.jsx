import React from "react";
import IconButton from "./IconButton";
import "./Search.css";

const Search = ({ onChange, value, name, onClick }) => {
  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={onChange}
          value={value}
          name={name}
        />
      </div>
      <IconButton
          css={"search-icon"}
          icon={"ic:baseline-search"}
          onClick={onClick}
        />
    </div>
  );
};

export default Search;
