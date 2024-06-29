import styles from "./Form.module.css";

import { useState } from "react";

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ name: "", done: false });

    function formSubmitHandler(e) {
        e.preventDefault();
        setTodos([todo, ...todos]); // เป็นแบบ asynchronous
        setTodo({name: "", done: false});
    }

    return (
        <form className={styles.todoForm} onSubmit={formSubmitHandler}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.modernInput}
                    type="text"
                    onChange={(e) => setTodo({...todo, name: e.target.value})}
                    value={todo.name}
                    placeholder="enter todo item..."
                />
                <button className={styles.modernBtn} type="submit">
                    Add
                </button>
            </div>
        </form>
    );
}
