import React from 'react';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';

function SobreNosotros() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <section className="intro">
        <h1 className="hola">Bienvenido a Zentauri Quead</h1>
        <p className="texto-parrafo" style={{ fontSize: '18px' }}>
          En Zentauri Quead, llevamos años ofreciendo los mejores vehículos del mercado, combinando
          calidad, confianza y pasión por el mundo automotriz.
        </p>
      </section>

      <div className="container">
        {/* HISTORIA */}
        <section className="story">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=60"
              alt="Historia de Zentauri Quead"
            />
          </div>
          <div className="text">
            <h2 className="subtitulo">Nuestra Historia</h2>
            <p
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'white',
              }}
            >
              Zentauri Quead nació de la pasión por los autos y el deseo de brindar un servicio
              personalizado a cada cliente. Desde nuestros inicios, nos enfocamos en crear una
              experiencia única para quienes buscan más que un vehículo: buscan confianza, calidad y
              compromiso. Con el tiempo, nos consolidamos como una referencia en la venta de
              automóviles, combinando tecnología de punta con atención cercana y profesional.
            </p>
          </div>
        </section>

        {/* MISION y VISION */}
        <section className="mission-vision">
          {/* Misión */}
          <div className="section-block mission">
            <div className="text">
              <h2 className="subtitulo">Nuestra Misión</h2>
              <p
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '18px',
                  lineHeight: '1.7',
                  color: 'white',
                }}
              >
                Brindar una experiencia de compra excepcional, ofreciendo vehículos de alta calidad,
                servicio personalizado y un compromiso permanente con la satisfacción de nuestros
                clientes.
              </p>
            </div>
            <div className="image">
              <img
                src="https://www.mercedes-benz.es/content/dam/hq/passengercars/the-brand/revamp/about-us/12-2024/images/mercedes-benz-brand-about-us-comfort-1884x1884-12-2024.jpg/1743702298184.jpg?im=Crop,rect=(0,0,1884,1884);Resize=(1439)"
                alt="Misión"
              />
            </div>
          </div>

          {/* Visión */}
          <div className="section-block vision">
            <div className="image">
              <img
                src="https://www.mercedes-benz.es/content/dam/hq/passengercars/the-brand/revamp/about-us/12-2024/images/mercedes-benz-brand-about-us-iconic-design-1884x1884-12-2024.jpg/1743702298477.jpg?im=Crop,rect=(0,0,1884,1884);Resize=(1439)"
                alt="Visión"
              />
            </div>
            <div className="text">
              <h2 className="subtitulo">Nuestra Visión</h2>
              <p
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '18px',
                  lineHeight: '1.7',
                  color: 'white',
                }}
              >
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
