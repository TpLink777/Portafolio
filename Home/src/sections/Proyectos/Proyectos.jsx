import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import data from '../../data'

const Proyectos = () => {

    return (
        <section className='h-screen flex items-center justify-center px-6 relative overflow-hidden py-20'>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className='max-w-7xl mx-auto w-full relative z-10'>

                <div className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full">
                        <Code2 size={16} className="text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-medium">Mi Trabajo</span>
                    </div>
                    
                    <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white'>
                        Proyectos <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Destacados</span>
                    </h2>
                    
                    <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
                        Una selección de proyectos en los que he trabajado, demostrando mis habilidades en desarrollo full-stack
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {data.proyectos.map((proyecto) => {
                        const colors = data.getColorClasses(proyecto.color);
                        
                        return (
                            <div key={proyecto.id} className="group relative">
                                <div className={`absolute -inset-1 bg-linear-to-r ${colors.glow} rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700`}></div>

                                <div className={`relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 ${colors.border} ${colors.hoverBorder} rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl ${colors.shadow}`}>
                                    

                                    <div className="relative h-48 sm:h-56 overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                                        <img 
                                            src={proyecto.imagen} 
                                            alt={proyecto.titulo}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>


                                    <div className="p-6 space-y-4">

                                        <h3 className={`text-2xl font-bold text-white ${colors.text} transition-colors duration-500`}>
                                            {proyecto.titulo}
                                        </h3>

                                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                                            {proyecto.descripcion}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {proyecto.tecnologias.map((tech, index) => (
                                                <span 
                                                    key={index}
                                                    className={`px-3 py-1 text-xs font-medium rounded-full border ${colors.badge} transition-all duration-300`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-3 pt-4">

                                            <a
                                                href={proyecto.repositorio}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 border-2 border-slate-700/50 text-slate-300 rounded-xl font-semibold transition-all duration-300 ${colors.button}`}
                                            >
                                                <Github size={18} />
                                                <span className="text-sm">Repositorio</span>
                                            </a>

                                            <a
                                                href={proyecto.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 border-2 border-slate-700/50 text-slate-300 rounded-xl font-semibold transition-all duration-300 ${colors.button}`}
                                            >
                                                <ExternalLink size={18} />
                                                <span className="text-sm">Demo</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Proyectos;
