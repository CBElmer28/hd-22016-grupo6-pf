import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Servicios/PrincipalServicio';
import Modelos from './components/Servicios/Modelos';
import Servicios from './components/Servicios/PrincipalServicio';
import CompraServicios from './components/Servicios/CompraServicios';
import Marca from './components/Servicios/SobreNosotros';
import Contacto from './components/Servicios/Contacto';
import Cotizar from './components/Servicios/Cotizar';
import Login from './components/Servicios/Login';
import Register from './components/Servicios/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/comprar" element={<CompraServicios />} />
        <Route path="/marca" element={<Marca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cotizar" element={<Cotizar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
