import { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function formSubmitHandler(e) {
        e.preventDefault();
        setTodos([...todos, todo]); // เป็นแบบ asynchronous
        setTodo("");
    }

    return (
        <>
            <div>
                <form onSubmit={formSubmitHandler}>
                    <input 
                        type="text"
                        onChange={(e) => setTodo(e.target.value)} 
                        value={todo} />
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    );
}