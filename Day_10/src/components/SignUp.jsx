import { useEffect, useState } from "react";

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(name,email,password);
        console.log(setName(""));
        console.log(setEmail(""));
        console.log(setpassword(""));
    }
    useEffect(()=>{
        console.log(name,email,password);
    },[])
    return(
        <div>
            <h3>Registration Form</h3>
            <form onSubmit={handleForm}>
               <div><input type="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder="Enter Your Name"/></div>
                <div><input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Enter Your email"/></div>
                <div><input type="text" name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}  placeholder="Enter Your password"/></div>
                <button>Login</button>
               
            </form>
        </div>
    )
}
export default SignUp;