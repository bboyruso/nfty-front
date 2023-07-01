import React from "react";
import LoginPageStyled from "./LoginPageStyled";
import LoginForm from "../../components/LoginForm/LoginForm";
import { UserCredentials } from "../../types";
import useUser from "../../hooks/useUser/useUser";
import { useNavigate } from "react-router-dom";

const LoginPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const { getUserToken } = useUser();

  const handleLoginFormSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);
    if (token) {
      navigate("/", { replace: true });
    }
  };

  return (
    <LoginPageStyled>
      <h1>Welcome to NFTIFY</h1>
      <LoginForm onLoginFormSubmit={handleLoginFormSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
