import React from 'react';

const VistaCarousel4 = ({ src, alt, isActive }) => {
  return (
    <div className={`carousel-item position-relative font-sans ${isActive ? 'active' : ''}`}>
      <div className="row g-0 vh-100">
        {/* Left Column - Content */}
        <div className="col-md-5 d-flex flex-column h-100">
          {/* Evaluation Section */}
          <div
            className="bg-light p-4 flex-grow-1"
            style={{
              borderRight: '10px solid hwb(52 0% 5% / 0.981)',
              borderBottom: '10px solid hwb(52 0% 5% / 0.981)'
            }}
          >
            <h3
              className="p-2 mb-3 text-dark fw-bold"
              style={{
                backgroundColor: 'hwb(52 0% 5% / 0.981)',
                textAlign: 'center',
                borderRight: '4px solid black',
                borderBottom: '4px solid black'
              }}
            >
              EVALUACIÓN
            </h3>
            <p className="mb-0">
              Evaluaciones individuales y grupales orientadas a la aplicación
              práctica de los contenidos. Se consideran presentaciones, trabajos
              escritos, participación activa en clases y un proyecto final
              integrador.
            </p>
          </div>

          {/* Attendance Section */}
          <div
            className="bg-dark text-white p-4 flex-grow-1"
            style={{ borderRight: '10px solid hwb(52 0% 5% / 0.981)' }}
          >
            <h3
              className="p-2 mb-3 text-dark fw-bold"
              style={{
                backgroundColor: 'hwb(52 0% 5% / 0.981)',
                textAlign: 'center',
                borderRight: '4px solid white',
                borderBottom: '4px solid white'
              }}
            >
              ASISTENCIA
            </h3>
            <p className="mb-0">
              Se requiere un mínimo del 75% de asistencia a las sesiones sincrónicas
              online para la aprobación del programa.
            </p>

            {/* Enrollment Block */}
            <div className="mt-4 pt-3 text-center">
              <div
                className="fw-bold p-2"
                style={{
                  backgroundColor: 'hwb(52 0% 5% / 0.981)',
                  fontSize: '1.5rem',
                  display: 'inline-block',
                  color: 'black'
                }}
              >
                Matrículas abiertas hasta el 30 de Junio 2025
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-7 h-100">
          <img
            src={src}
            className="d-block w-100 h-100 object-fit-cover"
            style={{ objectPosition: 'center -150px' }}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default VistaCarousel4;