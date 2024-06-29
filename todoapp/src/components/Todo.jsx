import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
    const [todos, setTodos] = useState([]);

    const completedCount = todos.filter((todo) => todo.done).length;
    const todoCount = todos.length;

    return (
        <>
            <div>
                <Form todos={todos} setTodos={setTodos}/>
                <TodoList todos={todos} setTodos={setTodos}/>
                <Footer completed={completedCount} unCompleted={todoCount - completedCount}/>
            </div>
        </>
    );
}
