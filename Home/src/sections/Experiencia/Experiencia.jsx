import React, { useEffect, useRef, useState } from 'react'
import { GraduationCap, Rocket, Users, Sparkles } from 'lucide-react';

const Experiencia = () => {
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
        <div className="w-full max-w-6xl mx-auto py-24 px-6" ref={sectionRef}>

            <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/80 border border-zinc-700/50 rounded-full mb-6 shadow-lg shadow-black/20">
                    <Sparkles size={16} className="text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-semibold tracking-wide">Mi Experiencia</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Experiencia{" "}
                    <span className="bg-linear-to-r from-emerald-400 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                        En Proyectos
                    </span>
                </h2>

                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                    Trayectoria formativa y desarrollo de proyectos que reflejan mi crecimiento profesional y dedicación.
                </p>
            </div>

            <div className="relative">

                <div className={`absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-400 via-teal-500 to-emerald-600 opacity-30 ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}></div>

                <div className="space-y-16">


                    <div className={`relative pl-20 md:pl-32 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
                        <div className="absolute left-0 md:left-4 top-0 w-16 h-16 rounded-2xl bg-linear-to-br from-zinc-800 to-zinc-900 border border-emerald-500/30 flex items-center justify-center shadow-xl z-10">
                            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-md"></div>
                            <GraduationCap size={28} className="text-emerald-400 relative z-10" />
                        </div>

                        <div className="group bg-zinc-900/40 border border-zinc-800/60 p-6 md:p-8 rounded-3xl hover:border-emerald-500/30 transition-all duration-300">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                                <span className="text-emerald-400 text-sm font-bold">Actualidad</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                Desarrollador FullStack
                            </h3>

                            <p className="text-teal-400 font-medium mb-4 text-lg">
                                Análisis y Desarrollo de Software - SENA
                            </p>

                            <p className="text-zinc-400 leading-relaxed text-base">
                                Actualmente culminé mi etapa productiva, donde tuve la oportunidad de aplicar mis conocimientos
                                en el desarrollo de software. Durante este proceso, participé en la creación de un
                                sistema de información para una organización de carácter social, enfocado en optimizar
                                sus procesos administrativos.
                            </p>
                        </div>
                    </div>


                    <div className={`relative pl-20 md:pl-32 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
                        <div className="absolute left-0 md:left-4 top-0 w-16 h-16 rounded-2xl bg-linear-to-br from-zinc-800 to-zinc-900 border border-teal-500/30 flex items-center justify-center shadow-xl z-10">
                            <div className="absolute inset-0 bg-teal-500/10 rounded-2xl blur-md"></div>
                            <Rocket size={28} className="text-teal-400 relative z-10" />
                        </div>

                        <div className="group bg-zinc-900/40 border border-zinc-800/60 p-6 md:p-8 rounded-3xl hover:border-teal-500/30 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                                Desarrollo de Proyectos Formativos
                            </h3>

                            <p className="text-zinc-400 leading-relaxed mb-6 text-base">
                                He liderado y participado en el desarrollo de aplicaciones web fullStack utilizando
                                tecnologías modernas como React, Node.js, Express y bases de datos relacionales.
                                Además, cuento con experiencia en herramientas y tecnologías como Python, Django, MySQL, Laravel,
                                Livewire, Git, GitHub y Docker. También he implementado soluciones con librerías y frameworks como
                                Knex, Sequelize, MUI y Vite en distintos proyectos.
                                Estos proyectos me han permitido:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/30 hover:border-emerald-500/40 transition-all group/item">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                    <span className="text-zinc-300 text-sm">Implementar arquitecturas escalables siguiendo mejores prácticas.</span>
                                </div>

                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/30 hover:border-emerald-500/40 transition-all group/item">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                    <span className="text-zinc-300 text-sm">Gestionar despliegues en plataformas cloud usando Docker.</span>
                                </div>

                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/30 hover:border-teal-500/40 transition-all group/item">
                                    <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                    <span className="text-zinc-300 text-sm">Integrar APIs externas y sistemas de autenticación JWT y OAuth 2.0.</span>
                                </div>

                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/30 hover:border-emerald-500/40 transition-all group/item">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                    <span className="text-zinc-300 text-sm">Resolver desafíos técnicos mediante aprendizaje continuo y autogestión.</span>
                                </div>

                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/30 hover:border-emerald-500/40 transition-all group/item">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                    <span className="text-zinc-300 text-sm">Desarrollar aplicaciones web fullStack utilizando tecnologías modernas como React, Node.js, Express y bases de datos relacionales.</span>
                                </div>

                                <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/30 hover:border-emerald-500/40 transition-all group/item">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                    <span className="text-zinc-300 text-sm">Liderar y participar en el desarrollo de aplicaciones web fullStack utilizando tecnologías modernas.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className={`relative pl-20 md:pl-32 ${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
                        <div className="absolute left-0 md:left-4 top-0 w-16 h-16 rounded-2xl bg-linear-to-br from-zinc-800 to-zinc-900 border border-emerald-500/30 flex items-center justify-center shadow-xl z-10">
                            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-md"></div>
                            <Users size={28} className="text-emerald-400 relative z-10" />
                        </div>

                        <div className="group bg-zinc-900/40 border border-zinc-800/60 p-6 md:p-8 rounded-3xl hover:border-emerald-500/30 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                                Colaboración y Trabajo en Equipo
                            </h3>

                            <p className="text-zinc-400 leading-relaxed text-base">
                                Experiencia trabajando en equipos multidisciplinarios utilizando metodologías ágiles,
                                Git/GitHub, Jira, Trello, ademas de metodos como gitflow y herramientas de gestión de proyectos. 
                                Desarrollé habilidades para comunicar ideas técnicas y contribuir efectivamente en entornos colaborativos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mt-20 p-8 rounded-3xl bg-linear-to-r from-zinc-900/80 via-zinc-800/80 to-zinc-900/80 border border-zinc-700/50 backdrop-blur-xl relative overflow-hidden group ${isVisible ? 'animate-fade-in-up delay-1000' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 via-teal-500/5 to-emerald-600/5 group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                        <Rocket size={28} className="text-white" />
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold text-white mb-2">Próximo paso</h4>
                        <p className="text-zinc-300 text-lg">
                          Conseguir una oportunidad laboral que me permita seguir creciendo profesionalmente y aprender de personas con experiencia, fortaleciendo continuamente mis habilidades como desarrollador.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiencia
