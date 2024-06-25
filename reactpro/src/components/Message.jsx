export default function Message() {
    function handleClick() {
        console.log("Hello World");
    }

    return (
        <>
            <button onClick={handleClick}>Click here to get a message</button>
        </>
    );
}