import React from 'react'
import { GraduationCap, Rocket, Users, Sparkles } from 'lucide-react';

const Experiencia = () => {
    return (
        <>
            <div className="w-full max-w-6xl mx-auto py-20">

                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full mb-6">
                        <Sparkles size={16} className="text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-medium">Mi Experiencia</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Experiencia{" "}
                        <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            En Proyectos
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Trayectoria formativa y desarrollo de proyectos que reflejan mi crecimiento profesional.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-400 via-blue-500 to-purple-600 opacity-80"></div>

                    <div className="space-y-12">


                        <div className="relative pl-24">
                            <div className="absolute left-0 w-16 h-16 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl z-10">
                                <GraduationCap size={28} className="text-white" />
                            </div>

                            <div className="group">
                                <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
                                    <span className="text-cyan-400 text-sm font-semibold">Actualidad</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-500 transition-colors">
                                    Etapa Formativa
                                </h3>

                                <p className="text-blue-400 font-semibold mb-4 text-lg">
                                    Análisis y Desarrollo de Software - SENA
                                </p>

                                <p className="text-slate-300 leading-relaxed text-base max-w-3xl pr-5">
                                    Actualmente me encuentro en una etapa de formación intensiva donde he desarrollado
                                    múltiples proyectos que me han permitido consolidar habilidades técnicas y blandas
                                    fundamentales para el desarrollo de software profesional.
                                </p>
                            </div>
                        </div>

                        <div className="relative pl-24">
                            <div className="absolute left-0 w-16 h-16 rounded-xl bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-xl z-10">
                                <Rocket size={28} className="text-white" />
                            </div>

                            <div className="group">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-500 transition-colors">
                                    Desarrollo de Proyectos Formativos
                                </h3>

                                <p className="text-slate-300 leading-relaxed mb-6 text-base max-w-3xl pr-5">
                                    He liderado y participado en el desarrollo de aplicaciones web full-stack utilizando
                                    tecnologías modernas como React, Node.js, Express y bases de datos relacionales.
                                    Estos proyectos me han permitido:
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 max-w-4xl pr-5">

                                    <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/30 border border-slate-800/40 hover:border-cyan-500/50 transition-all">
                                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                                        <span className="text-slate-300">Implementar arquitecturas escalables siguiendo mejores prácticas.</span>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/30 border border-slate-800/40 hover:border-purple-500/50 transition-all">
                                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                                        <span className="text-slate-300">Gestionar despliegues en plataformas cloud usando Docker.</span>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/30 border border-slate-800/40 hover:border-blue-500/50 transition-all">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                                        <span className="text-slate-300">Integrar APIs externas y sistemas de autenticación JWT.</span>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/30 border border-slate-800/40 hover:border-cyan-500/50 transition-all">
                                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                                        <span className="text-slate-300">Resolver desafíos técnicos mediante aprendizaje continuo.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative pl-24">
                            <div className="absolute left-0 w-16 h-16 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl z-10">
                                <Users size={28} className="text-white" />
                            </div>

                            <div className="group">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-500 transition-colors">
                                    Colaboración y Trabajo en Equipo
                                </h3>

                                <p className="text-slate-300 leading-relaxed text-base max-w-3xl pr-5">
                                    Experiencia trabajando en equipos multidisciplinarios utilizando metodologías ágiles,
                                    Git/GitHub y herramientas de gestión de proyectos. Desarrollé habilidades para comunicar
                                    ideas técnicas y contribuir efectivamente en entornos colaborativos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-16 p-6 rounded-2xl bg-linear-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 border border-cyan-400/20 backdrop-blur-sm">
                    <div className="flex items-center gap-8">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
                            <Rocket size={24} className="text-white" />
                        </div>

                        <p className="text-slate-200 text-base">
                            <span className="font-bold text-cyan-400 text-xl">Próximo paso:</span> Iniciando prácticas empresariales para aplicar estos conocimientos en entornos reales.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Experiencia
