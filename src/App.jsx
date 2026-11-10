import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Inicio from "./pages/Inicio"
import Cortes from "./pages/Cortes"
import Galeria from "./pages/Galeria"
import Contato from "./pages/Contato"
import NaoEncontrada from "./pages/NaoEncontrado"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Inicio />} />
      <Route path="/Cortes" element={<Cortes />} />
      <Route path="/Galeria" element={<Galeria />} />
      <Route path="/Contato" element={<Contato />} />
      <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  )
}