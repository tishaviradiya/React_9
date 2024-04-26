import { useState } from "react";
import { useEffect } from "react";


const Home=()=>{
    const[dogImage,setDogImage]=useState({});
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res)=>res.json())
        .then((data)=>{
            setDogImage(data);
        })
    },[])
    return(
        <div>
            <h2>Random Dog Image</h2>
           {dogImage && <img src={dogImage.message} alt="Random dog"/>}
        </div>
    )
}
export default Home;