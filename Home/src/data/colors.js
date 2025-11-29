
export const getColorClasses = (color) => {
    const colors = {
        cyan: {
            glow: 'from-cyan-400 via-cyan-500 to-cyan-400',
            border: 'border-cyan-500/30',
            hoverBorder: 'group-hover:border-cyan-500/60',
            shadow: 'group-hover:shadow-cyan-500/20',
            text: 'group-hover:text-cyan-400',
            badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
            button: 'hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400'
        },
        blue: {
            glow: 'from-blue-400 via-blue-500 to-blue-400',
            border: 'border-blue-500/30',
            hoverBorder: 'group-hover:border-blue-500/60',
            shadow: 'group-hover:shadow-blue-500/20',
            text: 'group-hover:text-blue-400',
            badge: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
            button: 'hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400'
        },
        purple: {
            glow: 'from-purple-400 via-purple-500 to-purple-400',
            border: 'border-purple-500/30',
            hoverBorder: 'group-hover:border-purple-500/60',
            shadow: 'group-hover:shadow-purple-500/20',
            text: 'group-hover:text-purple-400',
            badge: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
            button: 'hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-400'
        }
    };
    return colors[color];
};