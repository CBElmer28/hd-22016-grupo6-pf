import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import { FaSearch, FaStar, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992); // Cambiado a 992px que es el breakpoint de Bootstrap
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeStyle = {
    color: '#0072c8',
    fontWeight: '600',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container-fluid">
        {/* Logo y hamburguesa */}
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Zentauri Quead Logo" className="navbar-logo" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Contenido del navbar */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/modelos"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Modelos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/comprar"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Comprar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/servicios"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/marca"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Marca
              </NavLink>
            </li>
          </ul>

          {/* Elementos alineados a la derecha */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/proveedor"
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Proveedor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/buscar" className="nav-link">
                  <FaSearch className="icon" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/favoritos" className="nav-link">
                  <FaStar className="icon" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <FaUser className="icon me-1" /> Iniciar sesión
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
