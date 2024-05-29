import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";


function Proyect1(){
    const images = [
        { src: 'p1home.png', alt: 'Home' },
        { src: 'p1reloj.png', alt: 'Reloj'},
        { src: 'p1pass.png', alt: 'Contraseñas'},
        { src: 'p1enlaces.png', alt: 'Enlaces'},
        { src: 'p1tiempo.png', alt: 'Tiempo'}
    ]

    return(
        <>
        <section className="proyectos">
            <h1>Dashboard </h1>
            <div className="descripcion">
                <p>Este proyecto es un tablero interactivo desarrollado con HTML5, CSS y JavaScript Vanilla (ES6). Proporciona cuatro funcionalidades principales: un reloj, una aplicación del tiempo, un generador de contraseñas seguras y una sección para guardar enlaces de interés.</p>
                <b>Características Principales:</b>
                <ul>
                    <li><b>Reloj:</b> Muestra la hora y fecha actualizada cada segundo, con mensajes personalizados según la hora del día.</li>
                    <li><b>Aplicación del Tiempo:</b> Muestra el clima actual y la previsión por horas utilizando la API de WeatherAPI.</li>
                    <li><b>Generador de Contraseñas:</b> Crea contraseñas seguras de entre 12 y 50 caracteres, combinando mayúsculas, minúsculas, números y símbolos.</li>
                    <li><b>Enlaces de Interés:</b> Permite guardar y gestionar enlaces importantes, almacenándolos en LocalStorage.</li>
                    <li><b>Imagen de Fondo:</b> Cambia aleatoriamente cada 15 segundos para un aspecto dinámico.</li>
                </ul>
                <b>Estructura del Proyecto:</b>
                <ul>
                    <li><b>HTML/CSS/JS:</b> Estructura modular con cada funcionalidad separada en archivos específicos.</li>
                    <li><b>LocalStorage:</b> Utilizado para almacenar de manera persistente los enlaces de interés y una localidad del buscador de la Api del tiempo.</li>
                    <li><b>JavaScript ES6:</b> Utiliza características modernas de JavaScript para un código limpio y eficiente.</li>
                </ul>
                <a href="https://anigm89.github.io/project-break-dashboard/index.html"  target="_blank">Ir a la web </a>
            </div>
            <ImageGallery images={images} />
           
        </section>
        <Link to='/' className="volver"> &#60; Atrás </Link>
        <footer>
            <p>Creado y desarrollado por Ani González Moreno</p>
            <a href="https://github.com/Anigm89/" target='_blank'>
                <img src="github.png" alt="github" />
            </a>
        </footer>
        </>
    )
}

export default Proyect1;