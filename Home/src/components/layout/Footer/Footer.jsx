import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react';
import { useWhatsApp } from '../../../hooks/useWhatsApp';

const Footer = () => {
    const { openWhatsApp } = useWhatsApp();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 border-t border-zinc-800/50 pt-16 pb-8 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -tranzinc-x-1/2 w-[800px] h-[300px] bg-emerald-500/5 rounded-t-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="text-3xl font-mono font-bold bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent inline-block">
                            &lt;Dev /&gt;
                        </div>
                        <p className="text-zinc-400 max-w-sm mx-auto md:mx-0">
                            Construyendo experiencias digitales excepcionales con pasión y código limpio.
                        </p>
                    </div>

                    <div className="text-center space-y-4">
                        <h3 className="text-white font-semibold text-lg">Contacto Rápido</h3>
                        <div className="flex flex-col space-y-2 items-center">
                            <a href="mailto:stivengomezmazo7@gmail.com" className="text-zinc-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-2">
                                <Mail size={16} /> stivengomezmazo7@gmail.com
                            </a>
                            <button onClick={openWhatsApp} className="text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer">
                                +57 323 444 7475
                            </button>
                        </div>
                    </div>

                    <div className="text-center md:text-right space-y-4">
                        <h3 className="text-white font-semibold text-lg">Redes Sociales</h3>
                        <div className="flex justify-center md:justify-end gap-4">
                            <a
                                href="https://github.com/TpLink777"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all duration-300 hover:-tranzinc-y-1"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/stiven-g%C3%B3mez-9b73a5261/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 hover:-tranzinc-y-1"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:stivengomezmazo7@gmail.com?subject=Consulta desde portfolio"
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-teal-500/10 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300 hover:-tranzinc-y-1"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p className="text-zinc-400 text-sm">
                        Diseñado y Desarrollado por{' '}
                        <span className="text-emerald-400 font-medium">Stiven Gomez Mazo</span>
                    </p>
                    <p className="text-zinc-500 text-sm">
                        &copy; {currentYear} Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
