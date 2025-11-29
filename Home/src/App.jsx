import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import ProyectosPage from './pages/Proyectos'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
      </Routes>
    </>
  )
}

export default App
