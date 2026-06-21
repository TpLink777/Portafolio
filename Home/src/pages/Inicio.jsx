import React from 'react'
import { InicioPage, Skills, Experiencia } from '../sections'
import DevManifesto from '../sections/Sobre mi/DevManifesto'
import ContactSection from '../sections/Contacto/ContactSection'
import Footer from '../components/layout/Footer/Footer'
import Navbar from '../components/layout/Navbar/Navbar'
import ScrollTop from '../components/ui/ScrollTop'

const Inicio = () => {
    return (
        <>
            <Navbar />
            <InicioPage />
            <DevManifesto />
            <Skills />
            <Experiencia />
            <ContactSection />
            <ScrollTop />
            <Footer />
        </>
    )
}

export default Inicio
