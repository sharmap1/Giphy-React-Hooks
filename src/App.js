import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Giphy } from "./components/Giphy";
import Header from "./components/Header";
require("dotenv").config();

const App = () => {
  const [giphy, setGiphy] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("");

  // const GIPHY_KEY = "BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
  useEffect(() => {
    const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

    console.log(process.env);
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${query}`
      );
      console.log(result);
      setGiphy(result.data.data);
    };
    fetchData();
  }, [query]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };
  const onSearchClick = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <>
      <Header
        search={search}
        updateSearch={updateSearch}
        onSearchClick={onSearchClick}
      />
      <Giphy giphy={giphy} />
    </>
  );
};

export default App;
