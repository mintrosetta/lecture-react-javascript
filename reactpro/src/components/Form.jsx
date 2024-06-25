import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");

    function handleChange(e) {
        const value = e.target.value;
        setName(value);
    }

    return (
        <>
            <div>
                <form>
                    <input 
                    type="text" 
                    // onChange={handleChange} 
                    onChange={(e) => setName(e.target.value)}
                    value={name}/>
                </form>
            </div>
        </>
    );
}
