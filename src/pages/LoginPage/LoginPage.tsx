import React from "react";
import LoginPageStyled from "./LoginPageStyled";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h1>Welcome to NFTIFY</h1>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
