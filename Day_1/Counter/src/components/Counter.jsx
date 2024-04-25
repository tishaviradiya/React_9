import { useState } from "react";


const Counter=()=>{
    const[count,setCount]=useState(10);
    const handleAdd=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={handleAdd}>Addition</button>
            <button onClick={()=>{setCount(count-1)}}>Subtraction</button>
        </div>
    )
}
export default Counter;