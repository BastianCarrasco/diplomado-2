import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faClock,
  faCalendarAlt,
  faFileAlt,
  faDollarSign,
  faPercent,
  faTags,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const VistaCarousel6 = ({ src, alt, isActive }) => {
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

export default VistaCarousel6;
