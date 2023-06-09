import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: "Inter";
  width: 100px;
  height: 50px;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  text-align: center;

  &.disabled {
    opacity: 50%;
    cursor: not-allowed;
  }
`;

export default ButtonStyled;
