import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import MenuNav from '../../ui/Menu'
import { useWhatsApp } from '../../../hooks/useWhatsApp'
import { useMenu } from '../../../hooks/useMenu'

const Navbar = () => {
    const { menuOpen, setMenuOpen } = useMenu();
    const { openWhatsApp } = useWhatsApp();

    return (
        <>
            <div>

                <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">

                            <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                &lt;Dev /&gt;
                            </div>


                            <div className="hidden md:flex items-center gap-8">
                                <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium cursor-pointer">
                                    Inicio
                                </Link>
                                <Link to="/sobre-mi" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium cursor-pointer">
                                    Sobre mí
                                </Link>
                                <Link to="/proyectos" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium cursor-pointer">
                                    Proyectos
                                </Link>
                                <Link to="/" onClick={openWhatsApp} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium cursor-pointer">
                                    Contáctame
                                </Link>
                            </div>


                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors duration-300 p-2"
                            >
                                {menuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>

                    {menuOpen && (
                        <MenuNav setMenuOpen={setMenuOpen} />
                    )}

                </nav>
            </div>
        </>
    )
}

export default Navbar
