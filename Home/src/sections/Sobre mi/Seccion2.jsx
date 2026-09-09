import React, { useEffect, useRef, useState } from 'react'
import { Award, BrainCircuit, Languages, Target } from 'lucide-react'

const Seccion2 = () => {
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
        <>
            <section className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden' ref={sectionRef}>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-accent/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-accent/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl"></div>
                </div>

                <div className='max-w-7xl mx-auto w-full relative z-10'>
                    <div className='flex flex-col items-center gap-12 md:gap-16'>

                        <div className={`text-center space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <div className="inline-flex items-center gap-2 px-4 mt-10 py-2 bg-linear-to-r from-cyan-accent/10 to-cyan-accent/10 border border-cyan-accent/20 rounded-full">
                                <Target size={16} className="text-cyan-accent" />
                                <span className="text-cyan-accent text-sm font-medium">Mi Visión</span>
                            </div>

                            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white'>
                                Objetivos & <span className="gradient-text">Metas</span>
                            </h2>

                            <p className='text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed'>
                                Uno de mis objetivos es seguir creciendo como desarrollador, aprendiendo nuevas tecnologías y contribuyendo a proyectos que marquen la diferencia.
                            </p>
                        </div>

                        <div className={`w-full max-w-5xl ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12'>
                                Algunas metas a <span className="gradient-text">corto plazo</span>
                            </h3>

                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>

                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-cyan-accent via-cyan-accent to-cyan-accent rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                                    <div className="relative bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur-xl border-2 border-cyan-accent/30 rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:border-cyan-accent/60 hover:shadow-2xl hover:shadow-cyan-accent/20">
                                        <div className="flex flex-col items-center text-center space-y-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-cyan-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-5 bg-linear-to-br from-cyan-accent/20 to-navy-light/20 rounded-2xl border border-cyan-accent/30 group-hover:border-cyan-accent/50 group-hover:scale-110 transition-all duration-500">
                                                    <Languages className='text-cyan-accent w-12 h-12 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>
                                            <h4 className="text-2xl font-bold text-white group-hover:text-cyan-accent transition-colors duration-500">
                                                Aprender inglés
                                            </h4>
                                            <div className="h-1 w-0 bg-linear-to-r from-cyan-accent to-navy-light rounded-full group-hover:w-full transition-all duration-700"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-cyan-accent via-cyan-accent to-cyan-accent rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                                    <div className="relative bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur-xl border-2 border-cyan-accent/30 rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:border-cyan-accent/60 hover:shadow-2xl hover:shadow-cyan-accent/20">
                                        <div className="flex flex-col items-center text-center space-y-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-cyan-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-5 bg-linear-to-br from-cyan-accent/20 to-navy-light/20 rounded-2xl border border-cyan-accent/30 group-hover:border-cyan-accent/50 group-hover:scale-110 transition-all duration-500">
                                                    <Award className='text-cyan-accent w-12 h-12 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>
                                            <h4 className="text-2xl font-bold text-white group-hover:text-cyan-accent transition-colors duration-500">
                                                Conseguir un empleo estable
                                            </h4>
                                            <div className="h-1 w-0 bg-linear-to-r from-cyan-accent to-navy-light rounded-full group-hover:w-full transition-all duration-700"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-cyan-accent via-cyan-accent to-cyan-accent rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                                    <div className="relative bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur-xl border-2 border-cyan-accent/30 rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:border-cyan-accent/60 hover:shadow-2xl hover:shadow-cyan-accent/20">
                                        <div className="flex flex-col items-center text-center space-y-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-cyan-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-5 bg-linear-to-br from-cyan-accent/20 to-navy-light/20 rounded-2xl border border-cyan-accent/30 group-hover:border-cyan-accent/50 group-hover:scale-110 transition-all duration-500">
                                                    <BrainCircuit className='text-cyan-accent w-12 h-12 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>
                                            <h4 className="text-2xl font-bold text-white group-hover:text-cyan-accent transition-colors duration-500">
                                                Seguir aprendiendo día tras día
                                            </h4>
                                            <div className="h-1 w-0 bg-linear-to-r from-cyan-accent to-navy-light rounded-full group-hover:w-full transition-all duration-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Seccion2
