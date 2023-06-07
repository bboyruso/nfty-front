import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  input,
  textarea {
    border: 2px solid #00000085;
    border-radius: 7px;
    width: 90%;
  }

  label {
    font-size: 22px;
  }

  input {
    height: 30px;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 500px) {
    gap: 30px;

    input,
    textarea {
      width: 60%;
      max-width: 400px;
      font-size: 18px;
    }
  }

  input,
  textarea::placeholder {
    padding: 2px 10px;
  }

  textarea {
    min-height: 60px;
  }
`;

export default FormStyled;
