import styled from "styled-components";

const NftCardStyled = styled.div`
  background-color: ${(props) => props.theme.colors.fifth};
  box-shadow: 3px 4px 10px #435fc45e;
  max-width: 300px;
  .card-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: left;
  }

  span:nth-child(2) {
    font-size: 20px;
    color: #000000a6;
  }

  span:nth-child(1) {
    text-transform: capitalize;
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  .price {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    font-size: 30px;
  }

  img {
    padding: 15px;
    min-width: 100%;
    height: auto;
    aspect-ratio: 1/1;
  }

  span h2 {
    font-size: 15px;
    padding: 0 5px;
  }
`;

export default NftCardStyled;
