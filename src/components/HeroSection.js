import React, {useContext} from 'react';


import ThemeContext from '../Context/ThemeContext';

import AppTheme from '../Colors';



const HeroSection = () =>{

    const theme = useContext(ThemeContext)[0]
    const currectTheme = AppTheme[theme]
    const [themeMode, setThemeMode]=useContext(ThemeContext);
return(
    <div
    style={{
        padding: "1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}` ,
        textAlign: "center",
        height: '86vh'
    }}
    >

        <h1>CONTEXT API THEME TOGGLER</h1>
        <p>click button below to toggle between dark and light mode</p>
        <button
        style={{
            backgroundColor: "#26ae60",
            padding: "10px 150px",
            fontSize: "44px",
            color: "#fff",
            border: `${currectTheme.border}`
        }}
        onClick={
            ()=>{
                setThemeMode(themeMode==='light'? "dark": "light")
            }
        }
         >
            TOGGLE THEME
        </button>

    </div>
)

}

export default HeroSection;