import React from 'react'
import { InicioPage, Skills, Experiencia } from '../sections'
import Footer from '../components/layout/Footer/Footer'
import Navbar from '../components/layout/Navbar/Navbar'
import ScrollTop from '../components/ui/ScrollTop'

const Inicio = () => {
    return (
        <>
            <Navbar />
            <InicioPage />
            <Skills />
            <Experiencia />
            <ScrollTop />
            <Footer />
        </>
    )
}

export default Inicio
