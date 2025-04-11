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
    </div>
  );
};

export default VistaCarousel;
