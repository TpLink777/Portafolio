import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import MenuNav from '../../ui/Menu'
import { useWhatsApp } from '../../../hooks/useWhatsApp'
import { useMenu } from '../../../hooks/useMenu'

const Navbar = () => {
    const { menuOpen, setMenuOpen } = useMenu();
    const { openWhatsApp } = useWhatsApp();
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <div>
                <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md shadow-lg border-b border-zinc-800/50 py-3' : 'bg-transparent py-5'}`}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center justify-between">

                            <div className="text-xl md:text-2xl font-mono font-bold text-emerald-500 hover:text-white transition-colors duration-300">
                                <span className="text-zinc-500">user@stiven:</span><span className="text-teal-400">~</span>$ <span className="animate-pulse">_</span>
                            </div>


                            <div className="hidden md:flex items-center gap-8 font-mono">
                                <Link to="/" className={`font-medium transition-colors duration-300 relative group ${isActive('/') ? 'text-emerald-400' : 'text-zinc-400 hover:text-emerald-400'}`}>
                                    {isActive('/') && <span className="text-zinc-600 mr-1">[</span>}
                                    Inicio
                                    {isActive('/') && <span className="text-zinc-600 ml-1">]</span>}
                                </Link>
                                <Link to="/sobre-mi" className={`font-medium transition-colors duration-300 relative group ${isActive('/sobre-mi') ? 'text-emerald-400' : 'text-zinc-400 hover:text-emerald-400'}`}>
                                    {isActive('/sobre-mi') && <span className="text-zinc-600 mr-1">[</span>}
                                    Sobre_mí
                                    {isActive('/sobre-mi') && <span className="text-zinc-600 ml-1">]</span>}
                                </Link>
                                <Link to="/proyectos" className={`font-medium transition-colors duration-300 relative group ${isActive('/proyectos') ? 'text-emerald-400' : 'text-zinc-400 hover:text-emerald-400'}`}>
                                    {isActive('/proyectos') && <span className="text-zinc-600 mr-1">[</span>}
                                    Proyectos
                                    {isActive('/proyectos') && <span className="text-zinc-600 ml-1">]</span>}
                                </Link>
                                <button onClick={() => openWhatsApp()} className="px-5 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all duration-300 font-bold cursor-pointer font-mono text-sm uppercase tracking-wider">
                                    ./contact
                                </button>
                            </div>


                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="md:hidden text-zinc-300 hover:text-emerald-400 transition-colors duration-300 p-2 cursor-pointer"
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
