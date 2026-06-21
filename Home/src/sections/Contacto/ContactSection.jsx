import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Send, Check } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const ContactSection = () => {
    const { openWhatsApp } = useWhatsApp();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const [isTyping, setIsTyping] = useState(true);
    const [terminalText, setTerminalText] = useState('');
    const fullText = "const contact = new Connection();\nawait contact.initiate();";

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

    // Typing effect for the terminal header
    useEffect(() => {
        if (!isVisible) return;
        
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setTerminalText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
                setTimeout(() => setIsTyping(false), 1000);
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, [isVisible]);

    const handleSubmit = (e) => {
        e.preventDefault();
        openWhatsApp(formData.name, formData.message);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className="py-24 px-6 relative z-10" ref={sectionRef}>
            <div className="max-w-4xl mx-auto">
                
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
                        <span className="text-emerald-500">~/</span>contacto<span className="animate-pulse">_</span>
                    </h2>
                    <p className="text-zinc-400 font-mono text-sm">
                        Inicia una conexión segura vía WhatsApp
                    </p>
                </div>

                <div className={`bg-[#0A0A0A] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                    
                    {/* Terminal Header */}
                    <div className="bg-[#18181B] px-4 py-3 flex items-center border-b border-zinc-800">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex-1 flex justify-center items-center gap-2 text-zinc-500 font-mono text-xs">
                            <Terminal size={14} />
                            <span>terminal — zsh</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 font-mono">
                        
                        {/* Interactive typing logs */}
                        <div className="mb-8 text-sm md:text-base text-zinc-400 whitespace-pre-wrap min-h-[3rem]">
                            <span className="text-emerald-500">➜</span> <span className="text-blue-400">~</span> {terminalText}
                            {isTyping && <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 animate-pulse"></span>}
                        </div>

                        {!isTyping && (
                            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="flex items-center gap-2 text-emerald-500 text-sm">
                                        <span className="text-zinc-600">01.</span> const userName = 
                                    </label>
                                    <div className="flex items-center gap-2 bg-[#121212] border border-zinc-800 rounded-md p-1 focus-within:border-emerald-500/50 transition-colors">
                                        <span className="text-zinc-500 pl-3">"</span>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ingresa tu nombre..." 
                                            className="flex-1 bg-transparent border-none py-2 text-zinc-300 placeholder-zinc-700 focus:outline-none font-mono"
                                        />
                                        <span className="text-zinc-500 pr-3">";</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="flex items-center gap-2 text-emerald-500 text-sm">
                                        <span className="text-zinc-600">02.</span> const message = 
                                    </label>
                                    <div className="flex gap-2 bg-[#121212] border border-zinc-800 rounded-md p-1 focus-within:border-emerald-500/50 transition-colors">
                                        <span className="text-zinc-500 pl-3 pt-2">`</span>
                                        <textarea 
                                            id="message" 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={3} 
                                            placeholder="Hola Stiven, me interesa tu perfil para..." 
                                            className="flex-1 bg-transparent border-none py-2 text-zinc-300 placeholder-zinc-700 focus:outline-none font-mono resize-none"
                                        ></textarea>
                                        <span className="text-zinc-500 pr-3 self-end pb-2">`;</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-zinc-800/50 flex justify-end">
                                    <button 
                                        type="submit" 
                                        className="group flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-500 hover:text-black border border-emerald-500/30 hover:border-emerald-500 font-mono text-sm py-2 px-6 rounded transition-all duration-300 cursor-pointer"
                                    >
                                        <span>contact.send()</span>
                                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
