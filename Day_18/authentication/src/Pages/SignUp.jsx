import { useState } from "react";



const SignUp=()=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Email-",email);
        console.log("Password",password);
        setEmail("")
        setName("")
        setPassword("")
        localStorage.setItem("Email",email)
        localStorage.setItem("Password",password)

    }
    return(
        <div>
            <h1></h1>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default SignUp;