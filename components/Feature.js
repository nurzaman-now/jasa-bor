import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const features = [
  "Jasa Bor Air Standar dengan kedalaman – /+ 30 M.",
  "Jasa Pasang Instalasi Saluran Air / Pasang Toren",
  "Jasa Pemasangan Filter Air dan Service",
  "Jasa Pengeboran arde / Penangkal Petir",
  "Jasa Service Mesin Pompa Air",
  //   "Service Pompa Air.",
  //   "Pengganti Sparepart Pompa Air.",
  //   "Service dan Pemasangan Filter Air.",
  //   "Konsultasi Kerusakan Pompa Air (Gratis).",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto scroll-mt-[100px]"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="Service Pompa Air Illustrasi 2"
              layout="responsive"
              quality={100}
              height={414}
              width={708}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <p className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              Layanan Kami
            </p>
            <p className="my-2 text-black-500">
              Kami menyediakan berbagai layanan pengeboran yang sesuai dengan
              kebutuhan Anda.
            </p>
            <ul className="text-black-500 self-start list-inside">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-primary w-4 h-4"
                    />
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
