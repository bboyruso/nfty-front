import { NavLink } from "react-router-dom";

import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <NavLink to="/create" className="nav-link">
        Create
      </NavLink>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
    </NavbarStyled>
  );
};

export default Navbar;
