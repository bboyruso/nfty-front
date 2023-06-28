import Button from "../../components/Button/Button";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <Button text="Login" />
    </LoginPageStyled>
  );
};

export default LoginPage;
