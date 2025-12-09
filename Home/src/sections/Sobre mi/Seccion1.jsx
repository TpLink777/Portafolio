import React from 'react'
import { Heart, Lightbulb, Shield } from 'lucide-react'

const Seccion1 = () => {
    return (
        <>
            <section className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden mt-20'>

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className='max-w-7xl mx-auto w-full relative z-10'>
                    <div className='flex flex-col items-center gap-16 md:gap-20'>


                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 mt-10 px-4 py-2 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full">
                                <span className="text-cyan-400 text-sm font-medium">
                                    Sobre mí
                                </span>
                            </div>
                            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                                Hola, esto te podría
                                <br />
                                <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    interesar sobre mí!
                                </span>
                            </h1>
                        </div>


                        <div className='group relative w-full max-w-5xl'>
                            <div className='absolute -inset-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500'></div>
                            <div className='relative bg-slate-900/80 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-6 sm:p-8 md:p-10 hover:scale-[1.02] transition-transform duration-300'>
                                <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12'>


                                    <div className='relative shrink-0'>
                                        <div className="absolute -inset-4 rounded-2xl border border-cyan-500/10"></div>
                                        <div className="absolute -inset-8 rounded-2xl border border-blue-500/10"></div>
                                        <div className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80'>
                                            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
                                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl">
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
                                        <p className='text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed'>
                                            Mi nombre es Stiven Gomez Mazo,
                                            actualmente soy un estudiante de análisis y desarrollo de software
                                            apasionado por construir ideas increíbles, y plasmar problemas en soluciones impecables.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full max-w-6xl space-y-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white">
                                ¿Qué me define?
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">


                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-700 animate-pulse"></div>

                                    <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20">

                                        <div className="flex flex-col items-start space-y-6 mb-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-4 bg-linear-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl border border-cyan-500/30 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-500">
                                                    <Heart className='text-cyan-400 w-8 h-8 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500">
                                                Creatividad
                                            </h3>
                                        </div>

                                        <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                                            Ideas que marcan la diferencia y transforman desafíos en oportunidades únicas.
                                        </p>

                                        <div className="mt-6 h-1 w-0 bg-linear-to-r from-cyan-400 to-cyan-600 rounded-full group-hover:w-full transition-all duration-700"></div>
                                    </div>
                                </div>


                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-700 animate-pulse"></div>

                                    <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 border-blue-500/30 rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20">

                                        <div className="flex flex-col items-start space-y-6 mb-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-4 bg-linear-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-500">
                                                    <Lightbulb className='text-blue-400 w-8 h-8 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">
                                                Compromiso
                                            </h3>
                                        </div>

                                        <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                                            Siempre al 100% en cada proyecto, entregando resultados excepcionales.
                                        </p>

                                        <div className="mt-6 h-1 w-0 bg-linear-to-r from-blue-400 to-blue-600 rounded-full group-hover:w-full transition-all duration-700"></div>
                                    </div>
                                </div>


                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-purple-400 via-purple-500 to-purple-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-700 animate-pulse"></div>

                                    <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20">

                                        <div className="flex flex-col items-start space-y-6 mb-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-4 bg-linear-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-500">
                                                    <Shield className='text-purple-400 w-8 h-8 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-500">
                                                Responsabilidad
                                            </h3>
                                        </div>

                                        <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                                            Cumplo lo que prometo, cuando lo prometo, con la máxima calidad.
                                        </p>

                                        <div className="mt-6 h-1 w-0 bg-linear-to-r from-purple-400 to-purple-600 rounded-full group-hover:w-full transition-all duration-700"></div>
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
