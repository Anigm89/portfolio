import { useTheme } from '../themes/ThemeContext.jsx'
import Boton from '../components/Button.jsx';

function Home(){
      const { theme } = useTheme()

    return(
        <>
        <section className={`App ${theme}`}>
        <Boton />
            <h1>Hola, soy Ani </h1>
            <h3>Full Stack developer</h3>
            <img src="../../assets/img/1.png" alt="img" className='img1' />
            <div className='about'>
                <p>Comencé como desarrolladora web utilizando PHP, trabajando tanto en el frontend como en el backend. En mis primeros años, he trabajado con HTML5, CSS, JavaScript y jQuery para crear interfaces de usuario responsivas y modernas, además he desarrollado algún proyecto con Bootstrap.
                    En el backend, he trabajado principalmente con PHP y JavaScript puro (vanilla JS), utilizando bases de datos relacionales como MySQL para gestionar la información de las aplicaciones.</p>
                <p>Mi interés por el desarrollo web no ha dejado de crecer, y eso me llevó a profundizar mis conocimientos en JavaScript. Actualmente, desarrollo aplicaciones utilizando el stack MERN (MongoDB, Express.js, React y Node.js). En el backend, utilizo Node.js junto con Express.js para crear APIs y manejar la lógica del servidor, trabajando tanto con bases de datos relacionales (MySQL) como no relacionales (MongoDB).
                    En el frontend, utilizo React para construir interfaces de usuario dinámicas y eficientes, aprovechando sus ventajas para crear experiencias de usuario ricas y responsivas.</p>
                <p>Me apasiona seguir aprendiendo y mejorando mis habilidades, adoptando nuevas tecnologías y mejores prácticas para ofrecer soluciones innovadoras y de alta calidad. Estoy siempre en busca de nuevos retos y oportunidades para crecer profesionalmente en el emocionante mundo del desarrollo web.</p>
            </div>
        </section>
        </>
    )
}

export default Home;