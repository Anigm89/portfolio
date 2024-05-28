import { Link } from 'react-router-dom';

function Home(){

    return(
        <>
        <section>
            <h1>Hola, soy Ani </h1>
            <h3>Full Stack developer</h3>
            <img src="../../assets/img/sinfondo.png" alt="img" className='img1' />
            <div className='about'>
                <p>Comencé como desarrolladora web utilizando PHP, trabajando tanto en el frontend como en el backend. En mis primeros años, he trabajado con HTML5, CSS, JavaScript y jQuery para crear interfaces de usuario responsivas y modernas, además he desarrollado algún proyecto con Bootstrap.
                    En el backend, he trabajado principalmente con PHP y JavaScript puro (vanilla JS), utilizando bases de datos relacionales como MySQL para gestionar la información de las aplicaciones.</p>
                <p>Mi interés por el desarrollo web no ha dejado de crecer, y eso me llevó a profundizar mis conocimientos en JavaScript. Actualmente, desarrollo aplicaciones utilizando el stack MERN (MongoDB, Express.js, React y Node.js). En el backend, utilizo Node.js junto con Express.js para crear APIs y manejar la lógica del servidor, trabajando tanto con bases de datos relacionales (MySQL) como no relacionales (MongoDB).
                    En el frontend, utilizo React para construir interfaces de usuario dinámicas y eficientes, aprovechando sus ventajas para crear experiencias de usuario ricas y responsivas.</p>
                <p>Me apasiona seguir aprendiendo y mejorando mis habilidades, adoptando nuevas tecnologías y mejores prácticas para ofrecer soluciones innovadoras y de alta calidad. Estoy siempre en busca de nuevos retos y oportunidades para crecer profesionalmente en el emocionante mundo del desarrollo web.</p>
            </div>
            <div className='seccion'>
                <h2>Mis proyectos</h2>
                <ul className="listado-trabajos">
                    <li className='proyecto1'>
                        <div className='datacontainer'>
                            <h3>Dashboard</h3>
                            <p className='description'>Proyecto creado con  HTML5, CSS y JavaScript Vanilla</p>
                            <Link to="/proyecto1" className='ver'>Ver</Link>
                        </div>
                    </li>
                    <li className='proyecto2'>
                        <div className='datacontainer'>
                            <h3>Tienda</h3>
                            <p className='description'>Proyecto de backend creado con NodeJS y ExpressJS, HTML5, CSS y MongoDB.<br/> Y Firebase auth para la autenticación.</p>
                            <Link to="/proyecto2" className='ver'>Ver</Link>
                        </div>
                    </li>
                    <li className='proyecto3'>
                    <div className='datacontainer'>
                            <h3>AppBook</h3>
                            <p className='description'>App de libros creada con NodeJS, ExpressJS y MySQL para el backend, React para el front-end y Firebase auth para la autenticación.</p>
                            <Link to="/proyecto3" className='ver'>Ver</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='seccion'>
                <h2>Contacto</h2>
                <div className='enlaces'>
                    <a href="https://www.linkedin.com/in/aniana-gonzalez-moreno/" target='_blank' className='btn'>
                      <div className='ln'></div>
                    </a>
                    <a href="mailto:anigm89@gmail.com" target='_blank'  className='btn'>
                        <div className='mail'></div>
                    </a>
                </div>
            </div>
        </section>
        <footer>
            <p>Creado y desarrollado por Ani González Moreno</p>
            <a href="https://github.com/Anigm89/" target='_blank'>
                <img src="../../assets/img/github.png" alt="github" />
            </a>
        </footer>
        </>
    )
}

export default Home;