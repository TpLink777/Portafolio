
export const getColorClasses = (color) => {
    const colors = {
        cyan: {
            glow: 'from-emerald-400 via-emerald-500 to-emerald-400',
            border: 'border-emerald-500/30',
            hoverBorder: 'group-hover:border-emerald-500/60',
            shadow: 'group-hover:shadow-emerald-500/20',
            text: 'group-hover:text-emerald-400',
            badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
            button: 'hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400'
        },
        blue: {
            glow: 'from-teal-400 via-teal-500 to-teal-400',
            border: 'border-teal-500/30',
            hoverBorder: 'group-hover:border-teal-500/60',
            shadow: 'group-hover:shadow-teal-500/20',
            text: 'group-hover:text-teal-400',
            badge: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
            button: 'hover:bg-teal-500/10 hover:border-teal-500/50 hover:text-teal-400'
        },
        purple: {
            glow: 'from-emerald-400 via-emerald-500 to-emerald-400',
            border: 'border-emerald-500/30',
            hoverBorder: 'group-hover:border-emerald-500/60',
            shadow: 'group-hover:shadow-emerald-500/20',
            text: 'group-hover:text-emerald-400',
            badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
            button: 'hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400'
        }
    };
    return colors[color];
};