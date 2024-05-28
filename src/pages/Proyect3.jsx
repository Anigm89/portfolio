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
                    <li>Autenticación: Implementada con Firebase Auth.</li>
                    <li>Gestión de Libros: Los usuarios pueden registrar, buscar y marcar libros como leídos o pendientes. Pero solo el administrador puede editar o eliminar libros.</li>
                    <li>Buscadores: Funcionalidades para buscar libros por género, título y palabras clave.</li>
                    <li>Paginación: Implementada para mejorar la navegación y la experiencia del usuario.</li>
                    <li>Base de Datos: Utiliza MySQL para el almacenamiento de datos.</li>
                    <li>Frontend y Backend: React para el frontend y Node.js/Express para el backend.</li>
                </ul>
                <b>Estructura del Proyecto:</b>
                <ul>
                    <li>Frontend: Desarrollado con React para una experiencia de usuario interactiva.</li>
                    <li>Backend: Node.js y Express manejan la lógica del servidor y las rutas de la API.</li>
                    <li>Base de Datos: MySQL para almacenar y gestionar los datos de los libros y usuarios.</li>
                    <li>Autenticación: Firebase Auth garantiza la seguridad en el acceso de los usuarios.</li>
                    <li>Middlewares: Implementan la lógica de autenticación y autorización.</li>
                </ul>

                <a href="https://appbooks.netlify.app/"  target="_blank">Ir a la web </a>
            </div>
            <ImageGallery images={images} />
           
        </section>
        <Link to='/' className="volver"> &#60; Atrás </Link>
        </>
    )
}

export default Proyect3;