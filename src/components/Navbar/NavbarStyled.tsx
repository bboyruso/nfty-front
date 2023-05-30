import styled from "styled-components";

const NavbarStyled = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  .nav-link {
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
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 430px) {
    gap: 15px;
    .nav-link {
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.light};
      font-size: ${(props) => props.theme.fontSizes.medium};

      width: 80px;
      height: 40px;
      font-weight: 700;
      font-size: 20px;
      line-height: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default NavbarStyled;
