import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 100;
  text-align: center;
  padding: 10px 15px;
  box-shadow: 3px 4px 10px #00000096;
  border-radius: 30px;

  &.disabled {
    opacity: 70%;
    cursor: default;
  }

  @media only screen and (max-width: 340px) {
    padding: 10px;
  }

  @media only screen and (max-width: 380px) {
    font-size: 20px;
  }
`;

export default ButtonStyled;
