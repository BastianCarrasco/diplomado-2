import React from 'react';

const VistaCarousel3 = ({ src, alt, isActive }) => {
  return (
    <div className={`carousel-item position-relative ${isActive ? 'active' : ''}`}>
      <div className="row g-0 vh-100 bg-secondary">
        {/* Left Column - Content */}
        <div
          className="col-md-9 h-100 d-flex align-items-center"
          style={{ borderRight: '10px solid hwb(52 0% 5% / 0.981)' }}
        >
          <div className="p-4 w-100">
            <h3
              className="text-dark fw-bold px-3 py-2 mt-4 mb-4"
              style={{
                backgroundColor: 'hwb(52 0% 5% / 0.981)',
                display: 'inline-block',
                minWidth: '200px',
                textAlign: 'center',
                borderRight: '4px solid black',
                borderBottom: '4px solid black',
              }}
            >
              DIRIGIDO A
            </h3>
            <p className="text-white mb-5">
              Profesionales, ejecutivos, emprendedores y líderes de organizaciones
              públicas o privadas, interesados en desarrollar competencias para
              gestionar procesos de innovación de forma efectiva y sostenible.
            </p>

            {/* Two columns with yellow blocks */}
            <div className="row g-4">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <div
                      className="fw-bold text-dark p-2"
                      style={{
                        backgroundColor: 'hwb(52 0% 5% / 0.981)',
                        minHeight: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRight: '4px solid black',
                        borderBottom: '4px solid black',
                      }}
                    >
                      Empresas de bienes y servicios
                    </div>
                  </li>
                  <li className="mb-4">
                    <div
                      className="fw-bold text-dark p-2"
                      style={{
                        backgroundColor: 'hwb(52 0% 5% / 0.981)',
                        minHeight: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRight: '4px solid black',
                        borderBottom: '4px solid black',
                      }}
                    >
                      Empresas consultoras
                    </div>
                  </li>
                  <li className="mb-4">
                    <div
                      className="fw-bold text-dark p-2"
                      style={{
                        backgroundColor: 'hwb(52 0% 5% / 0.981)',
                        minHeight: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRight: '4px solid black',
                        borderBottom: '4px solid black',
                      }}
                    >
                      Instituciones de investigación
                    </div>
                  </li>
                  <li className="mb-4">
                    <div
                      className="fw-bold text-dark p-2"
                      style={{
                        backgroundColor: 'hwb(52 0% 5% / 0.981)',
                        minHeight: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRight: '4px solid black',
                        borderBottom: '4px solid black',
                      }}
                    >
                      Servicios públicos
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <div
                      className="fw-bold text-dark p-2"
                      style={{
                        backgroundColor: 'hwb(52 0% 5% / 0.981)',
                        minHeight: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRight: '4px solid black',
                        borderBottom: '4px solid black',
                      }}
                    >
                      Centros científicos y/o tecnológicos
                    </div>
                  </li>
                  <li className="mb-4">
                    <div
                      className="fw-bold text-dark p-2"
                      style={{
                        backgroundColor: 'hwb(52 0% 5% / 0.981)',
                        minHeight: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRight: '4px solid black',
                        borderBottom: '4px solid black',
                      }}
                    >
                      Instituciones de educación superior
                    </div>
                  </li>
                  <li className="mb-4">
                    <div
                      className="fw-bold text-dark p-2"
                      style={{
                        backgroundColor: 'hwb(52 0% 5% / 0.981)',
                        minHeight: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRight: '4px solid black',
                        borderBottom: '4px solid black',
                      }}
                    >
                      Profesionales y técnicos ligados a la gestión tecnológica
                    </div>
                  </li>
                  <li className="mb-4">
                    <div
                      className="fw-bold text-dark p-2"
                      style={{
                        backgroundColor: 'hwb(52 0% 5% / 0.981)',
                        minHeight: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRight: '4px solid black',
                        borderBottom: '4px solid black',
                      }}
                    >
                      Docentes e investigadores
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div
          className="col-md-3 h-100 position-relative"
          style={{ borderLeft: '20px solid hwb(52 0% 5% / 0.981)' }}
        >
          <img
            src={src}
            className="position-absolute top-0 end-0 w-100 h-100"
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
              transform: 'scale(1.1)',
            }}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default VistaCarousel3;