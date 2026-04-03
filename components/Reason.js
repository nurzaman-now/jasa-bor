import React, { useMemo } from "react";
import Testimoni from "./Testimoni";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { MapPinIcon, Building2Icon, HammerIcon, ClockIcon } from "lucide-react";

const Reason = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const reasons = [
    {
      icon: <MapPinIcon className="text-orange-500 w-16 h-16" />,
      title: "Jangkauan Layanan Luas",
      description:
        "Kami siap melayani kebutuhan Anda di berbagai wilayah dengan respon yang cepat.",
    },
    {
      icon: <Building2Icon className="text-orange-500 w-16 h-16" />,
      title: "Solusi untuk Rumah & Kantor",
      description:
        "Melayani perbaikan dan pemasangan pompa air baik untuk skala hunian maupun operasional bisnis.",
    },
    {
      icon: <HammerIcon className="text-orange-500 w-16 h-16" />,
      title: "Teknisi Ahli & Berpengalaman",
      description:
        "Didukung oleh mekanik handal dengan sertifikasi keahlian dan jam terbang tinggi.",
    },
    {
      icon: <ClockIcon className="text-orange-500 w-16 h-16" />,
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
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="reason"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
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
                    className="flex flex-col justify-center items-center border-2 border-orange-500 bg-white rounded-xl py-10 px-4 w-full h-full min-h-[360px]" // Atur tinggi minimum agar semua card sama tinggi
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
        <div className="flex flex-col w-full my-16">
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
              Kami memahami bahwa setiap masalah memiliki solusi yang berbeda.
              Oleh karena itu, kami selalu berusaha untuk memberikan solusi yang
              tepat dan efisien untuk setiap masalah yang Anda hadapi.
            </motion.p>
          </ScrollAnimationWrapper>
          <div
            className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="problems-solution"
          >
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-16">
              <ScrollAnimationWrapper>
                <motion.div
                  className="flex flex-col ml-auto w-full justify-center"
                  variants={scrollAnimation}
                >
                  <p className="text-1xl lg:text-2xl font-medium leading-relaxed text-black-600 text-left">
                    Masalah Pompa Air Yang Sering Terjadi
                  </p>
                  <ul className="text-black-500 self-start list-inside ml-8">
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
                        {problem}
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
                  <ul className="text-black-500 self-start list-inside ml-8">
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
                        {solution}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
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
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Reason;
