import { useEffect, useState } from "react";

const HomePage=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log(count);
    },[count])
    return(
        <div>
            <h2>Home Page</h2>
            <h4>{count}</h4>
            <button onClick={()=>{setCount(count+1)}}>Count</button>
        </div>
    )
}
export default HomePage;