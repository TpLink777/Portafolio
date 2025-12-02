import React from 'react'
import { createPortal } from "react-dom";
import { Briefcase, Download, FileDown, FileText, X } from 'lucide-react';

const DownloadModal = ({ onClose }) => {

    const downloadFile = (type) => {
        const url =
            type === "markdown"
                ? "/Cv/Hoja_De_Vida_MarkDown.pdf"
                : "/Cv/Hoja_De_Vida.pdf";

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
            <>
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
                    <div
                        className="bg-linear-to-br z-50  from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl w-full max-w-lg p-8 border-2 border-slate-700/50 relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>


                        <button
                            onClick={onClose}
                            className="absolute top-4 z-50  right-4 p-2 cursor-pointer rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
                        >
                            <X size={20} className="text-slate-400 cursor-pointer group-hover:text-cyan-400 group-hover:rotate-90 transition-all duration-300" />
                        </button>


                        <div className="text-center mb-8 relative z-50">
                            <div className="inline-flex z-50 items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4">
                                <Download size={32} className="text-cyan-400" />
                            </div>
                            <h2 className="text-3xl z-50 font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                                Descarga tu CV
                            </h2>
                            <p className="text-slate-400 z-50  text-sm">
                                Elige el formato que mejor se adapte a tus necesidades
                            </p>
                        </div>


                        <div className="flex flex-col z-50 gap-4 relative ">

                            <button
                                onClick={() => downloadFile("markdown")}
                                className="group relative  z-50 overflow-hidden cursor-pointer"
                            >
                                <div className="absolute -inset-1 z-50  bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-2xl blur-lg opacity-0 transition-all duration-700"></div>

                                <div className="relative bg-linear-to-br z-50  from-slate-800 to-slate-900 border-2 border-cyan-500/30 hover:border-cyan-500/60 rounded-2xl p-5 transition-all duration-300">
                                    <div className="flex items-center gap-4 z-50 ">
                                        <div className="w-12 h-12 rounded-xl z-50  bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                                            <FileText size={24} className="text-cyan-400 z-50 " />
                                        </div>
                                        <div className="flex-1 text-left z-50 ">
                                            <h3 className="text-lg  z-50 font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                                CV estilo Markdown
                                            </h3>
                                            <p className="text-sm z-50 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                                                Formato limpio y minimalista (PDF)
                                            </p>
                                        </div>
                                        <FileDown size={20} className="text-slate-500 z-50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                </div>
                            </button>


                            <button
                                onClick={() => downloadFile("profesional")}
                                className="group relative overflow-hidden z-50 cursor-pointer"
                            >
                                <div className="absolute -inset-1 z-50 bg-linear-to-r from-purple-400 via-pink-500 to-purple-400 rounded-2xl blur-lg opacity-0  transition-all duration-700"></div>

                                <div className="relative bg-linear-to-br z-50 from-slate-800 to-slate-900 border-2 border-purple-500/30 group-hover:border-purple-500/60 rounded-2xl p-5 transition-all duration-300">
                                    <div className="flex items-center z-50 gap-4">
                                        <div className="w-12 h-12 z-50 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                                            <Briefcase size={24} className="text-purple-400" />
                                        </div>
                                        <div className="flex-1 z-50 text-left">
                                            <h3 className="text-lg z-50 font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                                                CV Profesional
                                            </h3>
                                            <p className="text-sm z-50 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                                                Diseño elegante y corporativo (PDF)
                                            </p>
                                        </div>
                                        <FileDown size={20} className="text-slate-500 z-50 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                </div>
                            </button>


                            <button
                                onClick={onClose}
                                className="cursor-pointer z-50 mt-2 w-full py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all duration-300 font-semibold"
                            >
                                Cancelar
                            </button>
                        </div>


                        <div className="mt-6 pt-6 z-50 border-t border-slate-700/50 text-center relative ">
                            <p className="text-xs text-slate-500 z-50 ">
                                Los archivos se descargarán automáticamente en formato PDF
                            </p>
                        </div>
                    </div>
                </div>
            </>
        ),
        document.getElementById("modal-root")
    )
}

export default DownloadModal
