import React, { useMemo, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const defaultSlides = [
  {
    src: "/assets/gallery/image-1.jpg",
    alt: "layanan pompa air",
  },
  {
    src: "/assets/gallery/image-2.jpg",
    alt: "layanan pompa air",
  },
  {
    src: "/assets/gallery/image-3.jpg",
    alt: "layanan pompa air",
  },
  {
    src: "/assets/gallery/image-4.jpg",
    alt: "layanan pompa air",
  },
];

const GalleryCarousel = ({ slides = defaultSlides }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [sliderRef, setSliderRef] = useState(null);

  const slideCount = slides.length;
  // Jangan pernah slidesToShow > jumlah slide: Slick + infinite akan mengkloning slide → tampak “double”
  const showDesktop = Math.min(5, Math.max(slideCount, 1));
  const showTablet = Math.min(3, Math.max(slideCount, 1));

  // Laptop/desktop (≥1024px): sampai 5 slide; tablet (<1024px): sampai 3; mobile (<640px): 1
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: slideCount > showDesktop,
      speed: 500,
      slidesToShow: showDesktop,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: slideCount > 1,
      autoplaySpeed: 5500,
      pauseOnHover: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: showTablet,
            slidesToScroll: 1,
            infinite: slideCount > showTablet,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: slideCount > 1,
            adaptiveHeight: true,
          },
        },
      ],
      customPaging: () => (
        <span className="mx-1 inline-block h-2.5 w-2.5 rounded-full bg-white-500 transition-all" />
      ),
      appendDots: (dots) => (
        <div>
          <ul className="mt-6 flex justify-center gap-0 flex-wrap">{dots}</ul>
        </div>
      ),
    }),
    [slideCount],
  );

  return (
    <section
      className="w-full py-14 bg-gradient-to-b scroll-mt-[100px]"
      id="gallery"
      aria-label="Galeri dokumentasi pekerjaan"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-center"
          >
            Galeri
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-black-500"
          >
            Dokumentasi visual pekerjaan dan layanan kami.
          </motion.p>
        </ScrollAnimationWrapper>

        <div className="relative mt-10 px-1 sm:px-4 lg:px-2">
          <Slider {...settings} ref={setSliderRef} className="gallery-slick">
            {slides.map((slide, index) => (
              <div
                key={`${index}-${slide.src}`}
                className="px-1 sm:px-1.5 lg:px-2 outline-none h-auto"
              >
                <div className="relative w-full max-w-xs sm:max-w-none mx-auto rounded-xl overflow-hidden border-2 border-gray-500 bg-gray-100 shadow-sm">
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "133.333%" }}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        layout="fill"
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 85vw, (max-width: 1023px) 32vw, 20vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
                {slide.caption ? (
                  <p className="text-center mt-3 text-black-500 text-xs sm:text-sm px-1">
                    {slide.caption}
                  </p>
                ) : null}
              </div>
            ))}
          </Slider>

          <div className="flex justify-center gap-4 mt-8">
            <button
              type="button"
              aria-label="Slide sebelumnya"
              className="flex items-center justify-center h-12 w-12 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white-500 transition-all shadow-sm"
              onClick={() => sliderRef?.slickPrev()}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Slide berikutnya"
              className="flex items-center justify-center h-12 w-12 rounded-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white-500 transition-all shadow-sm"
              onClick={() => sliderRef?.slickNext()}
            >
              <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
