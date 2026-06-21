import React, { useEffect, useRef, useState } from 'react'
import { Heart, Lightbulb, Shield } from 'lucide-react'

const Seccion1 = () => {
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
            <section className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden mt-20' ref={sectionRef}>

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -tranzinc-x-1/2 -tranzinc-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className='max-w-7xl mx-auto w-full relative z-10'>
                    <div className='flex flex-col items-center gap-16 md:gap-20'>

                        <div className={`text-center space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <div className="inline-flex items-center gap-2 mt-10 px-4 py-2 bg-linear-to-r from-emerald-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-full">
                                <span className="text-emerald-400 text-sm font-medium">
                                    Sobre mí
                                </span>
                            </div>
                            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                                Hola, esto te podría
                                <br />
                                <span className="bg-linear-to-r from-emerald-400 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                                    interesar sobre mí!
                                </span>
                            </h1>
                        </div>

                        <div className={`group relative w-full max-w-5xl ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                            <div className='absolute -inset-1 bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500'></div>
                            <div className='relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 sm:p-8 md:p-10 hover:scale-[1.02] transition-transform duration-300'>
                                <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12'>

                                    <div className='relative shrink-0'>
                                        <div className="absolute -inset-4 rounded-2xl border border-emerald-500/10"></div>
                                        <div className="absolute -inset-8 rounded-2xl border border-teal-500/10"></div>
                                        <div className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80'>
                                            <div className="absolute inset-0 bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-2xl blur-xl opacity-30"></div>
                                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-zinc-800 shadow-2xl">
                                                <img
                                                    src="/Yo_v2.jpg"
                                                    alt="imagen personal"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-center gap-4 px-4'>
                                        <h2 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold'>
                                            Un poco sobre mí!
                                        </h2>
                                        <p className='text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed'>
                                            Mi nombre es Stiven Gomez Mazo,
                                            actualmente soy un estudiante de análisis y desarrollo de software
                                            apasionado por construir ideas increíbles, y plasmar problemas en soluciones impecables.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`w-full max-w-6xl space-y-12 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white">
                                ¿Qué me define?
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">

                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-emerald-400 via-emerald-500 to-emerald-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-700 animate-pulse"></div>
                                    <div className="relative bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur-xl border-2 border-emerald-500/30 rounded-3xl p-8 h-full hover:scale-105 hover:-tranzinc-y-3 transition-all duration-500 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20">
                                        <div className="flex flex-col items-start space-y-6 mb-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-4 bg-linear-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl border border-emerald-500/30 group-hover:border-emerald-500/50 group-hover:scale-110 transition-all duration-500">
                                                    <Heart className='text-emerald-400 w-8 h-8 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-500">
                                                Creatividad
                                            </h3>
                                        </div>
                                        <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                                            Ideas que marcan la diferencia y transforman desafíos en oportunidades únicas.
                                        </p>
                                        <div className="mt-6 h-1 w-0 bg-linear-to-r from-emerald-400 to-emerald-600 rounded-full group-hover:w-full transition-all duration-700"></div>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-teal-400 via-teal-500 to-teal-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-700 animate-pulse"></div>
                                    <div className="relative bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur-xl border-2 border-teal-500/30 rounded-3xl p-8 h-full hover:scale-105 hover:-tranzinc-y-3 transition-all duration-500 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/20">
                                        <div className="flex flex-col items-start space-y-6 mb-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-4 bg-linear-to-br from-teal-500/20 to-teal-600/20 rounded-2xl border border-teal-500/30 group-hover:border-teal-500/50 group-hover:scale-110 transition-all duration-500">
                                                    <Lightbulb className='text-teal-400 w-8 h-8 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-bold text-white group-hover:text-teal-400 transition-colors duration-500">
                                                Compromiso
                                            </h3>
                                        </div>
                                        <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                                            Siempre al 100% en cada proyecto, entregando resultados excepcionales.
                                        </p>
                                        <div className="mt-6 h-1 w-0 bg-linear-to-r from-teal-400 to-teal-600 rounded-full group-hover:w-full transition-all duration-700"></div>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-emerald-400 via-emerald-500 to-emerald-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-700 animate-pulse"></div>
                                    <div className="relative bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur-xl border-2 border-emerald-500/30 rounded-3xl p-8 h-full hover:scale-105 hover:-tranzinc-y-3 transition-all duration-500 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20">
                                        <div className="flex flex-col items-start space-y-6 mb-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-4 bg-linear-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl border border-emerald-500/30 group-hover:border-emerald-500/50 group-hover:scale-110 transition-all duration-500">
                                                    <Shield className='text-emerald-400 w-8 h-8 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-500">
                                                Responsabilidad
                                            </h3>
                                        </div>
                                        <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                                            Cumplo lo que prometo, cuando lo prometo, con la máxima calidad.
                                        </p>
                                        <div className="mt-6 h-1 w-0 bg-linear-to-r from-emerald-400 to-emerald-600 rounded-full group-hover:w-full transition-all duration-700"></div>
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

export default Seccion1
