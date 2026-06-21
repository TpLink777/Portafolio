import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl 
                cursor-pointer transition-all duration-300
                bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-600
                hover:shadow-emerald-500/40 hover:-tranzinc-y-1 
                ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
            `}
        >
            <ArrowUp size={22} className="text-white" />
        </button>
    );
};

export default ScrollTop;
