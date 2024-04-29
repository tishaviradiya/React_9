import { useEffect, useState } from "react";


const Home=()=>{
    const [page,setPage]=useState(0);
    const handleNext=()=>{
        setPage(page+1);
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/products/?page=${page}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        })
    },[])
    return(
        <div>
            <h3>Pagination</h3>
            <button onClick={()=>{setPage(page-1)}}>Prev</button>
            <button>{page}</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}
export default Home;