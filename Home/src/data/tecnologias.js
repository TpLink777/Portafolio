import { Code2, Database, Palette, Server, GitBranch, Container, CloudUpload, PaintBucket } from 'lucide-react';

export const tecnologias = [
    { nombre: 'React', porcentaje: 75, color: 'from-purple-500 to-pink-600', icon: Code2 },
    { nombre: 'JavaScript', porcentaje: 80, color: 'from-fuchsia-500 to-purple-600', icon: Code2 },
    { nombre: 'Tailwind CSS', porcentaje: 80, color: 'from-pink-500 to-rose-600', icon: Palette },
    { nombre: 'Node.js & Express.js', porcentaje: 88, color: 'from-purple-600 to-indigo-600', icon: Server },
    { nombre: 'Git & GitHub', porcentaje: 82, color: 'from-rose-500 to-pink-600', icon: GitBranch },
    { nombre: 'MySQL & MariaDB', porcentaje: 77, color: 'from-purple-500 to-fuchsia-600', icon: Database },
    { nombre: 'Docker', porcentaje: 65, color: 'from-indigo-600 to-purple-600', icon: Container },
    { nombre: 'Railway & Render', porcentaje: 80, color: 'from-pink-600 to-purple-700', icon: CloudUpload },
    { nombre: 'CSS3', porcentaje: 85, color: 'from-fuchsia-600 to-pink-700', icon: PaintBucket },
];
