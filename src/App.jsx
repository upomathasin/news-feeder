import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import CategoryContextProvider from "./provider/CategoryContextProvider/CategoryContextProvider";
import SearchContextProvider from "./provider/SearchContextProvider/SearchContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CategoryContextProvider>
        <SearchContextProvider>
          {" "}
          <Header></Header>
          <News></News>
          <Footer></Footer>
        </SearchContextProvider>
      </CategoryContextProvider>
    </div>
  );
}

export default App;
