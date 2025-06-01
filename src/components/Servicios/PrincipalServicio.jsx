import React, { useState, useEffect } from 'react';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';
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
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Clases de animación basadas en la dirección
  const getAnimationClass = type => {
    if (isAnimating) {
      return transitionDirection === 'right'
        ? `${type}-enter-from-right`
        : `${type}-enter-from-left`;
    }
    return '';
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Sección principal con texto alineado a la izquierda */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="flex items-center h-full px-[5%] relative z-10">
          <div className="text-left max-w-[600px] p-8 bg-black bg-opacity-50 rounded-lg">
            <h1 className="text-5xl text-white mb-6 leading-tight">Nuestros servicios</h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              En Zentauri Quead, nos esforzamos al máximo para ofrecerte servicios de primera clase
              para tu vehículo y mucho más.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={heroVideo} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </section>

      {/* Cards de servicios */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 py-24">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <img src={servicio1} alt="Servicio 1" className="w-full h-[200px] object-cover" />
          <h3 className="text-2xl mx-2 mt-5 mb-2">Reserva online una cita de servicio</h3>
          <p className="text-lg text-gray-600 px-4 pb-5">
            Reserva fácilmente citas para mantenimiento, reparaciones y otros servicios en un taller
            autorizado Zentauri Quead.
          </p>
          <button className="bg-primary text-white border-none px-5 py-2 mb-5 rounded cursor-pointer hover:opacity-80">
            Reserva una cita de servicio
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <img src={servicio2} alt="Servicio 2" className="w-full h-[200px] object-cover" />
          <h3 className="text-2xl mx-2 mt-5 mb-2">Servicios y reparación</h3>
          <p className="text-lg text-gray-600 px-4 pb-5">
            Mantenimiento, reparación y garantías: todos los servicios para mantener tu Zentauri
            Quead en perfectas condiciones.
          </p>
          <button className="bg-white text-black border border-black px-5 py-2 mb-5 rounded cursor-pointer hover:opacity-80">
            Más información
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <img src={servicio3} alt="Servicio 3" className="w-full h-[200px] object-cover" />
          <h3 className="text-2xl mx-2 mt-5 mb-2">Asistencia en carretera y en caso de daños</h3>
          <p className="text-lg text-gray-600 px-4 pb-5">
            Te ayudamos en caso de daños o fallos, con asistencia rápida y soluciones de reparación
            adecuadas.
          </p>
          <button className="bg-white text-black border border-black px-5 py-2 mb-5 rounded cursor-pointer hover:opacity-80">
            Más información
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <img src={servicio4} alt="Servicio 4" className="w-full h-[200px] object-cover" />
          <h3 className="text-2xl mx-2 mt-5 mb-2">Contratos de servicio</h3>
          <p className="text-lg text-gray-600 px-4 pb-5">
            Evita preocupaciones con contratos de servicio para mantenimiento y reparaciones de tu
            Zentauri Quead.
          </p>
          <button className="bg-primary text-white border-none px-5 py-2 mb-5 rounded cursor-pointer hover:opacity-80">
            Comprar online
          </button>
        </div>
      </section>

      {/* Sección de Soluciones de Carga - Versión con <img> */}
      <section className="relative py-24 md:py-32 text-center text-white min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Contenedor de imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={chargingBg}
            alt="Soluciones de carga para vehículos Zentauri Quead"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Soluciones de carga</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Existe una gran variedad de sencillas opciones para cargar la batería de tu vehículo
            eléctrico o híbrido enchufable Zentauri Quead.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Más información
          </button>
        </div>
      </section>

      {/* Nuevo slider de Extras Digitales */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Texto del slide */}
            <div className={`flex-1 lg:pr-16 mb-10 lg:mb-0 ${getAnimationClass('text')}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Extras Digitales y aplicaciones Zentauri Quead
              </h2>
              <h3 className="text-3xl md:text-4xl text-primary font-semibold my-8">
                {slides[activeSlide].title}
              </h3>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-[85%]">
                {slides[activeSlide].description}
              </p>
              <button className="bg-primary text-white px-7 py-3 rounded-lg text-lg font-semibold hover:opacity-80">
                {slides[activeSlide].buttonText}
              </button>
            </div>

            {/* Imagen del slide */}
            <div
              className={`flex-1 h-[450px] rounded-xl overflow-hidden shadow-xl ${getAnimationClass('image')}`}
            >
              <img
                src={slides[activeSlide].image}
                alt={slides[activeSlide].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Controles del slider */}
          <div className="flex justify-between items-center mt-10 relative">
            <button
              onClick={prevSlide}
              className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-primary text-2xl shadow-md hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              ‹
            </button>

            <div className="absolute left-1/2 transform -translate-x-1/2 flex">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full mx-2 transition-all ${index === activeSlide ? 'bg-primary scale-125' : 'bg-gray-300'}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-primary text-2xl shadow-md hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5 hover:scale-110 z-10"
              aria-label="Next slide"
            >
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
