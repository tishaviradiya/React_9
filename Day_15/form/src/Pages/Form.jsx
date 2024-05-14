import { useState } from "react";




const Form=()=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
       console.log(name,email);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="Name"  onChange={(e)=>setName(e.target.value)} value={name}/>
                    
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                   
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Form;