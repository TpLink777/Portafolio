import React from 'react'
import { Link } from 'react-router-dom'
import { useWhatsApp } from '../../hooks/useWhatsApp'

const Menu = ({ setMenuOpen }) => {
    const { openWhatsApp } = useWhatsApp();

    return (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800/50 shadow-2xl shadow-black/50 animate-slide-in-bottom origin-top">
            <div className="px-6 py-6 space-y-2 font-mono">
                <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="group relative block px-5 py-4 text-zinc-400 hover:text-emerald-400 rounded-md transition-all duration-300 cursor-pointer overflow-hidden border border-transparent hover:border-emerald-500/30 bg-transparent hover:bg-emerald-500/5"
                >
                    <div className="relative flex items-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">[</span>
                        <span className="font-medium">Inicio</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">]</span>
                    </div>
                </Link>

                <Link
                    to="/sobre-mi"
                    onClick={() => setMenuOpen(false)}
                    className="group relative block px-5 py-4 text-zinc-400 hover:text-emerald-400 rounded-md transition-all duration-300 cursor-pointer overflow-hidden border border-transparent hover:border-emerald-500/30 bg-transparent hover:bg-emerald-500/5"
                >
                    <div className="relative flex items-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">[</span>
                        <span className="font-medium">Sobre_mí</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">]</span>
                    </div>
                </Link>

                <Link
                    to="/proyectos"
                    onClick={() => setMenuOpen(false)}
                    className="group relative block px-5 py-4 text-zinc-400 hover:text-emerald-400 rounded-md transition-all duration-300 cursor-pointer overflow-hidden border border-transparent hover:border-emerald-500/30 bg-transparent hover:bg-emerald-500/5"
                >
                    <div className="relative flex items-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">[</span>
                        <span className="font-medium">Proyectos</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">]</span>
                    </div>
                </Link>

                <button
                    onClick={() => {
                        setMenuOpen(false);
                        openWhatsApp();
                    }}
                    className="w-full text-left group relative block px-5 py-4 text-zinc-400 hover:text-emerald-400 rounded-md transition-all duration-300 cursor-pointer overflow-hidden border border-transparent hover:border-emerald-500/30 bg-transparent hover:bg-emerald-500/5"
                >
                    <div className="relative flex items-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">./</span>
                        <span className="font-medium">contact</span>
                    </div>
                </button>
            </div>
            <div className="h-0.5 bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-500 opacity-50"></div>
        </div>
    )
}

export default Menu
