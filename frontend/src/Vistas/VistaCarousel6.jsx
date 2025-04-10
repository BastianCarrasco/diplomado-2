import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptop, 
  faClock, 
  faCalendarAlt, 
  faFileAlt, 
  faDollarSign, 
  faPercent, 
  faTags, 
  faHandshake 
} from '@fortawesome/free-solid-svg-icons';

const VistaCarousel6 = ({ src, alt, isActive }) => {
  return (
    <div className={`carousel-item position-relative vh-100 ${isActive ? 'active' : ''}`}>
      {/* Background Image */}
      <div 
        className="position-absolute w-100 h-100" 
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Main Container */}
        <div className="h-100 p-4 d-flex flex-column">
          {/* Title with yellow background */}
          <div className="position-relative mb-4" style={{ width: 'fit-content' }}>
            <div className="position-absolute w-100 h-100 bg-warning" style={{ opacity: 0.8, zIndex: 0 }}></div>
            <h1 className="position-relative text-white px-3 py-2" style={{ 
              zIndex: 1, 
              fontSize: '2.5rem', 
              fontWeight: 'bold' 
            }}>
              INFORMACIÓN GENERAL
            </h1>
          </div>
          
          {/* Main Content */}
          <div className="row flex-grow-1" style={{ alignItems: 'stretch' }}>
            {/* Column 1 */}
            <div className="col-md-6">
              <div className="d-flex flex-column gap-4">
                {/* Modality */}
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '55px', height: '55px' }}>
                    <FontAwesomeIcon icon={faLaptop} style={{ color: 'black', fontSize: '2.5rem' }} />
                  </div>
                  <div className="ms-3 text-white">
                    <h3 className="mb-1" style={{ fontSize: '1.5rem' }}>Modalidad</h3>
                    <p className="mb-0">• Clases online sincrónicas (vía Zoom)</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '55px', height: '55px' }}>
                    <FontAwesomeIcon icon={faClock} style={{ color: 'black', fontSize: '2.5rem' }} />
                  </div>
                  <div className="ms-3 text-white">
                    <h3 className="mb-1" style={{ fontSize: '1.5rem' }}>Duración</h3>
                    <p className="mb-0">• 3 meses, 90 horas cronológicas</p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '55px', height: '55px' }}>
                    <FontAwesomeIcon icon={faCalendarAlt} style={{ color: 'black', fontSize: '2.5rem' }} />
                  </div>
                  <div className="ms-3 text-white">
                    <h3 className="mb-1" style={{ fontSize: '1.5rem' }}>Horarios</h3>
                    <p className="mb-0">• Martes y jueves de 18:30 a 21:00 horas</p>
                  </div>
                </div>

                {/* Requirements */}
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '55px', height: '55px' }}>
                    <FontAwesomeIcon icon={faFileAlt} style={{ color: 'black', fontSize: '2.5rem' }} />
                  </div>
                  <div className="ms-3 text-white">
                    <h3 className="mb-1" style={{ fontSize: '1.5rem' }}>Requisitos y documentos para postular</h3>
                    <p className="mb-0">• Persona en posesión de título profesional, licenciatura o técnico de nivel superior.</p>
                    <p className="mb-0">• Copia de título o licenciatura.</p>
                    <p className="mb-0">• Currículum vitae actualizado.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-6">
              <div className="d-flex flex-column gap-4">
                {/* Price */}
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '55px', height: '55px' }}>
                    <FontAwesomeIcon icon={faDollarSign} style={{ color: 'black', fontSize: '2.5rem' }} />
                  </div>
                  <div className="ms-3 text-white">
                    <h3 className="mb-1" style={{ fontSize: '1.5rem' }}>Valor</h3>
                    <p className="mb-0">• $1.500.000 (USD 1.500 dólares)</p>
                  </div>
                </div>

                {/* Discounts */}
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '55px', height: '55px' }}>
                    <FontAwesomeIcon icon={faPercent} style={{ color: 'black', fontSize: '2.5rem' }} />
                  </div>
                  <div className="ms-3 text-white">
                    <h3 className="mb-1" style={{ fontSize: '1.5rem' }}>Descuento de arancel</h3>
                    <p className="mb-0">• 20% mujeres que innovan</p>
                    <p className="mb-0">• 20% alumnos internacionales</p>
                    <p className="mb-0">• 20% ALUMNI PUCV</p>
                    <p className="mb-0">• 30% académicos/as y funcionarios/as PUCV</p>
                  </div>
                </div>

                {/* Additional Discount */}
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '55px', height: '55px' }}>
                    <FontAwesomeIcon icon={faTags} style={{ color: 'black', fontSize: '2.5rem' }} />
                  </div>
                  <div className="ms-3 text-white">
                    <h3 className="mb-1" style={{ fontSize: '1.5rem' }}>Descuento de arancel adicional</h3>
                    <p className="mb-0">• Matrícula temprana</p>
                    <p className="mb-0 fw-bold" style={{ color: 'white' }}>Fecha de plazo: 30/05/25</p>
                  </div>
                </div>

                {/* Agreements */}
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '55px', height: '55px' }}>
                    <FontAwesomeIcon icon={faHandshake} style={{ color: 'black', fontSize: '2.5rem' }} />
                  </div>
                  <div className="ms-3 text-white">
                    <h3 className="mb-1" style={{ fontSize: '1.5rem' }}>Convenios con empresas</h3>
                    <p className="mb-0">Para más información, contáctese con nuestros ejecutivos al +569 72478601</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Yellow rectangle with additional info */}
          <div className="position-absolute bottom-0 end-0 m-3">
            <div className="d-inline-block bg-warning p-3 rounded" style={{ 
              opacity: 0.9, 
              width: 'fit-content' 
            }}>
              <p className="mb-1 fw-bold" style={{ color: 'black', display: 'inline' }}>
                • Descuentos no acumulables
              </p>
              <br />
              <p className="mb-0 fw-bold" style={{ color: 'black', display: 'inline' }}>
                • Experiencia o intereses relevantes en el área del conocimiento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaCarousel6;
