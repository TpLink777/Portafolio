import React from 'react'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <div className="flex flex-col">
                <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-6">
                    <div className="max-w-7xl mx-auto">

                        <div className="flex justify-center gap-6 mb-8">
                            <a
                                href="https://github.com/TpLink777"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 text-slate-400 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/stiven-g%C3%B3mez-9b73a5261/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:stivengomezmazo7@gmail.com?subject=Consulta desde portfolio&body=Hola Stiven, me gustaría contactarte.."
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 text-slate-400 hover:bg-rose-600 hover:text-white transition-all duration-300 hover:scale-110"
                                aria-label="Enviar correo electrónico"
                                title="Enviar correo"
                            >
                                <Mail size={20} />
                            </a>
                        </div>

                        <div className="text-center space-y-2">
                            <p className="text-slate-400">
                                Diseñado y Desarrollado por{' '}
                                <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                                Stiven Gomez Mazo
                                </span>
                            </p>
                            <p className="text-slate-500 text-sm">
                                © 2025 Todos los derechos reservados
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
