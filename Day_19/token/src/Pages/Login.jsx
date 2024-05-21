import React, { useState } from 'react'

export default function Login() {
  const[loginEmail,setLoginEmail]=useState("")
  const[loginPassword,setLoginPassword]=useState("")

  const handleLogin=(e)=>{
    e.preventDefault()

    fetch('https://reqres.in/api/login',{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify({email:loginEmail,password:loginPassword})
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err,'error'))
  }
  return (
    <div>
          <h3>Login</h3>

          <form onSubmit={handleLogin}>
          <div>
                <input type="email"   value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}/>
              </div>
              <div>
                <input type="password"  value={loginPassword} onChange={(e)=>setLoginPassword (e.target.value)}/>
              </div>
              <input type="submit" />
          </form>
    </div>
  )
}
