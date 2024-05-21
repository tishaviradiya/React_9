import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='home'>
          <div>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716235200&semt=sph" alt=""  width="100" />
          </div>
          <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
          </div>
    </div>
  )
}