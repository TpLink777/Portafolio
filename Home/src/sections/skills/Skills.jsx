import React from 'react'
import { Code2, Lightbulb, Sparkles } from 'lucide-react'
import data from '../../data';


const Skills = () => {

    return (
        <div className="min-h-screen py-20 px-6 relative overflow-hidden">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full mb-6">
                        <Sparkles size={16} className="text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-medium">Mis Capacidades</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Habilidades & <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Tecnologías</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Herramientas y habilidades que estoy desarrollando para crear soluciones digitales innovadoras y efectivas
                    </p>
                </div>


                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800/50 shadow-2xl p-8">
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-800/50">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                    <div className="relative w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <Lightbulb size={28} className="text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Habilidades</h3>
                                    <p className="text-slate-400 text-sm">Soft Skills</p>
                                </div>
                            </div>

                            <div className="space-y-5">
                                {data.habilidades.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-9 h-9 rounded-lg bg-linear-to-br ${skill.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                                        <Icon size={18} className="text-white" />
                                                    </div>
                                                    <span className="text-slate-200 font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                                                        {skill.nombre}
                                                    </span>
                                                </div>
                                                <span className="text-cyan-400 font-bold text-base tabular-nums">
                                                    {skill.porcentaje}%
                                                </span>
                                            </div>

                                            <div className="relative h-2 bg-slate-900/60 rounded-full overflow-hidden shadow-inner">
                                                <div
                                                    className={`absolute inset-0 bg-linear-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                                    style={{ width: `${skill.porcentaje}%` }}
                                                >
                                                    <div className="absolute inset-0 bg-linear-to-b from-white/30 to-transparent rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800/50 shadow-2xl p-8">
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-800/50">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                    <div className="relative w-14 h-14 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <Code2 size={28} className="text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Tecnologías</h3>
                                    <p className="text-slate-400 text-sm">Tech Stack</p>
                                </div>
                            </div>

                            <div className="space-y-5">
                                {data.tecnologias.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="group p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-9 h-9 rounded-lg bg-linear-to-br ${tech.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                                        <Icon size={18} className="text-white" />
                                                    </div>
                                                    <span className="text-slate-200 font-semibold text-sm group-hover:text-purple-400 transition-colors">
                                                        {tech.nombre}
                                                    </span>
                                                </div>
                                                <span className="text-purple-400 font-bold text-base tabular-nums">
                                                    {tech.porcentaje}%
                                                </span>
                                            </div>

                                            <div className="relative h-2 bg-slate-900/60 rounded-full overflow-hidden shadow-inner">
                                                <div
                                                    className={`absolute inset-0 bg-linear-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                                                    style={{ width: `${tech.porcentaje}%` }}
                                                >
                                                    <div className="absolute inset-0 bg-linear-to-b from-white/30 to-transparent rounded-full"></div>
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
