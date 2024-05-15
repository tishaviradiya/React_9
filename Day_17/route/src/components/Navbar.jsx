

import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <div>
            <ul style={{display:"flex"}}>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
                <li> <Link to="/login">Login</Link></li>
                <li> <Link to="/signup">SignUp</Link></li>
            </ul>
           
           
           
           
           
           

        </div>
    )
}
export default Navbar;