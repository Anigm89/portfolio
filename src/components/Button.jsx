import { useState } from "react";
import { useTheme } from "../themes/ThemeContext";

const Boton = () =>{
    const { theme, changeTheme } = useTheme();
    const [isMoved, setIsmoved] = useState(false)

    const handleChangeTheme = () => {

        const newTheme = theme === 'light' ? 'dark' : 'light'; 
        changeTheme(newTheme)   
        setIsmoved(!isMoved)  
    }

    return (
        <>
            <div className={`modo ${theme}`} >
                <p className={`text ${theme}`}>Cambiar Modo</p>
                <div className="fondogris">
                    <div className={`boton ${isMoved ? 'mover azul' : ''}`} id="boton"  onClick={handleChangeTheme}>  </div>
                </div>
            </div>
        </>
        )
}

export default Boton;
