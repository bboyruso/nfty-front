import styled from "styled-components";

const NftCardStyled = styled.div`
  border: 1px solid #000;
  .card-info {
    display: grid;
    grid-template-areas:
      "title button"
      "author price";
    gap: 20px;
    width: 100%;
    padding: 15px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: left;
  }

  span:nth-child(1) {
    font-size: 20px;
  }

  span:nth-child(2) {
    justify-self: end;
  }

  button {
    justify-self: end;
  }

  @media only screen and (max-width: 380px) {
    .card-info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    span:nth-child(1) {
      font-size: 26px;
    }
  }
`;

export default NftCardStyled;
