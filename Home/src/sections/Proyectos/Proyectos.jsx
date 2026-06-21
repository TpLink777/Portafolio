import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code2, X } from 'lucide-react';
import data from '../../data'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Proyectos = () => {
    const [selectedProject, setSelectedProject] = useState(null);
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

    // Prevent body scroll when project modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedProject]);

    return (
        <section id="proyectos" className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden py-24 bg-zinc-950' ref={sectionRef}>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
            </div>

            <div className='max-w-7xl mx-auto w-full relative z-10'>

                <div className={`text-center space-y-6 mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/80 border border-zinc-700/50 rounded-full backdrop-blur-sm shadow-lg shadow-black/20">
                        <Code2 size={18} className="text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-semibold tracking-wide">Mi Trabajo</span>
                    </div>

                    <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight'>
                        Proyectos <span className="bg-linear-to-r from-emerald-400 via-teal-500 to-emerald-600 bg-clip-text text-transparent">Destacados</span>
                    </h2>

                    <p className='text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed'>
                        Una selección de proyectos en los que he trabajado, demostrando mis habilidades en desarrollo full-stack
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.proyectos.map((proyecto, index) => {
                        const colors = data.getColorClasses(proyecto.color);

                        return (
                            <div
                                key={proyecto.id}
                                className={`group relative cursor-pointer h-full flex flex-col ${isVisible && !selectedProject ? 'animate-fade-in-up' : selectedProject ? '' : 'opacity-0'}`}
                                style={{ animationDelay: `${200 + (index * 150)}ms` }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedProject(proyecto.id);
                                }}
                            >
                                <div className={`absolute -inset-1 bg-linear-to-r ${colors.glow} rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700`}/>

                                <div className={`relative flex flex-col h-full bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 group-hover:${colors.border} rounded-3xl overflow-hidden group-hover:-tranzinc-y-2 transition-all duration-500 hover:shadow-2xl ${colors.shadow}`}>

                                    <div className="relative h-64 overflow-hidden bg-zinc-950">
                                        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent z-10 pointer-events-none"></div>

                                        <Swiper
                                            modules={[Pagination, Autoplay]}
                                            pagination={{
                                                clickable: true,
                                                bulletClass: 'swiper-pagination-bullet !bg-zinc-600',
                                                bulletActiveClass: 'swiper-pagination-bullet-active !bg-emerald-400'
                                            }}
                                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            loop={true}
                                            className="h-full"
                                        >
                                            {proyecto.imagen.map((imgSrc, imgIndex) => (
                                                <SwiperSlide key={imgIndex}>
                                                    <div className="w-full h-full flex items-center justify-center bg-zinc-950">
                                                        <img
                                                            src={imgSrc}
                                                            alt={`${proyecto.titulo} - vista ${imgIndex + 1}`}
                                                            loading="lazy"
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

                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className={`text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:to-teal-500 transition-all duration-300`}>
                                            {proyecto.titulo}
                                        </h3>
                                        
                                        <p className="text-zinc-400 text-sm line-clamp-3 mb-6 flex-grow">
                                            {proyecto.descripcion}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500 group-hover:text-emerald-400 transition-colors duration-300 mt-auto">
                                            <span>Ver detalles del proyecto</span>
                                            <ExternalLink size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div 
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-zinc-950/90 backdrop-blur-md p-4 animate-fade-in"
                    onClick={() => setSelectedProject(null)}
                >
                    {data.proyectos
                        .filter((p) => p.id === selectedProject)
                        .map((proyecto) => {
                            const colors = data.getColorClasses(proyecto.color);
                            
                            return (
                                <div
                                    key={proyecto.id}
                                    className="bg-zinc-900 border border-zinc-700 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-scale-in shadow-2xl shadow-black/50 custom-scrollbar"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-zinc-800/80 border border-zinc-700 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 group"
                                    >
                                        <X size={20} className="text-zinc-400 group-hover:text-emerald-400 group-hover:rotate-90 transition-all" />
                                    </button>

                                    <div className="p-8 md:p-10">
                                        <h3 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-6 pr-8">
                                            {proyecto.titulo}
                                        </h3>
                                        
                                        <div className="mb-8 rounded-2xl overflow-hidden border border-zinc-700/50 bg-zinc-950">
                                            <Swiper
                                                modules={[Pagination, Autoplay]}
                                                pagination={{ clickable: true }}
                                                autoplay={{ delay: 3000 }}
                                                spaceBetween={0}
                                                slidesPerView={1}
                                                loop={true}
                                                className="h-64 md:h-96"
                                            >
                                                {proyecto.imagen.map((imgSrc, imgIndex) => (
                                                    <SwiperSlide key={imgIndex}>
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <img
                                                                src={imgSrc}
                                                                alt={`${proyecto.titulo} screenshot ${imgIndex}`}
                                                                className="w-full h-full object-contain"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>

                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-xl font-semibold text-white mb-3">Sobre el proyecto</h4>
                                                <p className="text-zinc-300 leading-relaxed">
                                                    {proyecto.descripcion}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-xl font-semibold text-white mb-4">Tecnologías utilizadas</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {proyecto.tecnologias.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${colors.badge} transition-all`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-zinc-800/80">
                                                <a
                                                    href={proyecto.repositorio}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-xl font-semibold transition-all duration-300 ${colors.button} hover:-tranzinc-y-1`}
                                                >
                                                    <Github size={20} />
                                                    <span>Ver Código Fuente</span>
                                                </a>

                                                <a
                                                    href={proyecto.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:-tranzinc-y-1`}
                                                >
                                                    <ExternalLink size={20} />
                                                    <span>Visitar Sitio Web</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            )}
        </section>
    );
};

export default Proyectos;
