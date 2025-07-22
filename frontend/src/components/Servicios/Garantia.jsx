import React from 'react';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';

const imgBanner =
  'https://www.mercedes-benz.com.pe/documents/13373260/13374667/imagen_postventa_mb_pe.webp/be663b17-1d34-db76-4d6b-17bf7c10b84d?t=1751447221943';
const imgSecundaria =
  'https://www.mercedes-benz.com.pe/documents/13373260/13374667/garantia-1.webp/f10b916c-3dc6-89ed-64ef-941d2f2117ed?t=1751447262599';

const Garantia = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col text-white">
      <Navbar />
      {/* Banner principal con imagen de fondo */}
      <section className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center">
        <img
          src={imgBanner}
          alt="Garantía Mercedes-Benz"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Garantía Zentauri Quead
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-2xl mx-auto drop-shadow">
            2 años de garantía sin límite de kilometraje. Seguridad y confianza desde el primer día.
          </p>
        </div>
      </section>

      {/* Información principal */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
        <div className="bg-neutral-900 rounded-xl shadow-lg p-8 mb-8 flex flex-col md:flex-row items-center gap-8 border border-neutral-700">
          {/* Imagen secundaria */}
          <img
            src={imgSecundaria}
            alt="Cobertura de Garantía Mercedes-Benz"
            className="w-full md:w-1/3 rounded-lg shadow-md object-cover object-center"
            loading="lazy"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">¿Qué cubre la garantía?</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>Vigencia de 2 años desde la entrega de tu Zentauri Quead.</li>
              <li>Sin límite de kilometraje durante el periodo de garantía.</li>
              <li>
                Cobertura ante cualquier defecto de fabricación o materiales en tu vehículo Zentauri
                Quead.
              </li>
              <li>Acceso a nuestra red exclusiva de talleres y servicio técnico Zentauri Quead.</li>
              <li>Confianza y respaldo Zentauri Quead en cada trayecto que realices.</li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-xl shadow p-6 flex flex-col md:flex-row items-center justify-between mb-8 border border-neutral-700 gap-4 md:gap-0">
          <div className="mb-2 md:mb-0 flex-1">
            <h3 className="text-xl font-bold text-blue-300 mb-1">
              ¿Necesitas agendar una cita en taller?
            </h3>
            <p className="text-white/90 text-base md:text-sm leading-snug">
              Nuestro equipo Zentauri Quead está siempre disponible para ayudarte con cualquier
              consulta o servicio relacionado con la garantía de tu vehículo.
            </p>
          </div>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-500 transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Agenda tu cita
          </a>
        </div>

        <div className="bg-neutral-900 rounded-xl shadow p-6 border border-neutral-700">
          <h4 className="text-lg font-semibold text-blue-200 mb-2">Términos y condiciones</h4>
          <p className="text-white/80 text-sm">
            La garantía Zentauri Quead protege tu vehículo ante defectos de fabricación y materiales
            durante 2 años desde la entrega, sin límite de kilometraje. Para más información,
            consulta los términos oficiales o acércate a tu concesionario Zentauri Quead autorizado.
          </p>
          <a
            href="https://www.mercedes-benz.com.pe/garantía"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline mt-2 inline-block"
          >
            Ver términos y condiciones
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Garantia;
