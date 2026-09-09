export const getColorClasses = (color) => {
    const colors = {
        cyan: {
            glow: 'from-cyan-accent via-cyan-accent to-cyan-accent',
            border: 'border-cyan-accent/30',
            hoverBorder: 'group-hover:border-cyan-accent/60',
            shadow: 'group-hover:shadow-cyan-accent/20',
            text: 'group-hover:text-cyan-accent',
            badge: 'bg-cyan-accent/10 border-cyan-accent/30 text-cyan-accent',
            button: 'hover:bg-cyan-accent/10 hover:border-cyan-accent/50 hover:text-cyan-accent'
        },
        blue: {
            glow: 'via-cyan-accent',
            border: 'border-cyan-accent/30',
            hoverBorder: 'group-hover:border-cyan-accent/60',
            shadow: 'group-hover:shadow-cyan-accent/20',
            text: 'group-hover:text-cyan-accent',
            badge: 'bg-cyan-accent/10 border-cyan-accent/30 text-cyan-accent',
            button: 'hover:bg-cyan-accent/10 hover:border-cyan-accent/50 hover:text-cyan-accent'
        },
        purple: {
            glow: 'from-cyan-accent via-cyan-accent to-cyan-accent',
            border: 'border-cyan-accent/30',
            hoverBorder: 'group-hover:border-cyan-accent/60',
            shadow: 'group-hover:shadow-cyan-accent/20',
            text: 'group-hover:text-cyan-accent',
            badge: 'bg-cyan-accent/10 border-cyan-accent/30 text-cyan-accent',
            button: 'hover:bg-cyan-accent/10 hover:border-cyan-accent/50 hover:text-cyan-accent'
        }
    };
    return colors[color];
};