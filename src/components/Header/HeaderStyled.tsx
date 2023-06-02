import styled from "styled-components";

const HeaderStyled = styled.header`
  border-bottom: 1px solid #000;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  .brand-name {
    letter-spacing: 2px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 54px;
    color: #000000;
  }

  @media only screen and (max-width: 430px) {
    .brand-name {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 54px;
      color: #000000;
    }
  }

  @media only screen and (max-width: 360px) {
    padding: 0;

    .brand-name {
      letter-spacing: 1px;
      font-size: 20px;
    }
  }
`;

export default HeaderStyled;
