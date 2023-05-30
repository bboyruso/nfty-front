import styled from "styled-components";

const HeaderStyled = styled.header`
  border-bottom: 1px solid #000;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .brand-name {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 54px;
    color: #000000;
  }
`;

export default HeaderStyled;
