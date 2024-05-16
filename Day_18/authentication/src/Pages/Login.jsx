


import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = localStorage.getItem("Email");
        let password = localStorage.getItem("Password");

        if (loginEmail === email && loginPassword === password) {
            alert("Login successfully!");
            navigate("/");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" name="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;