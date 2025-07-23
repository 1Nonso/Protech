import menuLogo from "../assets/Menu.svg";
import closeMenuLogo from "../assets/CloseMenu.svg";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const NavigationsBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <nav className="w-dvw h-fit flex items-center justify-center">
        {isMobile ? <NavigationsBarMobile /> : ""}
      </nav>
    </>
  );
};

export default NavigationsBar;

const NavigationsBarMobile = () => {
  const [menuState, setMenuState] = useState<true | false>(false);

  return (
    <>
      <section className="w-[90%] flex items-center justify-between pr-10 bg-white/50 backdrop-blur-xs border-2 border-white/40 shadow-lg fixed rounded-4xl top-2">
        <div className="h-12.5 flex items-center">
          <img src="/protech-Logo.svg" alt="Protech Logo" className="h-full" />
          <p className="font-semibold text-2xl title">Protech</p>
        </div>
        <img
          src={menuLogo}
          alt="Menu Icon"
          className="w-8.5"
          onClick={() => setMenuState(true)}
        />
      </section>
      {menuState ? <Menu setMenuState={setMenuState} /> : ""}
    </>
  );
};

type MenuProps = {
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ setMenuState }: MenuProps) => {
  return (
    <div className="fixed top-0 right-0 h-screen w-[80%] z-40 bg-[#0088FF] text-white p-6 flex flex-col items-center justify-center space-y-6">
      <img
        src={closeMenuLogo}
        alt="An X icon for menu closing"
        className="absolute top-10 right-10 w-10"
        onClick={() => {
          setMenuState(false);
        }}
      />
      <div className="h-[50%] w-[90%] flex flex-col items-start justify-between">
        <button className="text-4xl">home</button>
        <div className="h-0.25 w-full bg-white"></div>
        <button className="text-4xl">about</button>
        <div className="h-0.25 w-full bg-white"></div>
        <button className="text-4xl">work</button>
        <div className="h-0.25 w-full bg-white"></div>
        <button className="text-4xl">services</button>
        <div className="h-0.25 w-full bg-white"></div>
        <button className="text-4xl">contact</button>
      </div>
    </div>
  );
};
