import React, { useState } from 'react';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';
import ClaseABerlina from '../../assets/modelos/ClaseABerlina.avif';
import CLARojo from '../../assets/modelos/CLARojo.avif';
import CLAVerde from '../../assets/modelos/CLAVerde.avif';
import ClaseCBerlina from '../../assets/modelos/ClaseCBerlina.avif';
import ClaseEQEBerlina from '../../assets/modelos/ClaseEQEBerlina.avif';
import ClaseEQSBerlina from '../../assets/modelos/ClaseEQSBerlina.avif';
import ClaseEBerlina from '../../assets/modelos/ClaseEBerlina.avif';
import ClaseS from '../../assets/modelos/ClaseS.avif';
import ClaseSLarga from '../../assets/modelos/ClaseSLarga.avif';
import ClaseEQA from '../../assets/modelos/ClaseEQA.avif';
import ClaseEQB from '../../assets/modelos/ClaseEQB.avif';
import ClaseEQESuv from '../../assets/modelos/ClaseEQESuv.avif';
import ClaseEQSSuv from '../../assets/modelos/ClaseEQSSuv.avif';
import ClaseGLA from '../../assets/modelos/ClaseGLA.avif';
import ClaseCLAShootingBrake from '../../assets/modelos/ClaseSLAShootingBrake.avif';
import ClaseCState from '../../assets/modelos/ClaseCState.avif';
import ClaseACompacto from '../../assets/modelos/ClaseACompacto.avif';
import ClaseBCompacto from '../../assets/modelos/ClaseBCompacto.avif';
import ClaseCLACoupé from '../../assets/modelos/ClaseCLACoupé.avif';
import ClaseCLECoupé from '../../assets/modelos/ClaseCLECoupé.avif';
import ClaseCLECabrio from '../../assets/modelos/ClaseCLECabrio.avif';
import ClaseEQT from '../../assets/modelos/ClaseEQT.avif';
import ClaseEQV from '../../assets/modelos/ClaseEQV.avif';
import ClaseT from '../../assets/modelos/ClaseT.avif';

const modelos = [
  {
    nombre: 'Clase A Berlina',
    etiquetas: ['Híbrido'],
    imagen: ClaseABerlina,
    precio: '39.904,57 €',
    disponible: true,
    categoria: 'Berlina',
  },
  {
    nombre: 'CLA',
    etiquetas: ['Nuevo', 'Eléctrico'],
    imagen: CLARojo,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'CLA',
    etiquetas: ['Nuevo'],
    imagen: CLAVerde,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase C Berlina',
    etiquetas: ['Híbrido'],
    imagen: ClaseCBerlina,
    precio: '50.573,35 € ',
    disponible: true,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase EQE Berlina',
    etiquetas: ['Eléctrico'],
    imagen: ClaseEQEBerlina,
    precio: '72.814,96 €',
    disponible: true,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase EQS Berlina',
    etiquetas: ['Eléctrico'],
    imagen: ClaseEQSBerlina,
    precio: '105.144,20 €',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase E Berlina',
    etiquetas: ['Híbrido'],
    imagen: ClaseEBerlina,
    precio: '65.291,16 €',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase S',
    etiquetas: ['Híbrido'],
    imagen: ClaseS,
    precio: '116.253,53 € ',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase S Larga',
    etiquetas: ['Híbrido'],
    imagen: ClaseSLarga,
    precio: '118.172,47 € ',
    disponible: true,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase EQA',
    etiquetas: ['Eléctrico'],
    imagen: ClaseEQA,
    precio: '56.450,30 € ',
    disponible: true,
    categoria: 'SUV',
  },
  {
    nombre: 'Clase EQB',
    etiquetas: ['Eléctrico'],
    imagen: ClaseEQB,
    precio: '58.526,25 €',
    disponible: true,
    categoria: 'SUV',
  },
  {
    nombre: 'Clase EQE Suv',
    etiquetas: ['Híbrido'],
    imagen: ClaseEQESuv,
    precio: '83.359,20 €',
    disponible: true,
    categoria: 'SUV',
  },
  {
    nombre: 'Clase EQS Suv',
    etiquetas: ['Eléctrico'],
    imagen: ClaseEQSSuv,
    precio: '140.185,54 €',
    disponible: true,
    categoria: 'SUV',
  },
  {
    nombre: 'Clase GLA',
    etiquetas: ['Híbrido'],
    imagen: ClaseGLA,
    precio: '47.163,04 € ',
    disponible: true,
    categoria: 'SUV',
  },
  {
    nombre: 'Clase CLA Shooting Brake',
    etiquetas: ['Híbrido'],
    imagen: ClaseCLAShootingBrake,
    precio: '45.054,07 €',
    disponible: false,
    categoria: 'Estate',
  },
  {
    nombre: 'Clase C State',
    etiquetas: ['Híbrido'],
    imagen: ClaseCState,
    precio: '54.269,62 €',
    disponible: false,
    categoria: 'Estate',
  },
  {
    nombre: 'Clase A Compacto',
    etiquetas: ['Híbrido'],
    imagen: ClaseACompacto,
    precio: '38.939,37 €',
    disponible: false,
    categoria: 'Compacto',
  },
  {
    nombre: 'Clase B Compacto',
    etiquetas: ['Híbrido'],
    imagen: ClaseBCompacto,
    precio: '42.778,64 €',
    disponible: false,
    categoria: 'Compacto',
  },
  {
    nombre: 'Clase CLA Coupé',
    etiquetas: ['Híbrido'],
    imagen: ClaseCLACoupé,
    precio: '43.733,27 €',
    disponible: true,
    categoria: 'Coupé',
  },
  {
    nombre: 'Clase CLE Coupé',
    etiquetas: ['Híbrido'],
    imagen: ClaseCLECoupé,
    precio: '61.670,37 €',
    disponible: false,
    categoria: 'Coupé',
  },
  {
    nombre: 'Clase CLE Cabrio',
    etiquetas: ['Híbrido'],
    imagen: ClaseCLECabrio,
    precio: '69.830,69 €',
    disponible: false,
    categoria: 'Cabrio',
  },
  {
    nombre: 'Clase EQT',
    etiquetas: ['Eléctrico'],
    imagen: ClaseEQT,
    precio: '50.746,19 €',
    disponible: false,
    categoria: 'Monovolumen',
  },
  {
    nombre: 'Clase EQV',
    etiquetas: ['Eléctrico'],
    imagen: ClaseEQV,
    precio: '88.348,32 € ',
    disponible: false,
    categoria: 'Monovolumen',
  },
  {
    nombre: 'Clase T',
    etiquetas: ['Híbrido'],
    imagen: ClaseT,
    precio: '32.749,86 €',
    disponible: false,
    categoria: 'Monovolumen',
  },
];

