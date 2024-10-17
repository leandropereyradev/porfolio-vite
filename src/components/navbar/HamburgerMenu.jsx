import { useState } from "react";
import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  const [menu, setMenu] = useState(false);

  const menuList = [
    {
      link: "/",
      name: "Inicio",
    },
    {
      link: "/portfolio",
      name: "Portfolio",
    },
    {
      link: "/about",
      name: "Sobre Mi",
    },
    {
      link: "/contact",
      name: "Contacto",
    },
  ];

  const isActiveLink = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-bold border-b-2 w-11/12 tracking-[0.2em] text-center py-2 md:text-xl"
      : "bg-transparent w-11/12 text-gray-50 tracking-[0.2em] text-center py-2 md:text-xl";

  return (
    <div className="fixed w-full">
      <div className="flex items-center justify-between text-gray-50 px-3 py-2 bg-principal lg:hidden">
        <div className="">
          <NavLink to="/" className="text-xl font-semibold tracking-[0.1em]">
            Leandro <span className="text-blue-400">Pereyra</span>
          </NavLink>
        </div>

        <div className="flex">
          <button onClick={() => setMenu(!menu)}>
            <img
              src="/assets/images/navbar/menu.svg"
              alt="menu"
              className="w-8"
            />
          </button>
        </div>
      </div>

      {menu && (
        <div className="absolute mx-auto left-0 right-0 w-11/12 transition-all top-20 flex flex-col gap-2 py-4 bg-principal rounded-sm border-blue-400 border-2 mt-4 lg:hidden">
          <div className="flex flex-col items-center gap-2 uppercase">
            {menuList.map((menu, i) => (
              <NavLink
                key={i}
                to={menu.link}
                onClick={() => setMenu(!menu)}
                className={isActiveLink}
              >
                {menu.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
