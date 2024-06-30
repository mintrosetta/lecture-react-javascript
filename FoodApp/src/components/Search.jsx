import { useEffect } from "react";
import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");

    // syntax of use effect hook
    // มันจะถูกเรียกใช้งาน 2 ครั้งเพราะ react อยู่ในโหมดเข้มงวด ถ้าปิดมันจะทำงานแค่ 1 ครั้ง (<React.StrictMode>)
    useEffect(() => {
        function demo() {
            console.log("Hello World");
        }

        demo();
    }, [search]);

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    );
}