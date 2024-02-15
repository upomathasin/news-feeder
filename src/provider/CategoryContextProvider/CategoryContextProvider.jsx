import React, { Children, useContext, useState } from "react";
import { CategoryContext } from "../../context/CategoryContext/CategoryContext";

export default function CategoryContextProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
