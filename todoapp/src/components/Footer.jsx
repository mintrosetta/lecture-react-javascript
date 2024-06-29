import styles from './Footer.module.css';

export default function Footer({ completed, unCompleted }) {
    return (
        <>
            <div className={styles.footer}>
                <span>Completed Todos: {completed}</span>
                <span>Uncompleted Todos: {unCompleted}</span>
            </div>
        </>
    );
}