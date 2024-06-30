import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";

function App() {
  const [foods, setFoods] = useState([]);

  return (
    <>
      <Nav />
      <Search foods={foods} setFoods={setFoods} />
      <Container>
        <FoodList foods={foods} />
      </Container>
    </>
  );
}

export default App
