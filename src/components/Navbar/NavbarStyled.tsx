import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  gap: 20px;
  font-size: ${(props) => props.theme.fontSizes.medium};

  .active {
  }

  .nav-link {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: "Roboto";
    font-weight: 700;
    line-height: 27px;
    padding: 10 0px;
    display: flex;
  }

  @media only screen and (max-width: 430px) {
    gap: 15px;
    .nav-link {
      font-size: ${(props) => props.theme.fontSizes.medium};
      display: flex;
    }
  }
`;

export default NavbarStyled;
