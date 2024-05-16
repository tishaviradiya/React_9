
import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import SignUp from "./SignUp"
import Login from "./Login"
import Contact from "./Contact"

const AllRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}>Home</Route>
                <Route path="/about" element={<About/>}>About</Route>
                <Route path="/contact" element={<Contact/>}>Contact</Route>
                <Route path="/signup" element={<SignUp/>}>SignUp</Route>
                <Route path="/login" element={<Login/>}>Login</Route>
            </Routes>
        </div>
    )
}
export default AllRoutes