import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTheme } from '../themes/ThemeContext.jsx'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Boton from '../components/Button.jsx';

function RoutesApp(){

    const { theme } = useTheme()

    return(

        <Router>
            <section className={`App ${theme}`}>
                <Boton />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/proyecto1' element={<Profile />} />
                </Routes>
            </section>
        </Router>
    )
}
export default RoutesApp;