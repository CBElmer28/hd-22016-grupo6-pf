import React, { useState, useEffect } from 'react';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';
import '../../css/Servicios.css';
import servicio1 from '../../assets/Servicio1.jpg';
import servicio2 from '../../assets/Servicio2.jpg';
import servicio3 from '../../assets/Servicio3.jpg';
import servicio4 from '../../assets/Servicio4.jpg';
import heroVideo from '../../assets/Servicios.mp4';
import chargingBg from '../../assets/carga.jpg';
import digitalExtraImg from '../../assets/ExtrasDigitales.png';
import connectImg from '../../assets/Connect.png';
import appImg from '../../assets/aplicaciones.png';

const Principal = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: 'Extras Digitales',
      description:
        'Elige Extras Digitales adicionales que se adapten a ti y a tu estilo de vida y disfruta de todo lo que tu Zentauri Quead puede ofrecerte.',
      image: digitalExtraImg,
      buttonText: 'Más información',
    },
    {
      title: 'Zentauri Connect',
      description: 'Tu acceso centralizado al mundo digital de Zentauri Quead y a sus servicios.',
      image: connectImg,
      buttonText: 'Más información',
    },
    {
      title: 'Aplicaciones',
      description:
        'Descubre nuestras aplicaciones diseñadas para mejorar tu experiencia con tu vehículo Zentauri Quead.',
      buttonText: 'Más información',
      image: appImg,
      buttonText: 'Más información',
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setTransitionDirection('right');
    setIsAnimating(true);
    setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setTransitionDirection('left');
    setIsAnimating(true);
    setActiveSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = index => {
    if (isAnimating || index === activeSlide) return;
    setTransitionDirection(index > activeSlide ? 'right' : 'left');
    setIsAnimating(true);
    setActiveSlide(index);
  };

  // Auto-avance cada 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  // Reset animación al completar
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sección principal con texto alineado a la izquierda */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text left-aligned">
            <h1>Nuestros servicios</h1>
            <p>
              En Zentauri Quead, nos esforzamos al máximo para ofrecerte servicios de primera clase
              para tu vehículo y mucho más.
            </p>
          </div>
        </div>
        <div className="hero-video">
          <video autoPlay loop muted playsInline className="background-video">
            <source src={heroVideo} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </section>

      {/* Cards de servicios */}
      <section className="cards-section">
        <div className="card">
          <img src={servicio1} alt="Servicio 1" />
          <h3>Reserva online una cita de servicio</h3>
          <p>
            Reserva fácilmente citas para mantenimiento, reparaciones y otros servicios en un taller
            autorizado Zentauri Quead.
          </p>
          <button className="btn-primary">Reserva una cita de servicio</button>
        </div>

        <div className="card">
          <img src={servicio2} alt="Servicio 2" />
          <h3>Servicios y reparación</h3>
          <p>
            Mantenimiento, reparación y garantías: todos los servicios para mantener tu Zentauri
            Quead en perfectas condiciones.
          </p>
          <button className="btn-secondary">Más información</button>
        </div>

        <div className="card">
          <img src={servicio3} alt="Servicio 3" />
          <h3>Asistencia en carretera y en caso de daños</h3>
          <p>
            Te ayudamos en caso de daños o fallos, con asistencia rápida y soluciones de reparación
            adecuadas.
          </p>
          <button className="btn-secondary">Más información</button>
        </div>

        <div className="card">
          <img src={servicio4} alt="Servicio 4" />
          <h3>Contratos de servicio</h3>
          <p>
            Evita preocupaciones con contratos de servicio para mantenimiento y reparaciones de tu
            Zentauri Quead.
          </p>
          <button className="btn-primary">Comprar online</button>
        </div>
      </section>

      {/* Sección de Soluciones de Carga */}
      <section className="charging-section" style={{ backgroundImage: `url(${chargingBg})` }}>
        <div className="charging-overlay"></div>
        <div className="section-container">
          <h2>Soluciones de carga</h2>
          <p className="section-description">
            Existe una gran variedad de sencillas opciones para cargar la batería de tu vehículo
            eléctrico o híbrido enchufable Zentauri Quead.
          </p>
          <button className="btn-primary">Más información</button>
        </div>
      </section>

      {/* Nuevo slider de Extras Digitales */}
      <section className="digital-slider-section">
        <div className="slider-container">
          <div className="slider-content">
            <div className={`slider-text ${transitionDirection}-${isAnimating ? 'exit' : 'enter'}`}>
              <h2>Extras Digitales y aplicaciones Zentauri Quead</h2>
              <h3>{slides[activeSlide].title}</h3>
              <p>{slides[activeSlide].description}</p>
              <button className="btn-primary">{slides[activeSlide].buttonText}</button>
            </div>

            <div
              className={`slider-image ${transitionDirection}-${isAnimating ? 'exit' : 'enter'}`}
            >
              <img
                src={slides[activeSlide].image}
                alt={slides[activeSlide].title}
                className="slide-image"
              />
            </div>
          </div>

          <div className="slider-controls">
            <button onClick={prevSlide} className="slider-arrow" aria-label="Previous slide">
              ‹
            </button>
            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="slider-arrow" aria-label="Next slide">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Principal;
