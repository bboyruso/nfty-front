import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: "Roboto";
  font-weight: 100;
  text-align: center;
  padding: 15px;
  letter-spacing: 1.1px;
  box-shadow: 3px 4px 10px #00000096;

  &.disabled {
    opacity: 50%;
    cursor: default;
  }
`;

export default ButtonStyled;
