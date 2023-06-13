import styled from "styled-components";

const NftsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media only screen and (min-width: 900px) {
    .nav-link {
      font-size: ${(props) => props.theme.fontSizes.medium};
      display: flex;
    }
  }
`;

export default NftsListStyled;
