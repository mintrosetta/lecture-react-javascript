import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";

function App() {
  const [foods, setFoods] = useState([]);

  return (
    <>
      <Search foods={foods} setFoods={setFoods} />
      <FoodList foods={foods} />
    </>
  );
}

export default App
