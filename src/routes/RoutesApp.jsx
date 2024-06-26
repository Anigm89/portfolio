import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from '../themes/ThemeContext.jsx'
import Home from '../pages/Home';
import Proyect1 from '../pages/Proyect1.jsx';
import Proyect2 from '../pages/Proyect2.jsx';
import Proyect3 from '../pages/Proyect3.jsx';
import Boton from '../components/Button.jsx';
import { useEffect } from 'react';


function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function RoutesApp(){

    const { theme } = useTheme()

    return(

        <Router>
            <ScrollToTop/>
            <section className={`App ${theme}`}>
                <Boton />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/proyecto1' element={<Proyect1 />} />
                    <Route path='/proyecto2' element={<Proyect2 />} />
                    <Route path='/proyecto3' element={<Proyect3 />} />
                </Routes>
            </section>
        </Router>
    )
}
export default RoutesApp;