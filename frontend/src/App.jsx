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
import Historia from './components/Servicios/Historia';

function App() {
  return (
    <Router basename="/hd-22016-grupo6-pf">
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
        <Route path="/historia" element={<Historia />} />
      </Routes>
    </Router>
  );
}

export default App;
