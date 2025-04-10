import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import slide1 from "../src/assets/FOTO.jpg";
import slide2 from "../src/assets/slide2.png";
import slide3 from "../src/assets/slide3.png";
import slide4 from "../src/assets/slide4.png";
import slide5 from "../src/assets/slide5.png";
import slide6 from "../src/assets/slide6.png";
import slide7 from "../src/assets/slide7.png";
import VistaCarousel from "./Vistas/VistaCarousel";
import VistaCarousel1 from "./Vistas/VistaCarousel1";
import VistaCarousel2 from "./Vistas/VistaCarousel2";
import VistaCarousel3 from "./Vistas/VistaCarousel3";
import VistaCarousel4 from "./Vistas/VistaCarousel4";
import VistaCarousel5 from "./Vistas/VistaCarousel5";
import VistaCarousel6 from "./Vistas/VistaCarousel6";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    { component: VistaCarousel, src: slide1, alt: "Vista 1" },
    { component: VistaCarousel1, src: slide2, alt: "Vista 2" },
    { component: VistaCarousel2, src: slide3, alt: "Vista 3" },
    { component: VistaCarousel3, src: slide4, alt: "Vista 4" },
    { component: VistaCarousel4, src: slide5, alt: "Vista 5" },
    { component: VistaCarousel5, src: slide6, alt: "Vista 6" },
    { component: VistaCarousel6, src: slide7, alt: "Vista 7" }
  ];

  // Simulamos la carga de recursos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Ajusta este tiempo según necesites

    return () => clearTimeout(timer);
  }, []);

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  // Spinner de carga
  const LoadingSpinner = () => (
    <div className="position-absolute top-0 left-0 w-full h-full d-flex justify-content-center align-items-center bg-dark"
      style={{ zIndex: 20 }}>
      <div className="spinner-border text-warning" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );

  return (
    <div className="position-relative w-full overflow-hidden" style={{ height: "100vh" }}>
      {isLoading && <LoadingSpinner />}

      <AnimatePresence custom={direction} initial={false}>
        {!isLoading && slides.map((slide, index) => (
          index === activeIndex && (
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="position-absolute w-full h-full"
            >
              <slide.component
                src={slide.src}
                alt={slide.alt}
                isActive={true}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Controles del carrusel - solo visibles cuando no está cargando */}
      {!isLoading && (
        <>
          <button
            className="position-absolute top-1/2 start-0 translate-middle-y btn btn-transparent rounded-circle p-3 m-3"
            onClick={goToPrev}
            style={{ zIndex: 10 }}
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="position-absolute top-1/2 end-0 translate-middle-y btn btn-transparent rounded-circle p-3 m-3"
            onClick={goToNext}
            style={{ zIndex: 10 }}
          >
            <span className="carousel-control-next-icon" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;