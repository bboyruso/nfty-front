import { NavLink } from "react-router-dom";
import BurgerMenuStyled from "./BurgerMenuStyled";
import { useRef } from "react";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import { setFeedback } from "../../store/ui/feedbackSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";

const BurgerMenu = (): React.ReactElement => {
  const { removeLocalStorageItem } = useLocalStorage();
  const dispatch = useDispatch();
  const checkboxRef = useRef<HTMLInputElement>(null);
  const isAuthenticated = useAppSelector((state) => state.userStore.isLogged);

  const handleClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  const handleLogout = () => {
    removeLocalStorageItem("token");
    dispatch(logoutUserActionCreator());
    dispatch(
      setFeedback("You have been successfully logged out. See you next time!")
    );
    handleClick();
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
          <NavLink to="/" className="mobile-menu__link" onClick={handleClick}>
            Home
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink
                to="/create"
                className="mobile-menu__link"
                onClick={handleClick}
              >
                Create
              </NavLink>
              <button className="mobile-menu__link" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="mobile-menu__link"
                onClick={handleClick}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="mobile-menu__link"
                onClick={handleClick}
              >
                Register
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </BurgerMenuStyled>
  );
};

export default BurgerMenu;
