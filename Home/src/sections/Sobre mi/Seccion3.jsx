import React from 'react'
import data from '../../data'
import { Clock } from 'lucide-react'

const Seccion3 = () => {
    return (
        <>
            <section className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden py-20'>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className='max-w-7xl mx-auto w-full relative z-10'>
                    <div className='flex flex-col items-center gap-16'>

                        <div className="text-center space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full">
                                <Clock size={16} className="text-cyan-400" />
                                <span className="text-cyan-400 text-sm font-medium">Mi Recorrido</span>
                            </div>

                            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white'>
                                Timeline de mi <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">aprendizaje</span>
                            </h2>

                            <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
                                Un viaje continuo de crecimiento y desarrollo profesional
                            </p>
                        </div>


                        <div className="relative w-full max-w-6xl mt-12">

                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50 rounded-full"></div>

                            {data.timelineItems.map((item, index) => {
                                const colors = [
                                    { bg: 'from-cyan-500/20 to-cyan-600/20', border: 'border-cyan-500/30', hover: 'hover:border-cyan-500/60', shadow: 'hover:shadow-cyan-500/20', text: 'group-hover:text-cyan-400', dot: 'bg-cyan-500', glow: 'from-cyan-400 via-cyan-500 to-cyan-400', line: 'from-cyan-400 to-cyan-600' },
                                    { bg: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/30', hover: 'hover:border-blue-500/60', shadow: 'hover:shadow-blue-500/20', text: 'group-hover:text-blue-400', dot: 'bg-blue-500', glow: 'from-blue-400 via-blue-500 to-blue-400', line: 'from-blue-400 to-blue-600' },
                                    { bg: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-500/30', hover: 'hover:border-purple-500/60', shadow: 'hover:shadow-purple-500/20', text: 'group-hover:text-purple-400', dot: 'bg-purple-500', glow: 'from-purple-400 via-purple-500 to-purple-400', line: 'from-purple-400 to-purple-600' }
                                ];
                                const color = colors[index % 3];

                                return (
                                    <div key={index} className={`relative flex items-center mb-20 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>

                                        <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                            <div className="group relative">

                                                <div className={`absolute -inset-1 bg-linear-to-r ${color.glow} rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700`}></div>


                                                <div className={`relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 ${color.border} ${color.hover} rounded-3xl p-6 sm:p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl ${color.shadow}`}>

                                                    <div className={`inline-block px-3 py-1 bg-linear-to-r ${color.bg} border ${color.border} rounded-full mb-4`}>
                                                        <p className={`text-xs sm:text-sm font-medium ${color.text.replace('group-hover:', '')}`}>
                                                            {item.title}
                                                        </p>
                                                    </div>

                                                    <h3 className={`text-white font-bold text-xl sm:text-2xl mb-3 ${color.text} transition-colors duration-500`}>
                                                        {item.cardTitle || item.title}
                                                    </h3>


                                                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                                                        {item.cardDetailedText}
                                                    </p>

                                                    <div className={`mt-6 h-1 w-0 bg-linear-to-r ${color.line} rounded-full group-hover:w-full transition-all duration-700`}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
                                            <div className="relative">

                                                <div className={`absolute inset-0 ${color.dot} rounded-full blur-lg opacity-50 animate-pulse`}></div>

                                                <div className={`relative w-6 h-6 ${color.dot} rounded-full border-4 border-slate-900 shadow-lg transform group-hover:scale-125 transition-transform duration-500`}></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Seccion3
