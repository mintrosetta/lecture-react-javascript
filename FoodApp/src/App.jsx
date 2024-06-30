import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";

function App() {
  const [foods, setFoods] = useState([]);

  return (
    <>
      <Nav />
      <Search foods={foods} setFoods={setFoods} />
      <FoodList foods={foods} />
    </>
  );
}

export default App
