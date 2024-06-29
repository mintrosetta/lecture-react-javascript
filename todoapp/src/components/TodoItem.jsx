import styles from './TodoItem.module.css';

export default function TodoItem(props) {
    const { item } = props;

    return (
        <>
            <div className={styles.item}>
                <div className={styles.itemName}>
                    {item}
                    <span>
                        <button className={styles.deleteBtn}>x</button>
                    </span>
                </div>
                <hr className={styles.line} />
            </div>
        </>
    );
}