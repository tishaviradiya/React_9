import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from "./Login"
import SignUp from "./SignUp"
import "./AllRoutes.css"



const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home className="home"/>}></Route>
                <Route path="/about" element={<About className="about"/>}>About</Route>
                <Route path="/contact" element={<Contact className="contact"/>}>Contact</Route>
                <Route path="/login" element={<Login className="login"/>}>Login</Route>
                <Route path="/signup" element={<SignUp className="signup"/>}>SignUp</Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;