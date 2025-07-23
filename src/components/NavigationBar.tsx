import menuLogo from "../assets/Menu.svg";
import { useMediaQuery } from "react-responsive";

const NavigationsBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return <>{isMobile ? <NavigationsBarMobile /> : ""}</>;
};

export default NavigationsBar;

const NavigationsBarMobile = () => {
  return (
    <>
      <nav className="w-dvw flex items-center justify-between pr-10">
        <div className="h-12.5 flex items-center">
          <img src="/protech-Logo.svg" alt="Protech Logo" className="h-full" />
          <p className="font-semibold text-2xl">Protech</p>
        </div>
        <img src={menuLogo} alt="Menu Icon" />
      </nav>
    </>
  );
};
