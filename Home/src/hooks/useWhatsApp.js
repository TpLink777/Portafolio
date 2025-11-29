import { useCallback } from "react";

export const useWhatsApp = () => {
    const openWhatsApp = useCallback(() => {
        const telefono = "573234447475";
        const mensaje = `Hola, estoy interesado en ti. Me gustaría contactarme contigo para conocerte mas. Muchas gracias.`; 
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    }, []);

    return { openWhatsApp };
};


