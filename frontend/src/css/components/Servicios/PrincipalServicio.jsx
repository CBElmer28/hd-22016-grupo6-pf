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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const slides = [
    {
      title: 'Extras Digitales',
      description:
        'Elige Extras Digitales adicionales que se adapten a ti y a tu estilo de vida y disfruta de todo lo que tu Zentauri Quead puede ofrecerte.',
      image: digitalExtraImg,
      buttonText: 'Más información',
      color: 'bg-blue-100',
    },
    {
      title: 'Zentauri Connect',
      description: 'Tu acceso centralizado al mundo digital de Zentauri Quead y a sus servicios.',
      image: connectImg,
      buttonText: 'Más información',
      color: 'bg-purple-100',
    },
    {
      title: 'Aplicaciones',
      description:
        'Descubre nuestras aplicaciones diseñadas para mejorar tu experiencia con tu vehículo Zentauri Quead.',
      buttonText: 'Más información',
      image: appImg,
      color: 'bg-green-100',
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
    <div className="font-sans bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Sección hero con video */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Overlay de carga */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gray-900 z-20 flex items-center justify-center">
            <div className="animate-pulse text-white text-xl">Cargando...</div>
          </div>
        )}

        <div className="flex items-center h-full px-[5%] relative z-10">
          <div className="text-left max-w-[600px] p-8 bg-black bg-opacity-70 rounded-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02]">
            <h1 className="text-5xl text-white mb-6 leading-tight font-bold">
              Nuestros <span className="text-primary">servicios</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              En Zentauri Quead, nos esforzamos al máximo para ofrecerte servicios de primera clase
              para tu vehículo y mucho más.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Descubre más
            </button>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src={heroVideo} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>

        {/* Flecha indicadora */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* Cards de servicios */}
      <section className="px-6 sm:px-12 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Zentauri Quead</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios para mantener tu vehículo en perfecto estado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: servicio1,
              title: 'Reserva online una cita de servicio',
              description:
                'Reserva fácilmente citas para mantenimiento, reparaciones y otros servicios en un taller autorizado Zentauri Quead.',
              buttonText: 'Reserva una cita de servicio',
              buttonVariant: 'primary',
            },
            {
              img: servicio2,
              title: 'Servicios y reparación',
              description:
                'Mantenimiento, reparación y garantías: todos los servicios para mantener tu Zentauri Quead en perfectas condiciones.',
              buttonText: 'Más información',
              buttonVariant: 'secondary',
            },
            {
              img: servicio3,
              title: 'Asistencia en carretera',
              description:
                'Te ayudamos en caso de daños o fallos, con asistencia rápida y soluciones de reparación adecuadas.',
              buttonText: 'Más información',
              buttonVariant: 'secondary',
            },
            {
              img: servicio4,
              title: 'Contratos de servicio',
              description:
                'Evita preocupaciones con contratos de servicio para mantenimiento y reparaciones de tu Zentauri Quead.',
              buttonText: 'Comprar online',
              buttonVariant: 'primary',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                    service.buttonVariant === 'primary'
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-white text-gray-800 border border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Soluciones de Carga */}
      <section className="relative py-24 md:py-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={chargingBg}
            alt="Soluciones de carga"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
          <div className="inline-block mb-8">
            <span className="text-primary font-semibold text-lg">INNOVACIÓN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Soluciones de carga <span className="text-primary">inteligentes</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
            Existe una gran variedad de sencillas opciones para cargar la batería de tu vehículo
            eléctrico o híbrido enchufable Zentauri Quead.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Más información
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg border border-white transition-all duration-300 transform hover:scale-105">
              Ver video
            </button>
          </div>
        </div>
      </section>

      {/* Slider de Extras Digitales */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          {/* Fondo decorativo */}
          <div
            className={`absolute -right-40 -top-40 w-96 h-96 rounded-full ${slides[activeSlide].color} opacity-20 blur-3xl transition-all duration-700`}
          ></div>

          <div className="flex flex-col lg:flex-row items-center">
            {/* Contenido de texto */}
            <div
              className={`flex-1 lg:pr-16 mb-12 lg:mb-0 transition-all duration-500 ${getAnimationClass('text')}`}
            >
              <span className="text-primary font-semibold text-lg">TECNOLOGÍA DIGITAL</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight mt-2">
                Experiencia digital <span className="text-primary">integrada</span>
              </h2>

              <div className="h-64 sm:h-72 transition-all duration-500 ease-in-out">
                <h3 className="text-3xl md:text-4xl text-gray-800 font-semibold mb-6">
                  {slides[activeSlide].title}
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {slides[activeSlide].description}
                </p>
                <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  {slides[activeSlide].buttonText}
                </button>
              </div>

              {/* Indicadores */}
              <div className="flex mt-12 space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${index === activeSlide ? 'bg-primary w-8' : 'bg-gray-300 w-3'}`}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Imagen */}
            <div
              className={`flex-1 h-[450px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${getAnimationClass('image')}`}
            >
              <img
                src={slides[activeSlide].image}
                alt={slides[activeSlide].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Controles de navegación */}
          <div className="flex justify-between mt-12 lg:mt-16">
            <button
              onClick={prevSlide}
              className="flex items-center text-gray-700 hover:text-primary transition-all"
            >
              <span className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md mr-3 hover:bg-primary hover:text-white">
                ‹
              </span>
              <span className="font-medium">Anterior</span>
            </button>

            <button
              onClick={nextSlide}
              className="flex items-center text-gray-700 hover:text-primary transition-all"
            >
              <span className="font-medium">Siguiente</span>
              <span className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md ml-3 hover:bg-primary hover:text-white">
                ›
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Estilos de animación */}
      <style jsx>{`
        .text-enter-from-right {
          animation: textEnterFromRight 0.5s ease-out forwards;
        }
        .text-enter-from-left {
          animation: textEnterFromLeft 0.5s ease-out forwards;
        }
        .image-enter-from-right {
          animation: imageEnterFromRight 0.5s ease-out forwards;
        }
        .image-enter-from-left {
          animation: imageEnterFromLeft 0.5s ease-out forwards;
        }
        @keyframes textEnterFromRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes textEnterFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes imageEnterFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes imageEnterFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Principal;
