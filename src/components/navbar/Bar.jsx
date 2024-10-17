import { NavLink } from "react-router-dom";
import { useScrollPosition } from "../../hook/useScrollPosition";

const Bar = () => {
  const scrollPosition = useScrollPosition();

  const isActiveLink = ({ isActive }) => {
    const defaultStyle = " tracking-[0.2em] uppercase";

    return isActive
      ? "text-blue-400 font-bold" + defaultStyle
      : "hover:text-blue-300 hover:font-bold" + defaultStyle;
  };

  const defaultStyle =
    "hidden lg:visible fixed w-full transition-all lg:grid grid-cols-navbar text-gray-50 px-3 py-2 lg:pt-3";

  return (
    <div
      className={
        scrollPosition < 90 ? defaultStyle : defaultStyle + " bg-gray-900"
      }
    >
      <div className="flex justify-start items-center">
        <NavLink to="/" className="text-xl font-semibold tracking-[0.1em]">
          Leandro <span className="text-blue-400">Pereyra</span>
        </NavLink>
      </div>

      <div className="flex justify-end items-center gap-4 mr-6 lg:gap-12">
        <NavLink to="/" className={isActiveLink}>
          Inicio
        </NavLink>
        <NavLink to="/portfolio" className={isActiveLink}>
          Portfolio
        </NavLink>
        <NavLink to="/about" className={isActiveLink}>
          Sobre mi
        </NavLink>
        <NavLink to="/contact" className={isActiveLink}>
          Contacto
        </NavLink>
      </div>
    </div>
  );
};

export default Bar;
