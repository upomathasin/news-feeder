import React, { useState } from "react";
import { SearchContext } from "../../context/SearchContext/SearchContext";

export default function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState(null);

  console.log(searchTerm);
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
