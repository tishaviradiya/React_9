import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleAdd=()=>{
        setCount(count+1)
    }
    useEffect(() => {
        console.log(count);
        setCount(count+1)
    }, [])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleAdd}>Count</button>
        </div>
    )
}
export default Counter;