import { useState } from "react";

export default function Counter() {
    // variable, function for update state of variable 
    // useState({default value})
    const [count, setCount] = useState(0);

    function incrementHandlerClick() {
        setCount(count + 1);
    }

    function decrementHandlerClick() {
        setCount(count - 1);
    }

    return (
        <>
            <div>
                <h1>Count value is: {count}</h1>
                <button onClick={incrementHandlerClick}>Increment</button>
                <button onClick={decrementHandlerClick}>Decrement</button>
            </div>
        </>
    );
}