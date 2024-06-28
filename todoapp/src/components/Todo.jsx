import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <div>
                <Form todos={todos} setTodos={setTodos}/>
                <TodoList todos={todos} />
            </div>
        </>
    );
}

// https://www.youtube.com/watch?v=5lsHjUuD100&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=38
