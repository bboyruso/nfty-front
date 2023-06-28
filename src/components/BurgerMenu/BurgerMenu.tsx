import { NavLink } from "react-router-dom";
import BurgerMenuStyled from "./BurgerMenuStyled";
import { useRef } from "react";

const BurgerMenu = (): React.ReactElement => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <BurgerMenuStyled className="mobile-menu">
      <input
        ref={checkboxRef}
        type="checkbox"
        id="checkbox"
        className="mobile-menu__checkbox"
      ></input>
      <label htmlFor="checkbox" className="mobile-menu__btn">
        <div className="mobile-menu__icon"></div>
      </label>
      <div className="mobile-menu__container">
        <ul className="mobile-menu__list">
          <NavLink
            to="/create"
            className="mobile-menu__link"
            onClick={handleClick}
          >
            Create
          </NavLink>
          <NavLink to="/" className="mobile-menu__link" onClick={handleClick}>
            Home
          </NavLink>
          <NavLink
            to="/login"
            className="mobile-menu__link"
            onClick={handleClick}
          >
            Login
          </NavLink>
        </ul>
      </div>
    </BurgerMenuStyled>
  );
};

export default BurgerMenu;
