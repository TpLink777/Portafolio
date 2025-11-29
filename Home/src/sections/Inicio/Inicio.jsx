import React from 'react'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import SimpleParallax from "simple-parallax-js";

const Inicio = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-35 md:pt-15 lg:pt-12">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 md:order-1">
                            <div className="space-y-2 mt-10">
                                <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                                    <p className="text-cyan-400 text-sm font-medium">
                                        Disponible
                                    </p>
                                </div>
                                <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                                    Hola, soy
                                    <br />
                                    <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                        Stiven Gomez Mazo
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-300 font-medium">
                                    Desarrollador Full Stack
                                </p>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                                Estudiante de Análisis y Desarrollo de Software,
                                apasionado por crear soluciones tecnológicas innovadoras y eficientes
                                que contribuyan directamente al crecimiento y éxito de las empresas.
                                Me motiva el aprendizaje constante y disfruto enfrentar
                                nuevos retos para ofrecer resultados de alto impacto.
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/TpLink777"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800/80 text-slate-400 hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/stiven-g%C3%B3mez-9b73a5261/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800/80 text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="mailto:stivengomezmazo7@gmail.com?subject=Consulta desde portfolio&body=Hola Stiven, me gustaría contactarte.."
                                    className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800/80 text-slate-400 hover:bg-rose-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                    aria-label="Enviar correo electrónico"
                                    title="Enviar correo"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                            <div className="pt-2">
                                <button className="group px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-md hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3 outline-none focus:ring-4 focus:ring-cyan-300 relative overflow-hidden">
                                    Descargar CV
                                    <ArrowRight size={20} className=" group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center order-1 md:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-full border border-cyan-500/10"></div>
                                <div className="absolute -inset-8 rounded-full border border-blue-500/10"></div>
                                <div className="relative w-72 h-72 md:w-96 md:h-96">
                                    <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                                        <img
                                            src="/src/assets/img/Yo_v3.jpg"
                                            alt="Foto de perfil"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio
