import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faClock,
  faHammer,
  faLocationDot,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Reason = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const reasons = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faLocationDot}
          className="text-primary w-16 h-16"
        />
      ),
      title: "Jangkauan Layanan Luas",
      description:
        "Kami siap melayani kebutuhan Anda di berbagai wilayah dengan respon yang cepat.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faBuilding} className="text-primary w-16 h-16" />
      ),
      title: "Solusi untuk Rumah & Kantor",
      description:
        "Melayani perbaikan dan pemasangan pompa air baik untuk skala hunian maupun operasional bisnis.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faHammer} className="text-primary w-16 h-16" />
      ),
      title: "Teknisi Ahli & Berpengalaman",
      description:
        "Didukung oleh mekanik handal dengan sertifikasi keahlian dan jam terbang tinggi.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faClock} className="text-primary w-16 h-16" />
      ),
      title: "Pengerjaan Efisien & Tepat Waktu",
      description:
        "Kami menghargai waktu Anda dengan memberikan layanan yang cepat tanpa mengurangi kualitas hasil.",
    },
  ];

  const problems = [
    "Mesin Pompa Air hidup tapi tidak mengeluarkan air",
    "Mesin Pompa Air tidak hidup sama sekali",
    "Mesin Pompa Air nyala/hidup tapi air yang keluar kecil",
    "Pemasangan Mesin Pompa Air Baru",
    "Mesin Pompa Air Selalu Mancing",
  ];

  const solutions = [
    "Service Pompa Air",
    "Penggantian Spare Part Pompa Air",
    "Service dan Pemasangan Filter Air",
    "Konsultasi Kerusakan Pompa Air gratis",
    "Dan lain sebagainya",
  ];
  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full scroll-mt-[100px]" id="reason">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Kenapa Harus Kami?
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Kami menggunakan peralatan pengeboran terbaru yang mampu bekerja
              secara efisien di berbagai medan. Selain itu, setiap sparepart dan
              material yang kami gunakan memiliki standar kualitas tinggi demi
              ketahanan jangka panjang.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="flex flex-wrap justify-center gap-5 w-full">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[230px] max-w-xs mx-3 mb-6 flex"
              >
                <ScrollAnimationWrapper className="flex justify-center w-full">
                  <motion.div
                    variants={scrollAnimation}
                    className="flex flex-col justify-center items-center border-2 border-primary bg-white rounded-xl py-10 px-4 w-full h-full min-h-[360px]" // Atur tinggi minimum agar semua card sama tinggi
                    whileHover={{
                      scale: 1.07,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="p-4 flex items-center justify-center">
                      {reason.icon}
                    </div>
                    <p className="text-lg text-black-600 font-semibold my-2 text-center leading-snug">
                      {reason.title}
                    </p>
                    <p className="text-black-500 text-center text-sm">
                      {reason.description}
                    </p>
                  </motion.div>
                </ScrollAnimationWrapper>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col w-full my-16 scroll-mt-[100px]"
          id="problems-solution"
        >
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Masalah & Solusi
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              Serahkan masalah air Anda kepada tangan yang tepat. Kami
              mengedepankan <b>transparansi di setiap langkah</b>, mulai dari
              diagnosa hingga pengerjaan tuntas.{" "}
              <b>Kepercayaan Anda adalah prioritas kami</b>, itulah mengapa kami
              memastikan setiap solusi yang kami berikan adalah investasi jangka
              panjang yang aman bagi keluarga atau bisnis Anda.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto scroll-mt-[100px]">
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-16">
              <ScrollAnimationWrapper>
                <motion.div
                  className="flex flex-col ml-auto w-full justify-center"
                  variants={scrollAnimation}
                >
                  <p className="text-1xl lg:text-2xl font-medium leading-relaxed text-black-600 text-left">
                    Masalah Pompa Air Yang Sering Terjadi
                  </p>
                  <ul className="text-black-500 self-start list-inside">
                    {problems.map((problem, index) => (
                      <motion.li
                        className="relative circle-check custom-list text-left"
                        custom={{ duration: 2 + index }}
                        variants={scrollAnimation}
                        key={problem}
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
                          {problem}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper>
                <motion.div
                  className="flex flex-col ml-auto w-full justify-center"
                  variants={scrollAnimation}
                >
                  <p className="text-1xl lg:text-2xl font-medium leading-relaxed text-black-600 text-left">
                    Service Yang Kami Tawarkan
                  </p>
                  <ul className="text-black-500 self-start list-inside">
                    {solutions.map((solution, index) => (
                      <motion.li
                        className="relative circle-check custom-list text-left"
                        custom={{ duration: 2 + index }}
                        variants={scrollAnimation}
                        key={solution}
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
                          {solution}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
