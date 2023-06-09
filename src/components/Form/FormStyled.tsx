import styled from "styled-components";

const FormStyled = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #0000005e;
  gap: 15px;
  width: 100%;
  padding: 20px;

  input,
  textarea {
    border: 2px solid #00000085;
    border-radius: 7px;
    align-self: center;
    width: 100%;
  }

  label {
    font-size: 20px;
    text-align: left;
    align-self: flex-start;
  }

  input {
    height: 30px;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
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
  }

  textarea {
    min-height: 60px;
  }
`;

export default FormStyled;
