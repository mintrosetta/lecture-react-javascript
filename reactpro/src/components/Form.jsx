import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
    });

    function handleChange(e) {
        const value = e.target.value;
        setFormData(value);
    }

    function formSubmitHandler(e) {
        e.preventDefault(); // เมื่อให้มีการ refresh windows เมื่อมีการ submit form
        console.log(`${formData.firstName} ${formData.lastName}`);
    }

    return (
        <>
            <div>
                {formData.firstName} {formData.lastName}
                <form>
                    <input
                        type="text"
                        // onChange={handleChange}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        value={formData.firstName}
                    />
                    <input 
                        type="text" 
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})} 
                        value={formData.lastName}
                    />
                    <button type="submit" onClick={formSubmitHandler}>Add</button>
                </form>
            </div>
        </>
    );
}
