import { useState } from "react";
import { UserCredentials } from "../../types";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  onLoginFormSubmit: (formData: UserCredentials) => void;
  isLoading: boolean;
}

const LoginForm = ({
  onLoginFormSubmit,
  isLoading,
}: LoginFormProps): React.ReactElement => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const isButtonDisabled =
    formData.username.length < 1 || formData.password.length < 1;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleLoginFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoginFormSubmit(formData);
  };

  return (
    <LoginFormStyled onSubmit={handleLoginFormSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Enter Username"
        name="username"
        required
        value={formData.username}
        onChange={handleInputChange}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter Password"
        name="password"
        required
        value={formData.password}
        onChange={handleInputChange}
      />

      <Button
        text="Login"
        isDisabled={isButtonDisabled}
        isLoading={isLoading}
      />
    </LoginFormStyled>
  );
};

export default LoginForm;
