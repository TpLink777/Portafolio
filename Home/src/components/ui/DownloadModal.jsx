import React, { useEffect } from 'react'
import { createPortal } from "react-dom";
import { Briefcase, Download, FileDown, FileText, X } from 'lucide-react';

const DownloadModal = ({ onClose }) => {

    useEffect(() => {
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const downloadFile = (type) => {
        const url =
            type === "markdown"
                ? "/Cv/HojaDeVidaMarkDown.pdf"
                : "/Cv/HojaDeVida.pdf";

        const link = document.createElement("a");
        link.href = url;
        link.download = type === "markdown"
            ? "Stiven_Gomez_Md.pdf"
            : "Stiven_Gomez_Pf.pdf";

        link.click();
        onClose();
    };

    return createPortal(
        (
            <div className="fixed inset-0 z-1000 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md p-4 animate-fade-in" onClick={onClose}>
                <div
                    className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl shadow-2xl shadow-black/50 w-full max-w-lg p-8 border border-zinc-700/50 relative overflow-hidden animate-scale-in"
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none"></div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 cursor-pointer rounded-full bg-zinc-800/80 border border-zinc-700 hover:border-cyan-accent/50 hover:bg-cyan-accent/10 transition-all duration-300 group z-10"
                        aria-label="Cerrar modal"
                    >
                        <X size={20} className="text-zinc-400 group-hover:text-cyan-accent group-hover:rotate-90 transition-all duration-300" />
                    </button>

                    <div className="text-center mb-8 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-accent/20 to-cyan-accent/20 border border-cyan-accent/30 mb-4 shadow-lg shadow-cyan-accent/20">
                            <Download size={32} className="text-cyan-accent" />
                        </div>
                        <h2 className="text-3xl font-bold gradient-text mb-2">
                            Descarga tu CV
                        </h2>
                        <p className="text-zinc-400 text-sm">
                            Elige el formato que mejor se adapte a tus necesidades
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 relative z-10">

                        <button
                            onClick={() => downloadFile("markdown")}
                            className="group relative overflow-hidden cursor-pointer w-full text-left"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-accent via-cyan-accent to-cyan-accent rounded-2xl blur-lg opacity-0 transition-all duration-500 group-hover:opacity-40"></div>

                            <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 group-hover:border-cyan-accent/50 rounded-2xl p-5 transition-all duration-300 shadow-md">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center group-hover:bg-cyan-accent/20 transition-all duration-300 shrink-0">
                                        <FileText size={24} className="text-cyan-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-accent transition-colors duration-300">
                                            CV Estilo Técnico
                                        </h3>
                                        <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                                            Formato limpio y estructurado (PDF)
                                        </p>
                                    </div>
                                    <FileDown size={20} className="text-zinc-500 group-hover:text-cyan-accent group-hover:translate-y-1 transition-all duration-300 shrink-0" />
                                </div>
                            </div>
                        </button>


                        <button
                            onClick={() => downloadFile("profesional")}
                            className="group relative overflow-hidden cursor-pointer w-full text-left"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-accent via-cyan-accent to-cyan-accent rounded-2xl blur-lg opacity-0 transition-all duration-500 group-hover:opacity-40"></div>

                            <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 group-hover:border-cyan-accent/50 rounded-2xl p-5 transition-all duration-300 shadow-md">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center group-hover:bg-cyan-accent/20 transition-all duration-300 shrink-0">
                                        <Briefcase size={24} className="text-cyan-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-accent transition-colors duration-300">
                                            CV Profesional
                                        </h3>
                                        <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                                            Diseño elegante y corporativo (PDF)
                                        </p>
                                    </div>
                                    <FileDown size={20} className="text-zinc-500 group-hover:text-cyan-accent group-hover:translate-y-1 transition-all duration-300 shrink-0" />
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={onClose}
                            className="cursor-pointer mt-2 w-full py-3 rounded-xl bg-zinc-800/50 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all duration-300 font-semibold"
                        >
                            Cancelar
                        </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-zinc-700/50 text-center relative z-10">
                        <p className="text-xs text-zinc-500">
                            Los archivos se descargarán automáticamente en formato PDF
                        </p>
                    </div>
                </div>
            </div>
        ),
        document.getElementById("modal-root")
    )
}

export default DownloadModal
