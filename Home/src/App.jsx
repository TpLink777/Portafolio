import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import ProyectosPage from './pages/Proyectos'
import InteractiveBackground from './components/ui/InteractiveBackground'

function App() {
  return (
    <>
      <InteractiveBackground />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
