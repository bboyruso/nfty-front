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

  h1 {
    font-size: ${(props) => props.theme.fontSizes.large};
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 400;
  }

  label {
    font-size: 20px;
    align-self: flex-start;
  }

  input {
    height: 40px;
    margin-bottom: 15px;
    border-radius: 30px;
  }

  textarea {
    min-height: 150px;
    margin-bottom: 15px;
    border-radius: 20px;
  }

  input,
  textarea {
    padding: 10px 10px;
    border: 2px solid #00000026;
    width: 100%;
    background-color: ${(props) => props.theme.colors.fifth};
  }

  input:focus {
    background-color: ${(props) => props.theme.colors.light};
  }

  .description:focus {
    background-color: ${(props) => props.theme.colors.light};
  }

  input,
  textarea,
  textarea::placeholder {
    text-align: left;
  }

  textarea::placeholder:focus {
    background-color: ${(props) => props.theme.colors.light};
  }

  textarea {
    padding: 10px;
  }

  @media screen and (min-width: 500px) {
    gap: 20px;
    max-width: 400px;

    input,
    textarea {
      font-size: 18px;
    }
  }

  textarea {
    background-color: ${(props) => props.theme.colors.fifth};
  }
`;

export default FormStyled;
