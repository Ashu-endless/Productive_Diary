import React,{useState} from "react";
function ThemeSwitcher() {

    const [theme, settheme] = useState("dark");

    function themeswitcher(){
        if(theme === 'dark'){
            settheme('light')
            document.querySelector('#root').setAttribute('data-theme',"light")

        }else{
            settheme('dark')
            document.querySelector('#root').setAttribute('data-theme',"dark")
        }
    }

    return ( <>
            <i nav-icon="theme" onClick={themeswitcher} className={theme === 'dark' ? "bi bi-moon":"bi bi-sun"} ></i>
    
    </> );
}

export default ThemeSwitcher;