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

    function nameClickHandler(itemName) {
        console.log("Item click " + itemName)

        let updatedTodos = todos.map((item) => item.name === itemName ? {...item, done: !item.done} : item);
        setTodos(updatedTodos);
    }

    const className = item.done ? styles.completed : '';

    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemName}>
                    <span className={className} onClick={() => nameClickHandler(item.name)}>
                        {item.name}
                    </span>
                    <span>
                        <button onClick={() => deleteHandler(item.name)} className={styles.deleteBtn}>x</button>
                    </span>
                </div>
                <hr className={styles.line} />
            </div>
        </>
    );
}