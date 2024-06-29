import styles from './TodoItem.module.css';

export default function TodoItem(props) {
    const { item, todos, setTodos } = props;

    function deleteHandler(item) {
        console.log("Delete " +  item);
        let newTodos = todos.filter((todo) => {
            return todo !== item;
        });
        setTodos(newTodos);
    }

    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemName}>
                    {item.name}
                    <span>
                        <button onClick={() => deleteHandler(item.name)} className={styles.deleteBtn}>x</button>
                    </span>
                </div>
                <hr className={styles.line} />
            </div>
        </>
    );
}