import { NavLink } from "react-router-dom";

import NavbarStyled from "./NavbarStyled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <NavLink to="/create" className="nav-link">
        Create
      </NavLink>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <BurgerMenu></BurgerMenu>
    </NavbarStyled>
  );
};

export default Navbar;
