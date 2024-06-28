import styles from './InlineComponent.module.css'

const heanderStyle = { color: "blue", fontSize: "150px" };

export default function InlineComponent() {
    return (
        <>
            {/* <p style={heanderStyle}>Inline Component</p> */}
            <h1 className={styles.header}>Inline Component</h1>
        </>
    );
}