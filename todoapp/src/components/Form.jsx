import { useState } from "react";

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState("");

    function formSubmitHandler(e) {
        e.preventDefault();
        setTodos([...todos, todo]); // เป็นแบบ asynchronous
        setTodo("");
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
            <button type="submit">Add</button>
        </form>
    );
}