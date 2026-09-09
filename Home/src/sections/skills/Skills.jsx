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
                    observer.disconnect();
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
        <div id="skills" className="py-16 px-6 relative overflow-hidden" ref={sectionRef}>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/80 border border-zinc-700/50 rounded-full mb-4 backdrop-blur-sm shadow-lg shadow-black/20">
                        <Sparkles size={16} className="text-cyan-accent" />
                        <span className="text-cyan-accent text-sm font-semibold tracking-wide">Mis Capacidades</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        Habilidades & <span className="gradient-text">Tecnologías</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Herramientas y habilidades que estoy perfeccionando para crear soluciones digitales excepcionales
                    </p>
                </div>

                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Soft Skills Column */}
                        <div className={`bg-zinc-900/40 backdrop-blur-xl rounded-3xl border border-zinc-800/60 shadow-2xl p-6 hover:border-zinc-700/80 transition-colors duration-500 ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
                            <div className="flex items-center gap-5 mb-6 pb-4 border-b border-zinc-800/80">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-linear-to-br from-cyan-accent to-navy-light rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                                    <div className="relative w-14 h-14 bg-linear-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-cyan-accent/50 transition-colors duration-500">
                                        <Lightbulb size={24} className="text-cyan-accent group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
                                    <p className="text-zinc-400 text-sm mt-1">Habilidades interpersonales</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {data.habilidades.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group relative p-3 rounded-xl bg-zinc-800/20 hover:bg-zinc-800/50 border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-md group-hover:border-cyan-accent/50 group-hover:bg-cyan-accent/10 transition-all duration-300">
                                                        <Icon size={16} className="text-zinc-300 group-hover:text-cyan-accent transition-colors duration-300" />
                                                    </div>
                                                    <span className="text-zinc-200 font-medium group-hover:text-white transition-colors duration-300">
                                                        {skill.nombre}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Tech Stack Column */}
                        <div className={`bg-zinc-900/40 backdrop-blur-xl rounded-3xl border border-zinc-800/60 shadow-2xl p-6 hover:border-zinc-700/80 transition-colors duration-500 ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
                            <div className="flex items-center gap-5 mb-6 pb-4 border-b border-zinc-800/80">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-linear-to-br from-cyan-accent to-navy-light rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                                    <div className="relative w-14 h-14 bg-linear-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-cyan-accent/50 transition-colors duration-500">
                                        <Code2 size={24} className="text-cyan-accent group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
                                    <p className="text-zinc-400 text-sm mt-1">Tecnologías de desarrollo</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {data.tecnologias.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group relative p-3 rounded-xl bg-zinc-800/20 hover:bg-zinc-800/50 border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-md group-hover:border-cyan-accent/50 group-hover:bg-cyan-accent/10 transition-all duration-300">
                                                        <Icon size={16} className="text-zinc-300 group-hover:text-cyan-accent transition-colors duration-300" />
                                                    </div>
                                                    <span className="text-zinc-200 font-medium group-hover:text-white transition-colors duration-300">
                                                        {tech.nombre}
                                                    </span>
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