import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";


function Proyect1(){
    const images = [
        { src: '../../assets/img/p1home.png', alt: 'Home' },
        { src: '../../assets/img/p1reloj.png', alt: 'Reloj'},
        { src: '../../assets/img/p1pass.png', alt: 'Contraseñas'},
        { src: '../../assets/img/p1enlaces.png', alt: 'Enlaces'},
        { src: '../../assets/img/p1tiempo.png', alt: 'Tiempo'}
    ]

    return(
        <>
        <section className="proyectos">
            <h1>Dashboard </h1>
            <div className="descripcion">
                <p>Este proyecto es un tablero interactivo desarrollado con HTML5, CSS y JavaScript Vanilla (ES6). Proporciona cuatro funcionalidades principales: un reloj, una aplicación del tiempo, un generador de contraseñas seguras y una sección para guardar enlaces de interés.</p>
                <b>Características Principales:</b>
                <ul>
                    <li>Reloj: Muestra la hora y fecha actualizada cada segundo, con mensajes personalizados según la hora del día.</li>
                    <li>Aplicación del Tiempo: Muestra el clima actual y la previsión por horas utilizando la API de WeatherAPI.</li>
                    <li>Generador de Contraseñas: Crea contraseñas seguras de entre 12 y 50 caracteres, combinando mayúsculas, minúsculas, números y símbolos.</li>
                    <li>Enlaces de Interés: Permite guardar y gestionar enlaces importantes, almacenándolos en LocalStorage.</li>
                    <li>Imagen de Fondo: Cambia aleatoriamente cada 15 segundos para un aspecto dinámico.</li>
                </ul>
                <b>Estructura del Proyecto:</b>
                <ul>
                    <li>HTML/CSS/JS: Estructura modular con cada funcionalidad separada en archivos específicos.</li>
                    <li>LocalStorage: Utilizado para almacenar de manera persistente los enlaces de interés y una localidad del buscador de la Api del tiempo.</li>
                    <li>JavaScript ES6: Utiliza características modernas de JavaScript para un código limpio y eficiente.</li>
                </ul>
                <a href="https://anigm89.github.io/project-break-dashboard/index.html"  target="_blank">Ir a la web </a>
            </div>
            <ImageGallery images={images} />
           
        </section>
        <Link to='/' className="volver"> &#60; Atrás </Link>
        </>
    )
}

export default Proyect1;