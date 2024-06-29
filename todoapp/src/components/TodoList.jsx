import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ todos, setTodos }) {
    return (
        <>
            <div className={styles.list}>
                {todos.map((item) => (
                    <TodoItem key={item.name} item={item} setTodos={setTodos} todos={todos}/>
                ))}
            </div>
        </>
    );
}