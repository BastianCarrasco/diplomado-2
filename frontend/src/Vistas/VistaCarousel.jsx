import React from 'react';
import logo from '../assets/LOGO.png'; // Asegúrate de que la ruta de la imagen sea correcta
import logo2 from '../assets/cii y logo estado.png'; // Asegúrate de que la ruta de la imagen sea correcta
import logo3 from '../assets/telefono.png'; // Asegúrate de que la ruta de la imagen sea correcta

const VistaCarousel = ({ src, alt, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      {/* Imagen de fondo */}
      <img
        src={src}
        className="d-block w-full h-auto max-h-screen object-cover"
        alt={alt}
      />

      {/* Logo superior izquierdo */}
      <div className="absolute top-4 left-4 z-10 max-w-xs max-h-48 sm:max-w-xs sm:max-h-24">
        <img
          src= {logo} // Asegúrate de que la ruta de la imagen sea correcta
          alt="Logo"
          className="img-fluid max-h-full object-contain"
        />
      </div>

      {/* Logo superior derecho */}
      <div className="absolute top-4 right-4 z-10 max-w-xs max-h-48 sm:max-w-xs sm:max-h-24">
        <p className="text-white text-xl font-bold sm:text-lg">
          cii.pucv.cl
        </p>
      </div>

      {/* Logo inferior izquierdo */}
      <div className="absolute bottom-4 left-4 z-10 max-w-xs max-h-48 sm:max-w-xs sm:max-h-24">
        <img
          src={logo2}
          alt="Logo"
          className="img-fluid max-h-full object-contain"
        />
      </div>

      {/* Logo inferior derecho */}
      <div className="absolute bottom-4 right-4 z-10 max-w-xs max-h-48 sm:max-w-xs sm:max-h-24">
        <img
          src={logo3}
          alt="Logo"
          className="img-fluid max-h-full object-contain"
        />
      </div>

      {/* Texto centrado vertical y horizontalmente */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 bg-black bg-opacity-50 rounded-lg border-r-4 border-b-4 border-yellow-500 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      >
        <h2 className="text-white text-2xl md:text-4xl font-bold uppercase leading-tight sm:text-xl">
          Diplomado <br />
          Internacional <br />
          en innovación
        </h2>
      </div>
    </div>
  );
};

export default VistaCarousel;
