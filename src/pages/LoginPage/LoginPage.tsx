import React from "react";
import LoginPageStyled from "./LoginPageStyled";
import LoginForm from "../../components/LoginForm/LoginForm";
import { UserCredentials } from "../../types";
import useUser from "../../hooks/useUser/useUser";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { useAppDispatch } from "../../store";
import useToken from "../../hooks/useToken/useToken";

const LoginPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setLocalStorageItem } = useLocalStorage();
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();

  const handleLoginFormSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      setLocalStorageItem("token", token);
      const userSessionData = getTokenData(token);
      dispatch(loginUserActionCreator({ ...userSessionData, token }));
      navigate("/", { replace: true });
    }
  };

  return (
    <LoginPageStyled>
      <h1>Log in to NFTIFY</h1>
      <LoginForm onLoginFormSubmit={handleLoginFormSubmit} />
      <span>
        {"Don't have an account ?  "}
        <Link to="/register" className="login-link">
          Create One
        </Link>
      </span>
    </LoginPageStyled>
  );
};

export default LoginPage;
