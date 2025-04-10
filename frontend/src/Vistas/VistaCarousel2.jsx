import React from 'react';

const VistaCarousel2 = ({ src, alt, isActive }) => {
  return (
    <div
      className={`carousel-item position-relative ${isActive ? 'active' : ''}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Columna izquierda - Imagen a pantalla completa */}
        <div className="col-span-1 md:col-span-1 h-full relative">
          <img
            src={src}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ objectPosition: 'center center' }} // Ajusta la imagen para centrarse en todas las resoluciones
            alt={alt}
          />
        </div>

        {/* Columna derecha - Contenido estructurado */}
        <div
          className="col-span-1 md:col-span-1 h-full bg-white flex items-center border-l-8 border-gray-700 p-4 md:p-8"
        >
          <div className="w-full">
            <h3
              className="text-dark font-bold mb-4 text-center md:text-left px-2 py-2"
              style={{
                backgroundColor: 'hwb(52 0% 5% / 0.981)',
                display: 'inline-block',
                borderRight: '4px solid black',
                borderBottom: '4px solid black',
                padding: '5px 10px',
              }}
            >
              CONOCIMIENTOS ESPERADOS
            </h3>
            <ol className="text-dark list-decimal pl-6">
              <li className="mb-3">
                <strong>Comprensión integral de la innovación:</strong><br />
                Desarrollar una visión global del proceso innovador, desde la
                generación de ideas hasta su implementación, comprendiendo cómo la
                innovación impulsa la competitividad y transforma organizaciones y
                sectores.
              </li>
              <li className="mb-3">
                <strong>Adquisición de marcos teóricos y herramientas aplicadas de
                  innovación:</strong
                ><br />
                Incorpora modelos reconocidos y metodologías prácticas para
                gestionar la innovación, aplicando herramientas como Design
                Thinking, Lean Startup, entre otros en contextos reales.
              </li>
              <li className="mb-3">
                <strong>Capacidad para diseñar estrategias de innovación
                  organizacional:</strong
                ><br />
                Aprende a identificar oportunidades, formular propuestas y liderar
                procesos de cambio, desarrollando estrategias alineadas a los
                objetivos y capacidades de su organización.
              </li>
              <li>
                <strong>Conocimiento de experiencias y buenas prácticas
                  internacionales:</strong
                ><br />
                Conocer casos exitosos de empresas líderes a nivel global en
                innovación, a través de referentes internacionales y aprendizajes
                del entorno.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaCarousel2;
