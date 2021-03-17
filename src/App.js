import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Giphy } from "./components/Giphy";
import Header from "./components/Header";
require("dotenv").config();

const API_KEY = "BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
// const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [giphy, setGiphy] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("");

  console.log(process.env);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
      );
      console.log(result);

      setGiphy(result.data.data);
    };
    fetchData();
  }, []);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };
  const onSearchClick = async (e) => {
    e.preventDefault();

    const result = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`
    );
    console.log(result);
    setGiphy(result.data.data);

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
