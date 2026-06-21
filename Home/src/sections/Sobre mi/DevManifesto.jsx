import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Code, Cpu } from 'lucide-react';

const DevManifesto = () => {
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
        <section className="py-24 px-6 relative z-10" ref={sectionRef}>
            <div className="max-w-6xl mx-auto">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
                        <span className="text-emerald-500">&gt;</span> filosofía_dev
                    </h2>
                    <p className="text-zinc-400 font-mono text-sm max-w-2xl mx-auto">
                        Los principios técnicos y personales que guían mi código y mis decisiones arquitectónicas.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    
                    {/* Principle 1 */}
                    <div className={`bg-[#0A0A0A] border border-zinc-800 p-8 hover:border-emerald-500/50 transition-colors duration-300 relative group ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
                        <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                        <Terminal className="text-emerald-500 mb-6" size={32} />
                        <h3 className="text-xl font-bold text-white mb-4 font-mono">Clean Code</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            El código se escribe para las personas y las máquinas por igual. Priorizo la legibilidad, la mantenibilidad y la simplicidad arquitectónica por encima de atajos temporales.
                        </p>
                    </div>

                    {/* Principle 2 */}
                    <div className={`bg-[#0A0A0A] border border-zinc-800 p-8 hover:border-teal-500/50 transition-colors duration-300 relative group ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                        <div className="absolute top-0 left-0 w-2 h-full bg-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                        <Cpu className="text-teal-500 mb-6" size={32} />
                        <h3 className="text-xl font-bold text-white mb-4 font-mono">Performance First</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            Una aplicación lenta es una aplicación rota. Cada decisión de diseño técnico debe evaluar su impacto en la carga, el renderizado y la eficiencia del servidor.
                        </p>
                    </div>

                    {/* Principle 3 */}
                    <div className={`bg-[#0A0A0A] border border-zinc-800 p-8 hover:border-emerald-600/50 transition-colors duration-300 relative group ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
                        <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                        <Code className="text-emerald-600 mb-6" size={32} />
                        <h3 className="text-xl font-bold text-white mb-4 font-mono">Adaptabilidad</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            La tecnología avanza rápido, pero los fundamentos permanecen. Mantengo una actitud de aprendizaje constante, adaptándome a nuevos ecosistemas sin casarme con un solo framework.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DevManifesto;
