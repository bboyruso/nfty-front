import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: larger;
  }

  .login-link {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default LoginPageStyled;
