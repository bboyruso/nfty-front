import styled from "styled-components";

const HeaderStyled = styled.header`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  box-shadow: 3px 4px 10px #435fc45e;

  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  .brand-name {
    letter-spacing: 2px;
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.colors.dark};
  }
`;

export default HeaderStyled;
