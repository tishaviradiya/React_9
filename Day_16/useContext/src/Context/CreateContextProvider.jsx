// CreateContextProvider.jsx
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const CreateContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default CreateContextProvider;