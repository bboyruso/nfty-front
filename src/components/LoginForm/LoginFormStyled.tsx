import styled from "styled-components";

const LoginFormStyled = styled.form`
  width: 200px;
  height: 400px;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  input {
    padding: 10px 10px;
    border: 2px solid #00000026;
    width: 100%;
    background-color: ${(props) => props.theme.colors.fifth};
    border-radius: 30px;
  }

  textarea:focus,
  input:focus {
    background-color: ${(props) => props.theme.colors.light};
    outline: ${(props) => props.theme.colors.light};
  }

  label {
    align-self: baseline;
  }

  button {
    margin-top: 30px;
  }
`;

export default LoginFormStyled;
