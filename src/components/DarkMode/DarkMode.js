import React, { useState, useEffect } from 'react';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";


function DarkMode() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
    };
    const toggleTheme = e => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
