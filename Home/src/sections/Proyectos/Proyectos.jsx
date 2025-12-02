import React, { useState } from 'react';
import { Github, ExternalLink, Code2, X } from 'lucide-react';
import data from '../../data'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


const Proyectos = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden py-24 bg-slate-950'>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className='max-w-7xl mx-auto w-full relative z-10'>

                <div className="text-center space-y-6 mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                        <Code2 size={18} className="text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-semibold tracking-wide">Mi Trabajo</span>
                    </div>

                    <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight'>
                        Proyectos <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Destacados</span>
                    </h2>

                    <p className='text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed'>
                        Una selección de proyectos en los que he trabajado, demostrando mis habilidades en desarrollo full-stack
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {selectedProject
                        ? data.proyectos
                            .filter((proyecto) => proyecto.id === selectedProject)
                            .map((proyecto) => {
                                const colors = data.getColorClasses(proyecto.color);

                                return (
                                    <div
                                        key={proyecto.id}
                                        className="col-span-full max-w-3xl mx-auto w-full p-8 space-y-6 bg-linear-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 border-2 border-slate-700 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 shadow-2xl"
                                    >

                                        <div
                                            className="flex justify-end items-start cursor-pointer group"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedProject(null);
                                            }}
                                        >
                                            <div className="p-2 rounded-full bg-slate-800/50 border border-slate-700 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                                                <X
                                                    size={24}
                                                    className="text-slate-400 group-hover:text-cyan-400 group-hover:rotate-90 transition-all duration-300"
                                                />
                                            </div>
                                        </div>


                                        <h3 className="text-3xl font-bold  text-center bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                            {proyecto.titulo}
                                        </h3>


                                        <p className="text-slate-300 text-base leading-relaxed text-center px-4">
                                            {proyecto.descripcion}
                                        </p>


                                        <div className="flex flex-wrap gap-3 justify-center">
                                            {proyecto.tecnologias.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className={`px-4 py-2 text-sm font-semibold rounded-xl border ${colors.badge} transition-all duration-300 hover:scale-105`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 pt-6">
                                            <a
                                                href={proyecto.repositorio}
                                                onClick={(e) => e.stopPropagation()}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-slate-800/70 border-2 border-slate-700 text-slate-300 rounded-xl font-semibold transition-all duration-300 ${colors.button} hover:scale-105`}
                                            >
                                                <Github size={20} />
                                                <span>Repositorio</span>
                                            </a>

                                            <a
                                                href={proyecto.demo}
                                                onClick={(e) => e.stopPropagation()}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-slate-800/70 border-2 border-slate-700 text-slate-300 rounded-xl font-semibold transition-all duration-300 ${colors.button} hover:scale-105`}
                                            >
                                                <ExternalLink size={20} />
                                                <span>Demo</span>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        : data.proyectos.map((proyecto) => {
                            const colors = data.getColorClasses(proyecto.color);

                            return (
                                <div
                                    key={proyecto.id}
                                    className="group relative cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProject(proyecto.id);
                                    }}
                                >

                                    <div
                                        className={`absolute -inset-1 bg-linear-to-r ${colors.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700`}
                                    />


                                    <div
                                        className={`relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 ${colors.border} ${colors.hoverBorder} rounded-3xl overflow-hidden group-hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl ${colors.shadow}`}
                                    >

                                        <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none"></div>

                                            <Swiper
                                                modules={[Pagination, Autoplay]}
                                                pagination={{
                                                    clickable: true,
                                                    bulletClass: 'swiper-pagination-bullet !bg-slate-600',
                                                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-cyan-400'
                                                }}
                                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                                spaceBetween={0}
                                                slidesPerView={1}
                                                loop={true}
                                                className="h-full"
                                            >
                                                {proyecto.imagen.map((imgSrc, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div className="w-full h-full flex items-center justify-center bg-slate-950">
                                                            <img
                                                                src={imgSrc}
                                                                alt={`${proyecto.titulo}-${index}`}
                                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                                                onError={(e) => {
                                                                    e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80';
                                                                }}
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>

                                        <div className="p-8 space-y-4">
                                            <h3
                                                className={`text-2xl font-bold text-white text-center group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}
                                            >
                                                {proyecto.titulo}
                                            </h3>

                                            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                                                <span>Click para ver más detalles</span>
                                                <ExternalLink size={15} />
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
