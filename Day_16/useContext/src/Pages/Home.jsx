// Home.jsx
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ThemeContext } from "../Context/CreateContextProvider";

const Home = () => {
    const { theme, handleTheme } = useContext(ThemeContext);
    console.log(theme);
    return (
        <div style={{ backgroundColor: theme ? "white" : "black", width:"100vw", height:"100vh"}}>
            <button onClick={handleTheme}>{theme?"Light-Mode":"Dark-Mode"}</button>
        </div>
    );
};

export default Home;