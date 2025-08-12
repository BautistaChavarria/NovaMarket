import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Health from "./pages/Health";

// VISTAS VACÍAS (sólo con un título) POR AHORA
function Articulos() { return <h2>Artículos</h2>; }
function Depositos() { return <h2>Depósitos</h2>; }
function Stock() { return <h2>Stock</h2>; }
function Ajustes() { return <h2>Ajustes</h2>; }
function Historial() { return <h2>Historial</h2>; }
function Compras() { return <h2>Compras</h2>; }
function Ventas() { return <h2>Ventas</h2>; }
function Resumenes() { return <h2>Resumenes</h2>; }

function Usuario() { return <h2>Usuario</h2>; }

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Health />} />
          <Route path="/stock/articulos" element={<Articulos />} />
          <Route path="/stock/depositos" element={<Depositos />} />
          <Route path="/stock/stock" element={<Stock />} />
          <Route path="/stock/ajustes" element={<Ajustes />} />
          <Route path="/stock/historial" element={<Historial />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/resumenes" element={<Resumenes />} />
          <Route path="/usuario" element={<Usuario />} />
        </Routes>
      </Layout>
    </Router>
  );
}
