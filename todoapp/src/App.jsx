import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import InlineComponent from "./components/InlineComponent";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <InlineComponent />
        </>
    );
}

export default App;
