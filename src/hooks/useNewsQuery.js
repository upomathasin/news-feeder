import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../context/CategoryContext/CategoryContext";
import { SearchContext } from "../context/SearchContext/SearchContext";

export default function useNewsQuery() {
  const [news, setNews] = useState([]);
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const fetchNews = () => {
    let url = `http://localhost:8000/v2/top-headlines`;

    console.log(selectedCategory);
    if (
      selectedCategory == "Search" &&
      selectedCategory.length > 0 &&
      searchTerm.trim().length > 0
    ) {
      url = `http://localhost:8000/v2/search?q=${searchTerm}`;
    } else if (
      selectedCategory &&
      selectedCategory !== "Search" &&
      selectedCategory.toLowerCase() !== "home"
    ) {
      url = `http://localhost:8000/v2/top-headlines?category=${selectedCategory.toLowerCase()}`;
    } else {
      url = `http://localhost:8000/v2/top-headlines`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (selectedCategory == "Search" && searchTerm.trim().length > 0) {
          setNews(data.result);
        } else {
          setNews(data.articles);
        }
      });
  };

  useEffect(() => {
    fetchNews();
  }, [selectedCategory, searchTerm]);

  return [news];
}