function Modelos() {
  const [carroceriaFiltro, setCarroceriaFiltro] = useState('');
  const [combustibleFiltro, setCombustibleFiltro] = useState('');

  const categorias = [...new Set(modelos.map(m => m.categoria))];

  const modelosFiltrados = modelos.filter(modelo => {
    const cumpleCarroceria = carroceriaFiltro ? modelo.categoria === carroceriaFiltro : true;
    const cumpleCombustible = combustibleFiltro
      ? modelo.etiquetas.includes(combustibleFiltro)
      : true;
    return cumpleCarroceria && cumpleCombustible;
  });

  return (
    <div>
      <Navbar />
      <div className="px-4 py-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Nuestros modelos</h1>
        <p className="text-center text-gray-600 mb-6">
          Descubre nuestro diverso mundo de marcas y modelos: Aquí encontrarás tu vehículo deseado.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">Carrocería:</span>
            {[
              'Todas',
              'SUV',
              'Berlina',
              'Estate',
              'Compacto',
              'Coupé',
              'Cabrio',
              'Monovolumen',
            ].map(tipo => (
              <button
                key={tipo}
                className={`px-3 py-1 rounded-full border text-sm ${
                  carroceriaFiltro === tipo || (tipo === 'Todas' && carroceriaFiltro === '')
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setCarroceriaFiltro(tipo === 'Todas' ? '' : tipo)}
              >
                {tipo}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">Combustible:</span>
            {['Todos', 'Eléctrico', 'Híbrido'].map(tipo => (
              <button
                key={tipo}
                className={`px-3 py-1 rounded-full border text-sm ${
                  combustibleFiltro === tipo || (tipo === 'Todos' && combustibleFiltro === '')
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setCombustibleFiltro(tipo === 'Todos' ? '' : tipo)}
              >
                {tipo}
              </button>
            ))}
          </div>
        </div>

        {categorias.map(categoria => {
          const modelosCategoria = modelosFiltrados.filter(m => m.categoria === categoria);
          if (modelosCategoria.length === 0) return null;

          return (
            <div key={categoria} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">{categoria}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {modelosCategoria.map((modelo, index) => (
                  <div
                    key={index}
                    className="relative bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{modelo.nombre}</h3>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {modelo.etiquetas.map((etiqueta, i) => (
                          <span
                            key={i}
                            className={`px-2 py-0.5 text-xs rounded-full ${
                              etiqueta === 'Eléctrico'
                                ? 'bg-blue-100 text-blue-800'
                                : etiqueta === 'Híbrido'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {etiqueta}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="relative group">
                      <img
                        src={modelo.imagen}
                        alt={modelo.nombre}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="bg-white text-black px-4 py-2 rounded-md font-medium">
                          Más...
                        </button>
                      </div>
                    </div>
                    <div className="p-4 border-t">
                      <p
                        className={`text-sm font-medium ${
                          modelo.disponible ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {modelo.precio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Modelos;
