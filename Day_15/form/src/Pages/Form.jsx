import { useState } from "react";




const Form=()=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[error,setError]=useState({});

    const errObj={};
    const handleSubmit=(e)=>{
        e.preventDefault();
       console.log();
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="Name"  onChange={(e)=>setName(e.target.value)} value={name}/>
                    {error.name && <span>{error.name}</span>}
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    {error.email && <span>{error.email}</span>}
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Form;