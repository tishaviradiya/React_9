import { useEffect, useState } from "react";



const Home=()=>{
    
    const[name,setName]=useState("");
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[user,setUser]=useState([]);
    // create
    const data={
        name,
        email,
        password,
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8001/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        alert("userData inserted successfully!")
        setName("")
        setEmail("")
        setPassword("")
    }
    // Read
    useEffect(()=>{
        fetch(`http://localhost:8001/users`)
        .then((res)=>res.json())
        .then((data)=>setUser)
    },[])

    return(

        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="UserName" onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <input type="text" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <input type="text" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Home;