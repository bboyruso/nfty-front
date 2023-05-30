import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <NavLink to="/" className="brand-name">
        NFTIFY
      </NavLink>
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
