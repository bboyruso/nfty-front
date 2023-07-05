import React from "react";
import { RegisterUserCredentials } from "../../types";
import useUser from "../../hooks/useUser/useUser";
import RegisterPageStyled from "./RegisterPageStyled";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";

const LoginPage = (): React.ReactElement => {
  const { registerUser } = useUser();

  const handleRegisterFormSubmit = async (
    userCredentials: RegisterUserCredentials
  ) => {
    await registerUser(userCredentials);
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
