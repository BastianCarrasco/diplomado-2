import React from 'react';
import malla from '../assets/MALLA.png'; // Asegúrate de que la ruta de la imagen sea correcta
import uno  from '../assets/1.png'; // Asegúrate de que la ruta de la imagen sea correcta
import dos from '../assets/2.png'; // Asegúrate de que la ruta de la imagen sea correcta
import tres from '../assets/3.png'; // Asegúrate de que la ruta de la imagen sea correcta 
import cuatro from '../assets/4.png'; // Asegúrate de que la ruta de la imagen sea correcta


const VistaCarousel5 = ({ src, alt, isActive }) => {
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

export default VistaCarousel5;