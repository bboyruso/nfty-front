import styled from "styled-components";

const NftsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 45px;

  @media only screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .nav-link {
      font-size: ${(props) => props.theme.fontSizes.medium};
      display: flex;
    }
  }
`;

export default NftsListStyled;
