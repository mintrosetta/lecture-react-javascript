import styles from "./Form.module.css";

import { useState } from "react";

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState("");

    function formSubmitHandler(e) {
        e.preventDefault();
        setTodos([...todos, todo]); // เป็นแบบ asynchronous
        setTodo("");
    }

    return (
        <form className={styles.todoForm} onSubmit={formSubmitHandler}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.modernInput}
                    type="text"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    placeholder="enter todo item..."
                />
                <button className={styles.modernBtn} type="submit">
                    Add
                </button>
            </div>
        </form>
    );
}
