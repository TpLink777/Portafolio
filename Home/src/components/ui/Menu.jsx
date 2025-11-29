import React from 'react'
import { Link } from 'react-router-dom'
import { useWhatsApp } from '../../hooks/useWhatsApp'
import { useMenu } from '../../hooks/useMenu'

const Menu = () => {
    const { openWhatsApp } = useWhatsApp();
    const { setMenuOpen } = useMenu();

    return (
        <>
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50 shadow-2xl shadow-black/20">
                <div className="px-6 py-6 space-y-2">
                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="group relative block px-5 py-4 text-slate-300 hover:text-white rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                    >

                        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/30 rounded-2xl transition-all duration-300"></div>

                        <div className="relative flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="font-semibold">Inicio</span>
                        </div>
                    </Link>

                    <Link
                        to="/sobre-mi"
                        onClick={() => setMenuOpen(false)}
                        className="group relative block px-5 py-4 text-slate-300 hover:text-white rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                    >

                        <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/30 rounded-2xl transition-all duration-300"></div>

                        <div className="relative flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="font-semibold">Sobre mí</span>
                        </div>
                    </Link>

                    <Link
                        to="/proyectos"
                        onClick={() => setMenuOpen(false)}
                        className="group relative block px-5 py-4 text-slate-300 hover:text-white rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                    >

                        <div className="absolute inset-0 bg-linear-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/30 rounded-2xl transition-all duration-300"></div>

                        <div className="relative flex items-center gap-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="font-semibold">Proyectos</span>
                        </div>
                    </Link>

                    <Link
                        to="/"
                        onClick={() => {
                            setMenuOpen(false);
                            openWhatsApp();
                        }}
                        className="group relative block px-5 py-4 text-slate-300 hover:text-white rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                    >

                        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/30 rounded-2xl transition-all duration-300"></div>

                        <div className="relative flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="font-semibold">Contáctame</span>
                        </div>
                    </Link>
                </div>

                <div className="h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-50"></div>
            </div>
        </>
    )
}

export default Menu
