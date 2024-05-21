import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTheme } from '../themes/ThemeContext.jsx'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';
import Boton from '../components/Button.jsx';

function RoutesApp(){

    const { theme } = useTheme()

    return(
        
        <Router>
            <section className={`App ${theme}`}>
                <Boton />
                <header>
                    <div className='content'>
                        <nav>
                            <Link to={'/'}>Home</Link>    
                            <Link to={'/profile'}>Profile</Link>    
                            <Link to={'/myjob'}>MiJob</Link>
                        </nav>
                    </div>
                </header>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/myjob'  element={<MyJob />} />
                </Routes>
            </section>
        </Router>
    )
}
export default RoutesApp;
