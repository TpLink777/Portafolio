import React, { useState, useEffect } from 'react'
import { ArrowRight, Github, Linkedin, Mail, Code2, Database, Layout } from 'lucide-react';
import DownloadModal from '../../components/ui/DownloadModal';

const Inicio = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const fullText = "Desarrollador Full Stack";

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-32 pb-20 md:pt-20">

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -tranzinc-x-1/2 -tranzinc-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] opacity-50"></div>
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-700 rounded-full animate-fade-in-up backdrop-blur-sm">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <p className="text-zinc-300 text-sm font-medium">
                                        Disponible para trabajar
                                    </p>
                                </div>

                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up delay-100">
                                    Hola, soy
                                    <br />
                                    <span className="bg-linear-to-r from-emerald-400 via-teal-500 to-emerald-600 bg-clip-text text-transparent gradient-text-animated">
                                        Stiven Gomez
                                    </span>
                                </h1>

                                <h2 className="text-xl sm:text-2xl text-emerald-400 font-mono font-medium h-8 animate-fade-in-up delay-200">
                                    <span className="typing-cursor">{text}</span>
                                </h2>
                            </div>

                            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-300">
                                Apasionado por crear soluciones tecnológicas innovadoras y eficientes
                                que contribuyan directamente al crecimiento y éxito de las empresas.
                                Construyo aplicaciones web modernas de principio a fin.
                            </p>

                            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-400">
                                <a
                                    href="https://github.com/TpLink777"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-400 hover:bg-zinc-700 hover:text-white hover:border-zinc-600 transition-all duration-300 hover:-tranzinc-y-1 hover:shadow-lg shadow-black/20"
                                >
                                    <Github size={22} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/stiven-g%C3%B3mez-9b73a5261/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-400 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 hover:-tranzinc-y-1 hover:shadow-lg shadow-emerald-500/20"
                                >
                                    <Linkedin size={22} />
                                </a>
                                <a
                                    href="mailto:stivengomezmazo7@gmail.com"
                                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-400 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 hover:-tranzinc-y-1 hover:shadow-lg shadow-emerald-500/20"
                                >
                                    <Mail size={22} />
                                </a>
                            </div>

                            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-500">
                                <button className="group px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-600 rounded-xl font-semibold text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-3 relative overflow-hidden cursor-pointer hover:-tranzinc-y-1 w-full sm:w-auto justify-center"
                                    onClick={() => setOpen(true)}>
                                    <span className="relative z-10">Descargar CV</span>
                                    <ArrowRight size={20} className="group-hover:tranzinc-x-1 transition-transform duration-300 relative z-10" />
                                    <div className="absolute inset-0 bg-linear-to-r from-teal-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                                
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-800/50 animate-fade-in-up delay-600 mt-8">
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-white mb-1">3+</div>
                                    <div className="text-sm text-zinc-400 font-medium">Proyectos<br/>Completados</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-emerald-400 mb-1">9+</div>
                                    <div className="text-sm text-zinc-400 font-medium">Tecnologías<br/>Dominadas</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-emerald-400 mb-1">100%</div>
                                    <div className="text-sm text-zinc-400 font-medium">Compromiso &<br/>Dedicación</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
                            <div className="relative group perspective-1000">
                                <div className="absolute -inset-1 rounded-full bg-linear-to-r from-emerald-400 via-teal-500 to-emerald-600 opacity-30 group-hover:opacity-60 blur-xl transition-opacity duration-700 animate-pulse-glow"></div>
                                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
                                    <div className="absolute inset-0 rounded-full border-2 border-zinc-700/50 group-hover:border-emerald-500/50 transition-colors duration-500"></div>
                                    

                                    <div className="absolute top-10 -left-6 z-20 p-3 rounded-2xl bg-zinc-900/90 border border-zinc-700 shadow-xl backdrop-blur-md animate-float" style={{ animationDelay: '0s' }}>
                                        <Code2 className="text-emerald-400" size={24} />
                                    </div>
                                    <div className="absolute bottom-16 -right-4 z-20 p-3 rounded-2xl bg-zinc-900/90 border border-zinc-700 shadow-xl backdrop-blur-md animate-float" style={{ animationDelay: '-2s' }}>
                                        <Database className="text-emerald-400" size={24} />
                                    </div>
                                    <div className="absolute -top-4 right-12 z-20 p-3 rounded-2xl bg-zinc-900/90 border border-zinc-700 shadow-xl backdrop-blur-md animate-float" style={{ animationDelay: '-4s' }}>
                                        <Layout className="text-teal-400" size={24} />
                                    </div>
                                    
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-900 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                                        <img
                                            src="/Yo_v1.jpg"
                                            alt="Stiven Gomez - Desarrollador Full Stack"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {open && <DownloadModal onClose={() => setOpen(false)} />}
            </div>
        </>
    )
}

export default Inicio
