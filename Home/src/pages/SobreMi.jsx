import React from 'react'
import { Seccion1, Seccion2, Seccion3 } from '../sections'
import Footer from '../components/layout/Footer/Footer'
import Navbar from '../components/layout/Navbar/Navbar'
import ScrollTop from '../components/ui/ScrollTop'


const SobreMi = () => {
    return (
        <>
            <Navbar />
            <Seccion1 />
            <Seccion2 />
            <Seccion3 />
            <ScrollTop />
            <Footer />
        </>
    )
}

export default SobreMi
