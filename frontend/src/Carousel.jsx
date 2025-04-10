import React, { useState } from "react";
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
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const slides = [
    { component: VistaCarousel, src: slide1, alt: "Vista 1" },
    { component: VistaCarousel1, src: slide2, alt: "Vista 2" },
    { component: VistaCarousel2, src: slide3, alt: "Vista 3" },
    { component: VistaCarousel3, src: slide4, alt: "Vista 4" },
    { component: VistaCarousel4, src: slide5, alt: "Vista 5" },
    { component: VistaCarousel5, src: slide6, alt: "Vista 6" },
    { component: VistaCarousel6, src: slide7, alt: "Vista 7" }
  ];

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

  return (
    <div className="position-relative w-full overflow-hidden" style={{ height: "100vh" }}>
      <AnimatePresence custom={direction} initial={false}>
        {slides.map((slide, index) => (
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

      {/* Controles del carrusel */}
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
    </div>
  );
};

export default Carousel;