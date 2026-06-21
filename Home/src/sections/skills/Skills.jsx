import React, { useEffect, useRef, useState } from 'react'
import { Code2, Lightbulb, Sparkles } from 'lucide-react'
import data from '../../data';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div id="skills" className="min-h-screen py-24 px-6 relative overflow-hidden" ref={sectionRef}>

            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/80 border border-zinc-700/50 rounded-full mb-6 backdrop-blur-sm shadow-lg shadow-black/20">
                        <Sparkles size={16} className="text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-semibold tracking-wide">Mis Capacidades</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Habilidades & <span className="bg-linear-to-r from-emerald-400 via-teal-500 to-emerald-600 bg-clip-text text-transparent">Tecnologías</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Herramientas y habilidades que estoy perfeccionando para crear soluciones digitales excepcionales
                    </p>
                </div>


                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        
                        {/* Soft Skills Column */}
                        <div className={`bg-zinc-900/40 backdrop-blur-xl rounded-3xl border border-zinc-800/60 shadow-2xl p-8 hover:border-zinc-700/80 transition-colors duration-500 ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
                            <div className="flex items-center gap-5 mb-8 pb-6 border-b border-zinc-800/80">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-linear-to-br from-emerald-400 to-teal-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                                    <div className="relative w-16 h-16 bg-linear-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-emerald-500/50 transition-colors duration-500">
                                        <Lightbulb size={28} className="text-emerald-400 group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
                                    <p className="text-zinc-400 text-sm mt-1">Habilidades interpersonales</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {data.habilidades.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group relative p-5 rounded-2xl bg-zinc-800/20 hover:bg-zinc-800/50 border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-md group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300">
                                                        <Icon size={18} className="text-zinc-300 group-hover:text-emerald-400 transition-colors duration-300" />
                                                    </div>
                                                    <span className="text-zinc-200 font-medium group-hover:text-white transition-colors duration-300">
                                                        {skill.nombre}
                                                    </span>
                                                </div>
                                                <span className="text-zinc-400 font-mono font-medium text-sm group-hover:text-emerald-400 transition-colors duration-300">
                                                    {skill.porcentaje}%
                                                </span>
                                            </div>

                                            <div className="relative h-2.5 bg-zinc-900/80 rounded-full overflow-hidden shadow-inner border border-zinc-800">
                                                <div
                                                    className={`absolute top-0 left-0 bottom-0 bg-linear-to-r ${skill.color} rounded-full transition-all duration-[1500ms] ease-out flex justify-end`}
                                                    style={{ width: isVisible ? `${skill.porcentaje}%` : '0%' }}
                                                >
                                                    <div className="w-4 h-full bg-white/20 blur-[2px]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Tech Stack Column */}
                        <div className={`bg-zinc-900/40 backdrop-blur-xl rounded-3xl border border-zinc-800/60 shadow-2xl p-8 hover:border-zinc-700/80 transition-colors duration-500 ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
                            <div className="flex items-center gap-5 mb-8 pb-6 border-b border-zinc-800/80">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                                    <div className="relative w-16 h-16 bg-linear-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-emerald-500/50 transition-colors duration-500">
                                        <Code2 size={28} className="text-emerald-400 group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
                                    <p className="text-zinc-400 text-sm mt-1">Tecnologías de desarrollo</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {data.tecnologias.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group relative p-5 rounded-2xl bg-zinc-800/20 hover:bg-zinc-800/50 border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-md group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300">
                                                        <Icon size={18} className="text-zinc-300 group-hover:text-emerald-400 transition-colors duration-300" />
                                                    </div>
                                                    <span className="text-zinc-200 font-medium group-hover:text-white transition-colors duration-300">
                                                        {tech.nombre}
                                                    </span>
                                                </div>
                                                <span className="text-zinc-400 font-mono font-medium text-sm group-hover:text-emerald-400 transition-colors duration-300">
                                                    {tech.porcentaje}%
                                                </span>
                                            </div>

                                            <div className="relative h-2.5 bg-zinc-900/80 rounded-full overflow-hidden shadow-inner border border-zinc-800">
                                                <div
                                                    className={`absolute top-0 left-0 bottom-0 bg-linear-to-r ${tech.color} rounded-full transition-all duration-[1500ms] ease-out flex justify-end`}
                                                    style={{ width: isVisible ? `${tech.porcentaje}%` : '0%' }}
                                                >
                                                    <div className="w-4 h-full bg-white/20 blur-[2px]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills
