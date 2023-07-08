import styled from "styled-components";

const RegisterPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;

  h1 {
    font-size: larger;
  }

  .login-link {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default RegisterPageStyled;
