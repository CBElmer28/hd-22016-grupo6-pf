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

  // Sacar las categorías únicas automáticamente
  const categorias = [...new Set(modelos.map(m => m.categoria))];

  // Aplicar filtros
  const modelosFiltrados = modelos.filter(modelo => {
    const cumpleCarroceria = carroceriaFiltro ? modelo.categoria === carroceriaFiltro : true;
    const cumpleCombustible = combustibleFiltro
      ? modelo.etiquetas.includes(combustibleFiltro)
      : true;
    return cumpleCarroceria && cumpleCombustible;
  });
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="modelos-container">
        <h1 className="titulo">Nuestros modelos</h1>
        <p className="descripcion">
          Descubre nuestro diverso mundo de marcas y modelos: Aquí encontrarás tu vehículo deseado.
        </p>

        <div className="filtros">
          <div className="filtro-grupo">
            <span>Carrocería:</span>
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
                className={
                  carroceriaFiltro === tipo || (tipo === 'Todas' && carroceriaFiltro === '')
                    ? 'filtro-activo'
                    : ''
                }
                onClick={() => setCarroceriaFiltro(tipo === 'Todas' ? '' : tipo)}
              >
                {tipo}
              </button>
            ))}
          </div>

          <div className="filtro-grupo">
            <span>Combustible:</span>
            {['Todos', 'Eléctrico', 'Híbrido'].map(tipo => (
              <button
                key={tipo}
                className={
                  combustibleFiltro === tipo || (tipo === 'Todos' && combustibleFiltro === '')
                    ? 'filtro-activo'
                    : ''
                }
                onClick={() => setCombustibleFiltro(tipo === 'Todos' ? '' : tipo)}
              >
                {tipo}
              </button>
            ))}
          </div>
        </div>

        {/* Mostrar modelos agrupados por categoría */}
        {categorias.map(categoria => {
          // Filtrar modelos de esta categoría
          const modelosCategoria = modelosFiltrados.filter(m => m.categoria === categoria);

          // Si no hay modelos en esta categoría después de aplicar filtros, no renderizar
          if (modelosCategoria.length === 0) return null;

          return (
            <div key={categoria}>
              <h2 className="subtitulo">{categoria}</h2>
              <div className="modelos-grid">
                {modelosCategoria.map((modelo, index) => (
                  <div key={index} className="modelo-card">
                    <h3>{modelo.nombre}</h3>

                    <div className="etiquetas">
                      {modelo.etiquetas.map((etiqueta, i) => (
                        <span key={i} className={`etiqueta ${etiqueta.toLowerCase()}`}>
                          {etiqueta}
                        </span>
                      ))}
                    </div>

                    <div className="imagen-container">
                      <img src={modelo.imagen} alt={modelo.nombre} className="modelo-imagen" />
                      <div className="overlay">
                        <button className="btn-info">Más información</button>
                      </div>
                    </div>

                    <p className="precio">
                      {modelo.disponible ? (
                        <>
                          <span>Desde</span> <strong>{modelo.precio}</strong>
                        </>
                      ) : (
                        modelo.precio
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Modelos;
