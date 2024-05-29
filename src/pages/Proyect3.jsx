import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";


function Proyect3(){
    const images = [
        { src: '../../assets/img/proyect3/home.png', alt: 'Home' },
        { src: '../../assets/img/proyect3/detalle.png', alt: 'Detalle'},
        { src: '../../assets/img/proyect3/login.png', alt: 'Login'},
        { src: '../../assets/img/proyect3/detalleUsu.png', alt: 'Detalle de usuario registrado'},
        { src: '../../assets/img/proyect3/detalleadmin.png', alt: 'Detalle libro de admin'},
        { src: '../../assets/img/proyect3/perfil.png', alt: 'Perfil usuario libros leidos'},
        { src: '../../assets/img/proyect3/perfil2.png', alt: 'Perfil usuario libros pendientes'},
        { src: '../../assets/img/proyect3/editar.png', alt: 'Editar libro'},
        { src: '../../assets/img/proyect3/add.png', alt: 'Añadir un libro'},
    ]

    return(
        <>
        <section className="proyectos">
            <h1>AppBook </h1>
            <div className="descripcion">
                <p>AppBook es una aplicación desarrollada con Node.js, Express, React, MySQL y Firebase Auth para la autenticación. La aplicación permite a los usuarios llevar un registro de los libros que han leído y los que desean leer, mostrando recomendaciones basadas en títulos, géneros y palabras clave.</p>
                <b>Características Principales:</b>
                <ul>
                    <li><b>Autenticación:</b> Implementada con Firebase Auth.</li>
                    <li><b>Gestión de Libros:</b> Los usuarios pueden registrar, buscar y marcar libros como leídos o pendientes. Pero solo el administrador puede editar o eliminar libros.</li>
                    <li><b>Buscadores:</b> Funcionalidades para buscar libros por género, título y palabras clave.</li>
                    <li><b>Paginación:</b> Implementada para mejorar la navegación y la experiencia del usuario.</li>
                    <li><b>Base de Datos:</b> Utiliza MySQL para el almacenamiento de datos.</li>
                    <li><b>Frontend y Backend:</b> React para el frontend y Node.js/Express para el backend.</li>
                </ul>
                <b>Estructura del Proyecto:</b>
                <ul>
                    <li><b>Frontend:</b> Desarrollado con React para una experiencia de usuario interactiva.</li>
                    <li><b>Backend:</b> Node.js y Express manejan la lógica del servidor y las rutas de la API.</li>
                    <li><b>Base de Datos:</b> MySQL para almacenar y gestionar los datos de los libros y usuarios.</li>
                    <li><b>Autenticación:</b> Firebase Auth garantiza la seguridad en el acceso de los usuarios.</li>
                    <li><b>Middlewares:</b> Implementan la lógica de autenticación y autorización.</li>
                    <li><b>Arquitectura:</b> Utiliza el patrón Modelo-Vista-Controlador (MVC) para organizar el código de manera eficiente.</li>
                </ul>

                <a href="https://appbooks.netlify.app/"  target="_blank">Ir a la web </a>
            </div>
            <ImageGallery images={images} />
           
        </section>
        <Link to='/' className="volver"> &#60; Atrás </Link>
        <footer>
            <p>Creado y desarrollado por Ani González Moreno</p>
            <a href="https://github.com/Anigm89/" target='_blank'>
                <img src="../../assets/img/github.png" alt="github" />
            </a>
        </footer>
        </>
    )
}

export default Proyect3;