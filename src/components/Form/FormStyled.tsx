import styled from "styled-components";

const FormStyled = styled.form`
  font-family: "Roboto";
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 20px;
  text-align: center;

  input,
  textarea {
    border: 2px solid #00000085;
    border-radius: 7px;
    width: 100%;
    text-align: left;
  }

  label {
    font-size: 20px;
    text-align: left;
    align-self: flex-start;
  }

  input {
    height: 32px;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 400;
  }

  textarea::placeholder {
    text-align: center;
  }

  @media screen and (min-width: 500px) {
    gap: 20px;

    max-width: 350px;

    input,
    textarea {
      font-size: 18px;
    }
  }

  input,
  textarea,
  textarea::placeholder {
    padding: 2px 10px;
    text-align: left;
  }

  textarea {
    min-height: 60px;
  }
`;

export default FormStyled;
