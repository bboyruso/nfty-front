import { useState } from "react";
import { RegisterUserCredentials } from "../../types";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

interface RegisterFormProps {
  onRegisterFormSubmit: (formData: RegisterUserCredentials) => void;
}

const RegisterForm = ({
  onRegisterFormSubmit,
}: RegisterFormProps): React.ReactElement => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const isButtonDisabled =
    formData.username.length < 1 ||
    formData.password.length < 1 ||
    formData.email.length < 1;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleRegisterFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    onRegisterFormSubmit(formData);
  };

  return (
    <RegisterFormStyled onSubmit={handleRegisterFormSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        required
        autoComplete="off"
        value={formData.username}
        onChange={handleInputChange}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        required
        autoComplete="off"
        value={formData.password}
        onChange={handleInputChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        autoComplete="off"
        value={formData.email}
        onChange={handleInputChange}
      />

      <Button text="Register" isDisabled={isButtonDisabled} />
    </RegisterFormStyled>
  );
};

export default RegisterForm;
