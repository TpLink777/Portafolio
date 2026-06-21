import { useCallback } from "react";

export const useWhatsApp = () => {
    const openWhatsApp = useCallback((name = "", customMessage = "") => {
        const telefono = "573234447475";
        
        let mensaje = "";
        if (name && customMessage) {
            mensaje = `Hola Stiven, soy ${name}. \n\n${customMessage}`;
        } else {
            mensaje = `Hola Stiven, me interesa tu perfil y me gustaría contactarme contigo para conocerte más.`; 
        }

        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    }, []);

    return { openWhatsApp };
};
