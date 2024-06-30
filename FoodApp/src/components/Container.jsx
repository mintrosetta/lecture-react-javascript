import style from './container.module.css';

// children -> access to child component
export default function Container({ children }) {
    return (
        <div className={style['parent-container']}>
            {children}
        </div>
    );
}