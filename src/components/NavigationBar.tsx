"use client";

import menuLogo from "../assets/Menu.svg";
import closeMenuLogo from "../assets/CloseMenu.svg";
import { HashLink as Link } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const NavigationsBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <nav className="w-dvw h-fit flex items-center justify-center">
      {isMobile ? <NavigationsBarMobile /> : null}
    </nav>
  );
};

export default NavigationsBar;

const NavigationsBarMobile = () => {
  const [menuState, setMenuState] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const atTop = currentScrollY <= 0;
    const atBottom =
      window.innerHeight + currentScrollY >=
      document.documentElement.scrollHeight - 5;

    if (atTop || atBottom) {
      setShowNav(true);
    } else if (currentScrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.section
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-[90%] flex items-center justify-between pr-7.5 bg-white/50 backdrop-blur-xs border-2 border-white/40 shadow-lg fixed rounded-4xl top-2"
      >
        <div className="h-12.5 flex items-center">
          <img src="/protech-Logo.svg" alt="Protech Logo" className="h-full" />
          <p className="font-semibold text-2xl title">Protech</p>
        </div>
        <motion.img
          src={menuLogo}
          alt="Menu Icon"
          className="w-8.5 cursor-pointer"
          onClick={() => setMenuState(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.section>
      <AnimatePresence>
        {menuState && <Menu setMenuState={setMenuState} />}
      </AnimatePresence>
    </>
  );
};

const sidebarVariants: Variants = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

type MenuProps = {
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ setMenuState }: MenuProps) => {
  const links = [
    { id: 1, name: "Home", to: "#home" },
    { id: 2, name: "About", to: "#about" },
    { id: 3, name: "Work", to: "#work" },
    { id: 4, name: "Services", to: "#services" },
    { id: 5, name: "Contact", to: "#contact" },
  ];

  return (
    <motion.div
      key="menu"
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarVariants}
      className="fixed top-0 right-0 h-screen w-[80%] z-40 bg-[#0088FF] text-white p-6 flex flex-col items-center justify-center space-y-6"
    >
      <motion.img
        src={closeMenuLogo}
        alt="An X icon for menu closing"
        className="absolute top-10 right-10 w-10 cursor-pointer"
        onClick={() => setMenuState(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />
      <div className="h-[50%] w-[90%] flex flex-col items-start justify-between">
        {links.map(({ id, name, to }) => (
          <motion.div
            key={id}
            className="w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: id * 0.1 }}
          >
            <Link
              to={to}
              className="text-4xl"
              onClick={() => setMenuState(false)}
              smooth
            >
              {name}
            </Link>
            <div className="h-0.25 w-full bg-white"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
