import { useEffect, useState } from "react";



const Home=()=>{
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setProduct(data);
        })
    },[])
    return(
           <div className="product">
                {product.map((data)=>{
                    return(
                      <div className="product-info">
                        <img src={data.image} alt="{data.title}"  width='300px'/>
                        <h2>{data.price}</h2>
                        <h4>{data.price}</h4>
                        <h4>{data.description}</h4>
                      </div>
                    )
                })}
           </div>
    )
}
export default Home;