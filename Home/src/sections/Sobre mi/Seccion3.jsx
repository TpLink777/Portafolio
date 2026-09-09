import React, { useEffect, useRef, useState } from 'react'
import data from '../../data'
import { Clock } from 'lucide-react'

const Seccion3 = () => {
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
        <section className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden py-24' ref={sectionRef}>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className='max-w-7xl mx-auto w-full relative z-10'>
                <div className='flex flex-col items-center gap-16'>

                    <div className={`text-center space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/80 border border-zinc-700/50 rounded-full shadow-lg shadow-black/20 backdrop-blur-sm">
                            <Clock size={16} className="text-cyan-accent" />
                            <span className="text-cyan-accent text-sm font-semibold tracking-wide">Mi Recorrido</span>
                        </div>

                        <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                            Timeline de mi <span className="bg-linear-to-r from-cyan-accent via-cyan-accent to-navy-light bg-clip-text text-transparent">aprendizaje</span>
                        </h2>

                        <p className='text-zinc-400 text-lg max-w-2xl mx-auto'>
                            Un viaje continuo de crecimiento y desarrollo profesional
                        </p>
                    </div>


                    <div className="relative w-full max-w-5xl mt-12">
                        {/* Center line for desktop, left line for mobile */}
                        <div className={`absolute left-8 md:left-12 lg:left-1/2 lg:-translate-x-1/2 w-1 h-full bg-linear-to-b from-cyan-accent/50 via-cyan-accent/50 to-cyan-accent/50 rounded-full ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}></div>

                        {data.timelineItems.map((item, index) => {
                            const colors = [
                                { bg: 'from-cyan-accent/10 to-navy-light/10', border: 'border-cyan-accent/30', hover: 'hover:border-cyan-accent/60', shadow: 'hover:shadow-cyan-accent/20', text: 'text-cyan-accent', dot: 'bg-cyan-accent', glow: 'from-cyan-accent via-cyan-accent to-cyan-accent', line: 'from-cyan-accent to-navy-light' },
                                { bg: 'from-cyan-accent/10 to-navy-light/10', border: 'border-cyan-accent/30', hover: 'hover:border-cyan-accent/60', shadow: 'hover:shadow-cyan-accent/20', text: 'text-cyan-accent', dot: 'bg-cyan-accent', glow: 'from-cyan-accent via-cyan-accent to-cyan-accent', line: 'from-cyan-accent to-navy-light' },
                                { bg: 'from-cyan-accent/10 to-navy-light/10', border: 'border-cyan-accent/30', hover: 'hover:border-cyan-accent/60', shadow: 'hover:shadow-cyan-accent/20', text: 'text-cyan-accent', dot: 'bg-cyan-accent', glow: 'from-cyan-accent via-cyan-accent to-cyan-accent', line: 'from-cyan-accent to-navy-light' }
                            ];
                            const color = colors[index % 3];
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className={`relative flex flex-col lg:flex-row items-start lg:items-center mb-16 ${isEven ? 'lg:flex-row-reverse' : ''} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${300 + (index * 150)}ms` }}>
                                    
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-12 lg:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center mt-6 lg:mt-0">
                                        <div className="relative">
                                            <div className={`absolute inset-0 ${color.dot} rounded-full blur-md opacity-50 animate-pulse`}></div>
                                            <div className={`relative w-6 h-6 ${color.dot} rounded-full border-4 border-zinc-900 shadow-lg`}></div>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full lg:w-5/12 pl-24 md:pl-32 lg:pl-0 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                                        <div className="group relative">

                                            <div className={`absolute -inset-1 bg-linear-to-r ${color.glow} rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700`}></div>

                                            <div className={`relative bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 group-hover:${color.border} rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl ${color.shadow}`}>

                                                <div className={`inline-block px-4 py-1.5 bg-linear-to-r ${color.bg} border ${color.border} rounded-full mb-4`}>
                                                    <p className={`text-xs sm:text-sm font-bold ${color.text}`}>
                                                        {item.title}
                                                    </p>
                                                </div>

                                                <h3 className={`text-white font-bold text-xl sm:text-2xl mb-3 group-hover:${color.text} transition-colors duration-500`}>
                                                    {item.cardTitle || item.title}
                                                </h3>

                                                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                                                    {item.cardDetailedText}
                                                </p>
                                                
                                                {/* Decorative line on hover */}
                                                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r ${color.line} rounded-b-3xl group-hover:w-full transition-all duration-700`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Seccion3
