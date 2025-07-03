import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import { FaSearch, FaStar, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y menú principal*/}
          <div className="flex items-center space-x-8">
            <NavLink to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Zentauri Quead Logo"
                className="h-12 hover:scale-105 transition-transform"
              />
            </NavLink>

            {/* Menú principal - solo en desktop */}
            <div className="hidden lg:flex space-x-8 items-center">
              <NavLink
                to="/modelos"
                className={({ isActive }) =>
                  `text-white hover:text-blue-500 no-underline ${isActive ? 'text-blue-500 font-semibold' : ''}`
                }
              >
                Modelos
              </NavLink>
              <NavLink
                to="/comprar"
                className={({ isActive }) =>
                  `text-white hover:text-blue-500 no-underline ${isActive ? 'text-blue-500 font-semibold' : ''}`
                }
              >
                Comprar
              </NavLink>

              {/* Servicios con submenú */}
              <div className="relative group">
                <NavLink
                  to="/servicios"
                  className={({ isActive }) =>
                    `text-white hover:text-blue-500 no-underline ${
                      isActive ? 'text-blue-500 font-semibold' : ''
                    }`
                  }
                >
                  Servicios
                </NavLink>

                {/* Submenú Contacto */}
                <div className="absolute top-full left-0 mt-1 hidden group-hover:block bg-black shadow-lg rounded z-50 w-40">
                  <NavLink
                    to="/contacto"
                    className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-blue-600"
                  >
                    Contacto
                  </NavLink>
                </div>
              </div>

              <NavLink
                to="/marca"
                className={({ isActive }) =>
                  `text-white hover:text-blue-500 no-underline ${isActive ? 'text-blue-500 font-semibold' : ''}`
                }
              >
                Marca
              </NavLink>
              <NavLink
                to="/cotizar"
                className={({ isActive }) =>
                  `text-white hover:text-blue-500 no-underline ${isActive ? 'text-blue-500 font-semibold' : ''}`
                }
              >
                Cotizar
              </NavLink>
            </div>
          </div>

          {/* Menú derecho */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-6">
              <NavLink
                to="/proveedor"
                className={({ isActive }) =>
                  `text-white hover:text-blue-500 no-underline ${isActive ? 'text-blue-500 font-semibold' : ''}`
                }
              >
                Proveedor
              </NavLink>
              <NavLink to="/buscar" className="text-white hover:text-blue-500">
                <FaSearch className="text-xl" />
              </NavLink>
              <NavLink to="/favoritos" className="text-white hover:text-blue-500">
                <FaStar className="text-xl" />
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `flex items-center text-white hover:text-blue-500 no-underline ${isActive ? 'text-blue-500 font-semibold' : ''}`
                }
              >
                <FaUser className="mr-1 text-xl" /> Iniciar sesión
              </NavLink>
            </div>

            {/* Botón hamburguesa - solo en mobile */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-blue-500 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="lg:hidden bg-black bg-opacity-95 px-4 pt-2 pb-4 rounded-b-lg">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/modelos"
                onClick={toggleMenu}
                className="text-white hover:text-blue-500"
              >
                Modelos
              </NavLink>
              <NavLink
                to="/comprar"
                onClick={toggleMenu}
                className="text-white hover:text-blue-500"
              >
                Comprar
              </NavLink>
              <NavLink
                to="/servicios"
                onClick={toggleMenu}
                className="text-white hover:text-blue-500"
              >
                Servicios
              </NavLink>
              <NavLink
                to="/contacto"
                onClick={toggleMenu}
                className="text-white hover:text-blue-500 pl-4"
              >
                └ Contacto
              </NavLink>
              <NavLink to="/marca" onClick={toggleMenu} className="text-white hover:text-blue-500">
                Marca
              </NavLink>
              <NavLink
                to="/proveedor"
                onClick={toggleMenu}
                className="text-white hover:text-blue-500"
              >
                Proveedor
              </NavLink>
              <div className="flex space-x-4 pt-2">
                <NavLink
                  to="/buscar"
                  onClick={toggleMenu}
                  className="text-white hover:text-blue-500"
                >
                  <FaSearch className="text-xl" />
                </NavLink>
                <NavLink
                  to="/favoritos"
                  onClick={toggleMenu}
                  className="text-white hover:text-blue-500"
                >
                  <FaStar className="text-xl" />
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={toggleMenu}
                  className="flex items-center text-white hover:text-blue-500"
                >
                  <FaUser className="mr-1 text-xl" /> Iniciar sesión
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
