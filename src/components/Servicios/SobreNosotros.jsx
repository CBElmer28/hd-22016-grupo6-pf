import React from 'react';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';

function SobreNosotros() {
  return (
    <>
      <Navbar />
      
      {/* Sección Intro */}
      <section 
        className="w-full h-screen flex flex-col justify-center items-start px-16 py-12 md:px-20 md:py-16"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)),
            url('https://www.mercedes-benz.es/content/dam/hq/passengercars/the-brand/revamp/stage/12-2024/images/mercedes-benz-brand-stage-3840x3840-12-2024.jpg/1745332949800.jpg?im=Crop,rect=(0,1068,3840,1704);Resize=(2730)')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-white/50 to-transparent z-10"></div>
        <h1 className="text-5xl font-bold mb-5 text-black relative z-20 animate-[aparecer_1s_ease-out_forwards] hover:after:scale-x-100 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:left-0 after:-bottom-1 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out">
          Bienvenido a Zentauri Quead
        </h1>
        <p className="text-xl max-w-3xl text-gray-800 relative z-20 animate-[aparecer_1.2s_ease-out_forwards]">
          En Zentauri Quead, llevamos años ofreciendo los mejores vehículos del mercado, combinando
          calidad, confianza y pasión por el mundo automotriz.
        </p>
      </section>

      <div className="w-full bg-black text-white">
        {/* Sección Historia */}
        <section className="flex flex-col md:flex-row items-center justify-between p-12 gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=60"
              alt="Historia de Zentauri Quead"
              className="w-full h-auto rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 relative inline-block hover:after:scale-x-100 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:transition-transform after:duration-400 after:ease-in-out">
              Nuestra Historia
            </h2>
            <p className="font-sans text-lg leading-relaxed">
              Zentauri Quead nació de la pasión por los autos y el deseo de brindar un servicio
              personalizado a cada cliente. Desde nuestros inicios, nos enfocamos en crear una
              experiencia única para quienes buscan más que un vehículo: buscan confianza, calidad y
              compromiso. Con el tiempo, nos consolidamos como una referencia en la venta de
              automóviles, combinando tecnología de punta con atención cercana y profesional.
            </p>
          </div>
        </section>

        {/* Sección Misión y Visión */}
        <section className="flex flex-col gap-12 p-12">
          {/* Misión */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2 p-5">
              <h2 className="text-3xl font-bold mb-4 relative inline-block hover:after:scale-x-100 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:transition-transform after:duration-400 after:ease-in-out">
                Nuestra Misión
              </h2>
              <p className="font-sans text-lg leading-relaxed">
                Brindar una experiencia de compra excepcional, ofreciendo vehículos de alta calidad,
                servicio personalizado y un compromiso permanente con la satisfacción de nuestros
                clientes.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-5">
              <img
                src="https://www.mercedes-benz.es/content/dam/hq/passengercars/the-brand/revamp/about-us/12-2024/images/mercedes-benz-brand-about-us-comfort-1884x1884-12-2024.jpg/1743702298184.jpg?im=Crop,rect=(0,0,1884,1884);Resize=(1439)"
                alt="Misión"
                className="w-full h-auto rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Visión */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2 p-5 order-2 md:order-1">
              <img
                src="https://www.mercedes-benz.es/content/dam/hq/passengercars/the-brand/revamp/about-us/12-2024/images/mercedes-benz-brand-about-us-iconic-design-1884x1884-12-2024.jpg/1743702298477.jpg?im=Crop,rect=(0,0,1884,1884);Resize=(1439)"
                alt="Visión"
                className="w-full h-auto rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-5 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4 relative inline-block hover:after:scale-x-100 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:transition-transform after:duration-400 after:ease-in-out">
                Nuestra Visión
              </h2>
              <p className="font-sans text-lg leading-relaxed">
                Convertirnos en la concesionaria líder de la región, reconocida por nuestra
                innovación, excelencia en servicio y pasión por los automóviles.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}

export default SobreNosotros;