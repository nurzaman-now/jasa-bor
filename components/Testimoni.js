import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
// import react slick
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Kustomer 1",
      image: <FontAwesomeIcon icon={faUser} className="text-primary w-6 h-6" />,
      city: "Jakarta",
      country: "Indonesia",
      rating: "5",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      name: "Kustomer 2",
      image: <FontAwesomeIcon icon={faUser} className="text-primary w-6 h-6" />,
      city: "Bandung",
      country: "Indonesia",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      name: "Kustomer 3",
      image: <FontAwesomeIcon icon={faUser} className="text-primary w-6 h-6" />,
      city: "Surabaya",
      country: "Indonesia",
      rating: "4.3",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <div
        className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 scroll-mt-[100px]"
        id="testimoni"
      >
        <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full my-16">
            <ScrollAnimationWrapper>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
              >
                Testimonial
              </motion.h3>
              <motion.p
                variants={scrollAnimation}
                className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
              >
                Kualitas Berbicara Melalui Hasil, Bukan Janji.
              </motion.p>
            </ScrollAnimationWrapper>
          </div>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Slider
                {...settings}
                arrows={false}
                ref={setSliderRef}
                className="flex items-stretch justify-items-stretch"
              >
                {listTestimoni.map((listTestimonis, index) => (
                  <div className="px-3 flex items-stretch" key={index}>
                    <div className="border-2 border-gray-500 hover:border-primary transition-all rounded-lg p-8 flex flex-col">
                      <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                        <div className="flex order-2 xl:order-1">
                          {listTestimonis.image}
                          <div className="flex flex-col ml-5 text-left">
                            <p className="text-lg text-black-600 capitalize">
                              {listTestimonis.name}
                            </p>
                            <p className="text-sm text-black-500 capitalize">
                              {listTestimonis.city},{listTestimonis.country}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                          <p className="text-sm">{listTestimonis.rating}</p>
                          <span className="flex ml-4">
                            <FontAwesomeIcon
                              icon={faStar}
                              className="text-primary w-4 h-4"
                            />
                          </span>
                        </div>
                      </div>
                      <p className="mt-5 text-left">
                        “{listTestimonis.testimoni}”.
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
              {listTestimoni.length > 3 && (
                <div className="flex w-full items-center justify-end">
                  <div className="flex flex-none justify-between w-auto mt-14">
                    <div
                      className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary border hover:bg-primary hover:text-white-500 transition-all text-primary cursor-pointer"
                      onClick={sliderRef?.slickPrev}
                    >
                      <ArrowBack className="h-6 w-6 " />
                    </div>
                    <div
                      className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary border hover:bg-primary hover:text-white-500 transition-all text-primary cursor-pointer"
                      onClick={sliderRef?.slickNext}
                    >
                      <ArrowNext className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
