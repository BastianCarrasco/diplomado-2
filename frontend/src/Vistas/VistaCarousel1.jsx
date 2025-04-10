import React from 'react';

const VistaCarousel1 = ({ src, alt, isActive }) => {
  return (
    <div
      className={`carousel-item position-relative ${isActive ? 'active' : ''}`}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Columna izquierda - Contenido textual */}
        <div className="flex flex-col h-full">
          {/* Sección Objetivo */}
          <div
            className="bg-light p-4 flex-grow-1 border-r-8 border-b-8"
            style={{
              borderColor: 'hwb(52 0% 5% / 0.981)',
            }}
          >
            <h3
              className="p-2 mb-3 text-dark"
              style={{
                backgroundColor: 'hwb(52 0% 5% / 0.981)',
                display: 'inline-block',
                borderRight: '4px solid black',
                borderBottom: '4px solid black',
                padding: '5px 10px',
              }}
            >
              OBJETIVO DEL PROGRAMA
            </h3>
            <p className="mb-0">
              Entregar a los participantes herramientas prácticas, conocimientos
              actualizados y modelos de éxito internacional que les permitan liderar
              procesos de innovación en sus organizaciones o proyectos, impulsando
              el cambio con una visión estratégica y colaborativa.
            </p>
          </div>

          {/* Sección Metodología */}
          <div
            className="bg-dark text-white p-4 flex-grow-1"
            style={{
              borderRight: '10px solid hwb(52 0% 5% / 0.981)',
            }}
          >
            <h3
              className="p-2 mb-3 text-dark"
              style={{
                backgroundColor: 'hwb(52 0% 5% / 0.981)',
                display: 'inline-block',
                borderRight: '4px solid white',
                borderBottom: '4px solid white',
                padding: '5px 10px',
              }}
            >
              METODOLOGÍA
            </h3>
            <p className="mb-0">
              Se desarrolla mediante clases sincrónicas online, incorporando casos
              reales, trabajo en equipo, análisis práctico de metodologías de
              innovación, y la participación de docentes nacionales e
              internacionales con experiencia comprobada en el ámbito de la
              innovación y el emprendimiento.
            </p>
          </div>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="h-full">
          <img
            src={src}
            className="w-full h-full object-cover sm:h-auto lg:h-screen"
            style={{
              objectPosition: 'center -150px',
            }}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default VistaCarousel1;