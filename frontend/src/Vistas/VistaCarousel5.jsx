import React from 'react';
import malla from '../assets/MALLA.png'; // Asegúrate de que la ruta de la imagen sea correcta
import uno  from '../assets/1.png'; // Asegúrate de que la ruta de la imagen sea correcta
import dos from '../assets/2.png'; // Asegúrate de que la ruta de la imagen sea correcta
import tres from '../assets/3.png'; // Asegúrate de que la ruta de la imagen sea correcta 
import cuatro from '../assets/4.png'; // Asegúrate de que la ruta de la imagen sea correcta


const VistaCarousel5 = ({ src, alt, isActive }) => {
  return (
    <div className={`carousel-item position-relative font-sans vh-100 ${isActive ? 'active' : ''}`}>
      {/* Background Image */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Right-side Image */}
        <div className="position-absolute h-100" style={{ right: 0, top: 0, width: 'auto' }}>
          <img 
            src= {malla}
            className="h-100" 
            style={{ objectFit: 'contain', objectPosition: 'right' }} 
            alt="Malla curricular"
          />
        </div>

        {/* Content Container */}
        <div
          className="h-100 p-3 d-flex flex-column justify-content-between"
          style={{ overflow: 'hidden' }}
        >
          {/* Section 1 */}
          <div
            className="text-dark flex-grow-1"
            style={{
              borderBottom: '2px solid white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div className="row h-100 align-items-center g-0">
              <div className="col-md-2 d-flex justify-content-center">
                <img
                  src={uno}
                  style={{ maxHeight: '20vh', width: 'auto' }}
                  alt="Fundamentos"
                />
              </div>
              <div className="col-md-10 ps-3">
                <h3 className="fw-bold mb-1" style={{ color: 'black', fontSize: '4vh' }}>
                  FUNDAMENTOS DE INNOVACIÓN
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '2.5vh',
                    lineHeight: 1.2
                  }}
                >
                  <li><strong>• Conceptos</strong></li>
                  <li><strong>• Procesos de innovación</strong></li>
                  <li><strong>• Políticas de innovación</strong></li>
                  <li><strong>• Sistemas y ecosistemas</strong></li>
                  <li><strong>• Innovación abierta</strong></li>
                  <li><strong>• Análisis de casos</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div
            className="text-dark flex-grow-1"
            style={{
              borderBottom: '2px solid white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div className="row h-100 align-items-center g-0">
              <div className="col-md-2 d-flex justify-content-center">
                <img
                  src={dos}
                  style={{ maxHeight: '20vh', width: 'auto' }}
                  alt="Herramientas"
                />
              </div>
              <div className="col-md-10 ps-3">
                <h3 className="fw-bold mb-1" style={{ color: 'black', fontSize: '4vh' }}>
                  HERRAMIENTAS PRÁCTICAS
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '2.5vh',
                    lineHeight: 1.2
                  }}
                >
                  <li><strong>• Design thinking</strong></li>
                  <li><strong>• Modelos de negocio</strong></li>
                  <li><strong>• Gestión de proyectos</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div
            className="text-dark flex-grow-1"
            style={{
              borderBottom: '2px solid white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div className="row h-100 align-items-center g-0">
              <div className="col-md-2 d-flex justify-content-center">
                <img
                  src={tres}
                  style={{ maxHeight: '18vh', width: 'auto' }}
                  alt="Gestión"
                />
              </div>
              <div className="col-md-10 ps-3">
                <h3 className="fw-bold mb-1" style={{ color: 'black', fontSize: '4vh' }}>
                  GESTIÓN DE INNOVACIÓN
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '2.5vh',
                    lineHeight: 1.2
                  }}
                >
                  <li><strong>• Innovación corporativa</strong></li>
                  <li><strong>• Liderazgo</strong></li>
                  <li><strong>• Vigilancia tecnológica</strong></li>
                  <li><strong>• Protección</strong></li>
                  <li><strong>• IA disruptiva</strong></li>
                  <li><strong>• Web 3.0</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div
            className="text-dark flex-grow-1"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div className="row h-100 align-items-center g-0">
              <div className="col-md-2 d-flex justify-content-center">
                <img
                  src= {cuatro}
                  style={{ maxHeight: '18vh', width: 'auto' }}
                  alt="Proyecto final"
                />
              </div>
              <div className="col-md-10 ps-3">
                <h3 className="fw-bold mb-1" style={{ color: 'black', fontSize: '4vh' }}>
                  PROYECTO FINAL
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '2.5vh',
                    lineHeight: 1.2
                  }}
                >
                  <li><strong>• Propuesta de valor</strong></li>
                  <li><strong>• Creación de valor</strong></li>
                  <li><strong>• Proyecto final</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaCarousel5;