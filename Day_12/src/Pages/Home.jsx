import Card from "./Card"
import { useEffect, useState } from "react";
const Home=()=>{
    const[product,setProduct]=useState([]);
    const[page,setPage]=useState(1);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums/?_limit=10&_page=${page}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setProduct(data)
        })

    },[page])

    return(
        <div>
            <button disabled={page===1}   onClick={()=>setPage(page-1)}>Prev</button>
            <button>{page}</button>
            <button  disabled={page===product.length} onClick={()=>setPage(page+1)}  >Next</button>
            {product.map((item)=><Card {...item}/>)}
        </div>
    )
   
}
export default Home;