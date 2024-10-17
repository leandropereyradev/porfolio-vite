import Bar from "./Bar";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav>
      {/* Mobile Menu */}
      <HamburgerMenu />

      {/* Nav Bar */}
      <Bar />
    </nav>
  );
};

export default Navbar;
