import React from 'react'
import { Award, BrainCircuit, Languages, Target } from 'lucide-react'

const Seccion2 = () => {
    return (
        <>
            <section className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden'>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className='max-w-7xl mx-auto w-full relative z-10'>
                    <div className='flex flex-col items-center gap-12 md:gap-16'>

                        <div className="text-center space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 mt-10 py-2 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full">
                                <Target size={16} className="text-cyan-400" />
                                <span className="text-cyan-400 text-sm font-medium">Mi Visión</span>
                            </div>

                            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white'>
                                Objetivos & <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Metas</span>
                            </h2>

                            <p className='text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed'>
                                Uno de mis objetivos es seguir creciendo como desarrollador, aprendiendo nuevas tecnologías y contribuyendo a proyectos que marquen la diferencia.
                            </p>
                        </div>

                        <div className="w-full max-w-5xl">
                            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12'>
                                Algunas metas a <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">corto plazo</span>
                            </h3>

                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>


                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>

                                    <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20">

                                        <div className="flex flex-col items-center text-center space-y-6">

                                            <div className="relative">
                                                <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-5 bg-linear-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl border border-cyan-500/30 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-500">
                                                    <Languages className='text-cyan-400 w-12 h-12 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>


                                            <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500">
                                                Aprender inglés
                                            </h4>


                                            <div className="h-1 w-0 bg-linear-to-r from-cyan-400 to-cyan-600 rounded-full group-hover:w-full transition-all duration-700"></div>
                                        </div>
                                    </div>
                                </div>


                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-blue-400 via-blue-500 to-blue-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>

                                    <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 border-blue-500/30 rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20">

                                        <div className="flex flex-col items-center text-center space-y-6">

                                            <div className="relative">
                                                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-5 bg-linear-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/30 group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-500">
                                                    <Award className='text-blue-400 w-12 h-12 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>


                                            <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">
                                                Consolidar mis estudios
                                            </h4>

                                            <div className="h-1 w-0 bg-linear-to-r from-blue-400 to-blue-600 rounded-full group-hover:w-full transition-all duration-700"></div>
                                        </div>
                                    </div>
                                </div>


                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-purple-400 via-purple-500 to-purple-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>

                                    <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-8 h-full hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20">

                                        <div className="flex flex-col items-center text-center space-y-6">

                                            <div className="relative">
                                                <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                                <div className="relative p-5 bg-linear-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/30 group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-500">
                                                    <BrainCircuit className='text-purple-400 w-12 h-12 group-hover:scale-110 transition-transform duration-500' />
                                                </div>
                                            </div>

                                            <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-500">
                                                Seguir aprendiendo día tras día
                                            </h4>


                                            <div className="h-1 w-0 bg-linear-to-r from-purple-400 to-purple-600 rounded-full group-hover:w-full transition-all duration-700"></div>
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
