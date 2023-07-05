import React from "react";
import { RegisterUserCredentials } from "../../types";
import useUser from "../../hooks/useUser/useUser";
import RegisterPageStyled from "./RegisterPageStyled";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const LoginPage = (): React.ReactElement => {
  const { registerUser } = useUser();

  const handleRegisterFormSubmit = async (
    userCredentials: RegisterUserCredentials
  ) => {
    await registerUser(userCredentials);
  };

  return (
    <RegisterPageStyled>
      <h1>Register</h1>
      <RegisterForm onRegisterFormSubmit={handleRegisterFormSubmit} />
    </RegisterPageStyled>
  );
};

export default LoginPage;
