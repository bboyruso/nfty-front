import React from "react";
import { RegisterUserCredentials, UserCredentials } from "../../types";
import useUser from "../../hooks/useUser/useUser";
import RegisterPageStyled from "./RegisterPageStyled";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { loginUserActionCreator } from "../../store/user/userSlice";

const LoginPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { registerUser } = useUser();
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const { setLocalStorageItem } = useLocalStorage();

  const handleLoginFormSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      setLocalStorageItem("token", token);
      const userSessionData = getTokenData(token);
      dispatch(loginUserActionCreator({ ...userSessionData, token }));
      navigate("/", { replace: true });
    }
  };

  const handleRegisterFormSubmit = async (
    userCredentials: RegisterUserCredentials
  ) => {
    const newUser = await registerUser(userCredentials);

    if (newUser) {
      const { username, password } = userCredentials;
      handleLoginFormSubmit({ username, password });
    }
  };

  return (
    <RegisterPageStyled>
      <h1>Create your NFTIFY account</h1>
      <RegisterForm onRegisterFormSubmit={handleRegisterFormSubmit} />
      <span>
        {"Already have an account ?  "}
        <Link to="/login" className="login-link">
          Log in
        </Link>
      </span>
    </RegisterPageStyled>
  );
};

export default LoginPage;
