import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [foods, setFoods] = useState([]);

  return (
    <>
      <Search foods={foods} setFoods={setFoods} />
      {foods.map((food) => <p key={food.id}>{food.title}</p>)}
    </>
  );
}

export default App
