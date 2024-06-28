import '../css/style.css';

const heanderStyle = { color: "blue", fontSize: "150px" };

export default function InlineComponent() {
    return (
        <>
            {/* <p style={heanderStyle}>Inline Component</p> */}
            <h1 className='header'>Inline Component</h1>
        </>
    );
}