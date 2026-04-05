import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import Logo from "../../public/assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faImages,
  faInfo,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

/** Jarak dari tepi atas viewport untuk semua anchor scroll (react-scroll: nilai negatif). */
const NAV_SCROLL_OFFSET = -100;

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Logo className="h-8 w-auto" />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-primary animation-active "
                  : " text-black-500 hover:text-primary ")
              }
            >
              Tentang Kami
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-primary animation-active "
                  : " text-black-500 hover:text-primary ")
              }
            >
              Layanan Kami
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="reason"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("reason");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "reason"
                  ? " text-primary animation-active "
                  : " text-black-500 hover:text-primary ")
              }
            >
              Alasan
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="problems-solution"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("problems-solution");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "problems-solution"
                  ? " text-primary animation-active "
                  : " text-black-500 hover:text-primary ")
              }
            >
              Masalah & Solusi
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("gallery");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "gallery"
                  ? " text-primary animation-active "
                  : " text-black-500 hover:text-primary ")
              }
            >
              Galeri
            </LinkScroll>
            {/* <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-primary animation-active "
                  : " text-black-500 hover:text-primary ")
              }
            >
              Testimoni
            </LinkScroll> */}
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("contact");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "contact"
                  ? " text-primary animation-active "
                  : " text-black-500 hover:text-primary ")
              }
            >
              Hubungi Kami
            </LinkScroll>
          </ul>
          {/* <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-primary transition-all">
                  Sign In
              </a>
            </Link>
            <ButtonOutline>Sign Up</ButtonOutline>
          </div> */}
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-0 shadow-t">
        <div className="bg-white-500 w-full">
          <ul
            className="
            flex w-full items-end text-black-500 overflow-x-auto no-scrollbar
            justify-center
            "
          >
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "flex-1 min-w-[54px] max-w-[70px] flex-shrink-0 mx-0 px-1 py-2 flex flex-col items-center text-[10px] border-t-2 transition-all text-center whitespace-nowrap" +
                (activeLink === "about"
                  ? " border-primary text-primary"
                  : " border-transparent")
              }
            >
              <FontAwesomeIcon icon={faInfo} className="w-5 h-5" />
              Tentang
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "flex-1 min-w-[54px] max-w-[70px] flex-shrink-0 mx-0 px-1 py-2 flex flex-col items-center text-[10px] border-t-2 transition-all text-center whitespace-nowrap" +
                (activeLink === "feature"
                  ? " border-primary text-primary"
                  : " border-transparent")
              }
            >
              <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5" />
              Layanan
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="reason"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("reason");
              }}
              className={
                "flex-1 min-w-[54px] max-w-[70px] flex-shrink-0 mx-0 px-1 py-2 flex flex-col items-center text-[10px] border-t-2 transition-all text-center whitespace-nowrap" +
                (activeLink === "reason"
                  ? " border-primary text-primary"
                  : " border-transparent")
              }
            >
              <FontAwesomeIcon icon={faCircleQuestion} className="w-5 h-5" />
              Alasan
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("gallery");
              }}
              className={
                "flex-1 min-w-[54px] max-w-[70px] flex-shrink-0 mx-0 px-1 py-2 flex flex-col items-center text-[10px] border-t-2 transition-all text-center whitespace-nowrap" +
                (activeLink === "gallery"
                  ? " border-primary text-primary"
                  : " border-transparent")
              }
            >
              <FontAwesomeIcon icon={faImages} className="w-5 h-5" />
              Galeri
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              offset={NAV_SCROLL_OFFSET}
              onSetActive={() => {
                setActiveLink("contact");
              }}
              className={
                "flex-1 min-w-[54px] max-w-[70px] flex-shrink-0 mx-0 px-1 py-2 flex flex-col items-center text-[10px] border-t-2 transition-all text-center whitespace-nowrap" +
                (activeLink === "contact"
                  ? " border-primary text-primary"
                  : " border-transparent")
              }
            >
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
              Hubungi Kami
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
