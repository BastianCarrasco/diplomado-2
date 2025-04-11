import React from 'react';

const VistaCarousel1 = ({ src, alt, isActive }) => {
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

export default VistaCarousel1;