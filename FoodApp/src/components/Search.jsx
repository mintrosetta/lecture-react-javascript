import { useEffect } from "react";
import { useState } from "react";

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '342567d3ea164139a18fac0b0d51b2e0';

export default function Search() {
    const [search, setSearch] = useState("");

    // syntax of use effect hook
    // มันจะถูกเรียกใช้งาน 2 ครั้งเพราะ react อยู่ในโหมดเข้มงวด ถ้าปิดมันจะทำงานแค่ 1 ครั้ง (<React.StrictMode>)
    useEffect(() => {
        async function fetchFood() {
            const response = await (await fetch(`${URL}?apiKey=${API_KEY}&query=${search}`)).json();
            console.log(response);
        }
        fetchFood();
    }, [search]);

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    );
}