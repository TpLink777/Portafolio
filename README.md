<div align="center">

# 🚀 Portafolio Personal — Stiven Gómez

**Desarrollador Full Stack** apasionado por construir soluciones tecnológicas modernas, eficientes y bien diseñadas.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com/)

[![Live Demo](https://img.shields.io/badge/🌐_Ver_Demo_en_Vivo-5BC0BE?style=for-the-badge)](https://tplink777.github.io/Portafolio/)
[![GitHub](https://img.shields.io/badge/GitHub-TpLink777-181717?style=for-the-badge&logo=github)](https://github.com/TpLink777)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Stiven_Gómez-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/stiven-gomez-mazo/)

</div>

---

## 📋 Tabla de Contenidos

- [Vista General](#-vista-general)
- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Secciones del Portafolio](#-secciones-del-portafolio)
- [Proyectos Destacados](#-proyectos-destacados)
- [Instalación y Uso](#-instalación-y-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contacto](#-contacto)

---

## 🌟 Vista General

Portafolio personal desarrollado con **React 19 + Vite**, con un diseño moderno de temática oscura (dark mode), animaciones fluidas con **GSAP** y un sistema de partículas interactivas. Está pensado para transmitir profesionalismo, creatividad y dominio técnico desde el primer vistazo.

---

## ✨ Características

- 🎨 **Diseño Dark Mode** — Paleta de colores personalizada con tonos navy y cian
- ⚡ **Animaciones con GSAP** — Efectos de entrada, scramble text y transiciones suaves
- 🌌 **Partículas Interactivas** — Fondo animado con `@tsparticles/react`
- 📱 **Totalmente Responsivo** — Adaptado para móvil, tablet y escritorio
- 🖼️ **Carrusel de Proyectos** — Galería con Swiper.js para mostrar cada proyecto
- 🧩 **Arquitectura por Secciones** — Código modular y fácil de mantener
- 🎯 **Animaciones por Scroll** — `IntersectionObserver` para activar animaciones al entrar en viewport
- 📄 **Descarga de CV** — Modal con opciones de descarga

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnologías |
|-----------|-------------|
| **Frontend Framework** | React 19, Vite (rolldown-vite) |
| **Estilos** | Tailwind CSS v4, CSS3 personalizado |
| **Animaciones** | GSAP 3, ScrambleTextPlugin, @gsap/react |
| **Partículas** | @tsparticles/engine, @tsparticles/react |
| **Íconos** | Lucide React, @icons-pack/react-simple-icons |
| **Carrusel** | Swiper.js |
| **Enrutamiento** | React Router DOM v7 |
| **Linting** | ESLint 9 |

---

## 📁 Secciones del Portafolio

| Sección | Descripción |
|---------|-------------|
| **🏠 Inicio** | Hero section con presentación, animación de texto y links a redes sociales |
| **👤 Sobre mí** | Tres subsecciones: quién soy, objetivos y metas, y timeline de aprendizaje |
| **💡 Skills** | Soft skills y tech stack con íconos de cada tecnología |
| **🚀 Proyectos** | Tarjetas de proyectos destacados con modal de detalle y carrusel de imágenes |
| **💼 Experiencia** | Experiencia en proyectos formativos y personales |
| **📬 Contacto** | Formulario de contacto directo |

---

## 🚀 Proyectos Destacados

### 📦 Fast Request — Landing Page
> Landing page de presentación del proyecto formativo Fast Request.
- **Stack:** Node.js, Express.js, Handlebars.js, CSS3, HTML5
- 🔗 [Repositorio](https://github.com/TpLink777/Project-Fast-Request) · [Demo](https://project-fast-request.vercel.app/)

### 🍔 Fast Request — Plataforma Completa
> Aplicación full-stack para gestión de pedidos de comida rápida con panel de administración.
- **Stack:** React, Vite, Node.js, Express.js, MySQL, Sequelize, Docker, JWT, Cloudinary, SendGrid
- 🔗 [Repositorio](https://github.com/fastrequestteam/Fast-Request) · [Demo](https://fast-request-1.onrender.com)

### 🤖 Analizador de Código con AI
> Aplicación web que analiza código JavaScript con inteligencia artificial y sugiere mejoras.
- **Stack:** Node.js, Express.js, React, Vite, CSS3
- 🔗 [Repositorio](https://github.com/TpLink777/Analizador-De-Codigo) · [Demo](https://analizador-de-codigo.onrender.com)

### 📝 NoteAI
> Gestor de tareas full-stack con autenticación OAuth 2.0 (Google), roles y generación de descripciones con IA.
- **Stack:** Laravel, Livewire, Alpine.js, TailwindCSS, Supabase, Hugging Face API, Ollama API, PHP
- 🔗 [Repositorio](https://github.com/TpLink777/NoteAI) · [Demo](https://noteai-production-2ca3.up.railway.app/)

---

## ⚙️ Instalación y Uso

### Prerrequisitos

- **Node.js** >= 18.x
- **npm** >= 9.x

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/TpLink777/Portafolio.git
cd Portafolio/Home

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev

# 4. Abre en el navegador
# http://localhost:5173
```

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera el bundle de producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta ESLint en el proyecto |

---

## 📂 Estructura del Proyecto

```
Portafolio/
└── Home/
    ├── public/              # Assets estáticos (imágenes de proyectos, CV, foto)
    └── src/
        ├── assets/          # Assets importados por módulos
        ├── components/
        │   ├── layout/      # Navbar, Footer
        │   └── ui/          # Componentes reutilizables (DownloadModal, etc.)
        ├── data/            # Datos de proyectos, skills, tecnologías, timeline
        ├── hooks/           # Custom hooks de React
        ├── pages/           # Páginas principales
        ├── sections/        # Secciones del portafolio (Inicio, Sobre mí, etc.)
        ├── styles/
        │   └── global.css   # Sistema de diseño, animaciones y variables CSS
        ├── App.jsx
        └── main.jsx
```

---

## 📬 Contacto

<div align="center">

| Canal | Enlace |
|-------|--------|
| 📧 **Email** | [stivengomezmazo7@gmail.com](mailto:stivengomezmazo7@gmail.com) |
| 💼 **LinkedIn** | [linkedin.com/in/stiven-gomez-mazo](https://www.linkedin.com/in/stiven-gomez-mazo/) |
| 🐙 **GitHub** | [github.com/TpLink777](https://github.com/TpLink777) |

</div>

---

<div align="center">

Diseñado y desarrollado con ❤️ por **Stiven Gómez Mazo**

*"Apasionado por convertir problemas complejos en sistemas eficientes, bien diseñados y funcionales."*

</div>
