// List & Keys
import { useEffect, useState } from "react";


const  Home=()=>{
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setProduct(data);
        })
    },[])

    return (
        <div>
            <ol>
                {product.map((data,index)=>{
                    return <div key={data.id}>
                        <li>{data.title}
                        <ol>
                            <li>{data.id}</li>
                            <li>{data.title}</li>
                            <li>{data.completed}</li>
                        </ol>
                        </li>
                    </div>
                })}
            </ol>
        </div>
    )

}
export default Home;