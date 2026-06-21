/* 
En esta pagina pondre todos mis proyectos realizados.
Cada proyecto tendra una breve descripcion, tecnologias usadas, 
imagenes y enlaces a los repositorios y paginas web.
*/
import React from 'react'
import { Proyectos } from '../sections'
import ContactSection from '../sections/Contacto/ContactSection'
import Footer from '../components/layout/Footer/Footer'
import Navbar from '../components/layout/Navbar/Navbar'
import ScrollTop from '../components/ui/ScrollTop'

const ProyectosPage = () => {
    return (
        <>
            <Navbar />
            <Proyectos />
            <ContactSection />
            <ScrollTop />
            <Footer />
        </>
    )
}

export default ProyectosPage
