import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Servicios/PrincipalServicio';
import Modelos from './components/Servicios/Modelos';
import Servicios from './components/Servicios/PrincipalServicio';
import CompraServicios from './components/Servicios/CompraServicios';
import Marca from './components/Servicios/SobreNosotros';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/comprar" element={<CompraServicios />} />
        <Route path="/marca" element={<Marca />} />
      </Routes>
    </Router>
  );
}

export default App;
