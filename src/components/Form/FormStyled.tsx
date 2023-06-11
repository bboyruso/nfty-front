import styled from "styled-components";

const FormStyled = styled.form`
  font-family: "Roboto";
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 20px;

  input,
  textarea {
    border: 2px solid #00000026;
    width: 100%;
    background-color: ${(props) => props.theme.colors.fifth};
  }

  textarea,
  input:focus {
    background-color: ${(props) => props.theme.colors.light};
  }

  label {
    font-size: 20px;
    align-self: flex-start;
  }

  input {
    height: 40px;
    margin-bottom: 15px;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 400;
  }

  textarea {
  }

  @media screen and (min-width: 500px) {
    gap: 20px;

    max-width: 400px;

    input,
    textarea {
      font-size: 18px;
    }
  }

  input,
  textarea,
  textarea::placeholder {
    padding: 2px 10px;
    font-size: ${(props) => props.theme.fontSizes.small};
    text-align: left;
  }

  textarea::placeholder {
    padding: 10px 0px;
  }

  textarea {
    min-height: 80px;
    margin-bottom: 15px;
    padding: 10px 10px;
  }
`;

export default FormStyled;
