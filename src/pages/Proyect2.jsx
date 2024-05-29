import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";


function Proyect2(){
    const images = [
        { src: '../../assets/img/proyect2/home.png', alt: 'Home' },
        { src: '../../assets/img/proyect2/todo.png', alt: 'Productos'},
        { src: '../../assets/img/proyect2/categoria.png', alt: 'Categoría'},
        { src: '../../assets/img/proyect2/detalle.png', alt: 'Detalle producto'},
        { src: '../../assets/img/proyect2/login.png', alt: 'Login'},
        { src: '../../assets/img/proyect2/detalleadmin.png', alt: 'Detalle producto de admin'},
        { src: '../../assets/img/proyect2/crear.png', alt: 'Añadir producto'},
        { src: '../../assets/img/proyect2/editar.png', alt: 'Editar producto'},
    ]

    return(
        <>
        <section className="proyectos">
            <h1>Tienda de ropa </h1>
            <div className="descripcion">
                <p>
                Este proyecto de back-end es una tienda desarrollada con Node.js y Express.js, utilizando una base de datos MongoDB. El objetivo principal del proyecto es gestionar un catálogo de productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar) a través de una API REST.
                </p>
                <b>Características Principales:</b>
                <ul>
                    <li><b>Autenticación:</b> Implementada con Firebase Auth, permitiendo que solo los administradores registrados puedan realizar cambios en los productos.</li>
                    <li><b>Operaciones CRUD:</b> Los administradores pueden agregar, editar y eliminar productos.</li>
                    <li><b>API REST:</b> Proporciona endpoints para gestionar productos, incluyendo detalles, categorías, etc.</li>
                    <li><b>Arquitectura MVC:</b> El proyecto sigue el patrón de arquitectura Modelo-Vista-Controlador para organizar el código de manera eficiente.</li>
                    <li><b>Documentación:</b> Incluye documentación con Swagger para la API.</li>
                    <li><b>Test:</b> Incluye test realizados con Jest y Supertest</li>
                </ul>
                <b>Estructura del Proyecto:</b>
                <ul>
                    <li><b>Modelos:</b> Definidos con Mongoose para la interacción con MongoDB.</li>
                    <li><b>Controladores:</b> Manejan la lógica de negocio y las respuestas a las solicitudes CRUD.</li>
                    <li><b>Rutas:</b> Definen los endpoints de la API y las funciones correspondientes en los controladores.</li>
                    <li><b>Middlewares:</b> Implementan la lógica de autenticación y autorización.</li>
                    
                </ul>
                
                <a href="https://backend-project-break-production.up.railway.app/"  target="_blank">Ir a la web </a>
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

export default Proyect2;