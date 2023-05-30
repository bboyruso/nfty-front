import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.fontSizes.medium};
  width: 100px;
  height: 50px;
`;

export default ButtonStyled;
