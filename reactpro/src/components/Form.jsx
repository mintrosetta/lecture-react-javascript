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


// https://www.youtube.com/watch?v=5FDDoHI173g&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=26