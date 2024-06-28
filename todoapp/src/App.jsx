import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import InlineComponent from "./components/InlineComponent";
import OutlineComponent from "./components/OutlineComponent";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <InlineComponent />
            <OutlineComponent />
        </>
    );
}

export default App;
