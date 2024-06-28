import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/Header";
import InlineComponent from "./components/InlineComponent";
import OutlineComponent from "./components/OutlineComponent";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="App">
                <Header />
                <Todo />
            </div>
            {/* <InlineComponent />
            <OutlineComponent /> */}
        </>
    );
}

export default App;
