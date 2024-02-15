import React, { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext/CategoryContext";

export default function Categories() {
  const categories = [
    "Home",
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        {categories.map((category) => (
          <li key={crypto.randomUUID()}>
            <a href="#" onClick={() => setSelectedCategory(category)}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
