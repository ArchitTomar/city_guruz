import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import Cityboxes from "../components/Cityboxes";

const Search = () => {
  const [searchValue, setSearchValue] = useState(""); 

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <Cityboxes searchValue={searchValue} />
    </div>
  );
};

export default Search;
