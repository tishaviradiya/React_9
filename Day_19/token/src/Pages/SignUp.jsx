import React, { useState } from 'react'

export default function SignUp() {

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,email,password);
  }
  return (
    <div className='signup'>
        <h3>SignUp</h3>
          
            <form onSubmit={handleSubmit}>
              <div>
                <input type="text" name="name" value={name}  onChange={(e)=>setName(e.target.value)} placeholder='name'/>
              </div>
              <div>
                <input type="email" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
              </div>
              <div>
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
              </div>
              <input type="submit" />
            </form>
          
        
    </div>
  )
}
