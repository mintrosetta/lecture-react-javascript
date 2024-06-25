import { useState } from "react";

export default function Counter() {
    // variable, function for update state of variable 
    // useState({default value})
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);
    const [decreaseBy, setDecreaseBy] = useState(1);

    function incrementHandlerClick() {
        setCount(count + incrementBy);
    }

    function decrementHandlerClick() {
        setCount(count - decreaseBy);
    }

    function increaseIncrementHandlerClick() {
        setIncrementBy(incrementBy + 1);
    }

    function decreaseIncrementHandlerClick() {
        setDecreaseBy(decreaseBy + 1);
    }

    return (
        <>
            <div>
                <h1>Count value is: {count}</h1>
                <button onClick={incrementHandlerClick}>Increment</button>
                <button onClick={decrementHandlerClick}>Decrement</button>
            
                <h1>We are incrementing the value by: {incrementBy}</h1>
                <button onClick={increaseIncrementHandlerClick}>Increase Increment</button>
                <button onClick={decreaseIncrementHandlerClick}>Decrease Increment</button>
            </div>
        </>
    );
}