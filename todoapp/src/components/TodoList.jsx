import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ todos, setTodos }) {
    const sortedTodos = todos.slice().sort((a, b) => a.done - b.done);
    return (
        <>
            <div className={styles.list}>
                {sortedTodos.map((item) => (
                    <TodoItem key={item.name} item={item} setTodos={setTodos} todos={todos}/>
                ))}
            </div>
        </>
    );
}