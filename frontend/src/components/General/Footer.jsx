import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import '../../css/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Sección superior del footer */}
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">ZENTAURI QUEAD</h3>
            <p className="footer-tagline">Innovación y excelencia en movilidad premium</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Vehículos</h4>
              <ul>
                <li>
                  <a href="#">Modelos</a>
                </li>
                <li>
                  <a href="#">Configurador</a>
                </li>
                <li>
                  <a href="#">Ofertas especiales</a>
                </li>
                <li>
                  <a href="#">Test Drive</a>
                </li>
                <li>
                  <a href="#">Electricos</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Servicios</h4>
              <ul>
                <li>
                  <a href="#">Concesionarios</a>
                </li>
                <li>
                  <a href="#">Mantenimiento</a>
                </li>
                <li>
                  <a href="#">Asistencia en carretera</a>
                </li>
                <li>
                  <a href="#">Financiación</a>
                </li>
                <li>
                  <a href="#">Recambios originales</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Innovación</h4>
              <ul>
                <li>
                  <a href="#">Tecnología</a>
                </li>
                <li>
                  <a href="#">Seguridad</a>
                </li>
                <li>
                  <a href="#">Sostenibilidad</a>
                </li>
                <li>
                  <a href="#">Zentauri Connect</a>
                </li>
                <li>
                  <a href="#">Extras Digitales</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Empresa</h4>
              <ul>
                <li>
                  <a href="#">Sobre nosotros</a>
                </li>
                <li>
                  <a href="#">Carreras</a>
                </li>
                <li>
                  <a href="#">Prensa</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
                <li>
                  <a href="#">Sostenibilidad</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección inferior del footer */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>© {new Date().getFullYear()} Zentauri Quead. Todos los derechos reservados.</p>
            <div className="legal-links">
              <a href="#">Aviso legal</a>
              <a href="#">Política de privacidad</a>
              <a href="#">Cookies</a>
              <a href="#">Términos de uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
