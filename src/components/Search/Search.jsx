import React, { useContext, useState } from "react";
import search from "../../assets/assets/icons/search.svg";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import { CategoryContext } from "../../context/CategoryContext/CategoryContext";
import { useDebounce } from "../../hooks";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  CategoryContext;
  const doSearch = useDebounce((term) => {
    setSelectedCategory("Search");
    setSearchTerm(term);
  }, 500);
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSelectedCategory("Search");
  //   setSearchTerm(searchText);
  // };

  const handleTyping = (e) => {
    setSearchText(e.target.value);
    doSearch(e.target.value);
  };
  return (
    <div className="flex border-b  border-b-slate-400 p-1 items-center space-x-3 lg:space-x-8">
      <form>
        <input
          type="text"
          placeholder="Search Here.."
          onChange={handleTyping}
        ></input>
        <button>
          {" "}
          <img src={search} />
        </button>
      </form>
    </div>
  );
}
