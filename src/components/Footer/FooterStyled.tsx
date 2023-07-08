import styled from "styled-components";

const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.fontSizes.smaller};
`;

export default FooterStyled;
