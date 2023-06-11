import styled from "styled-components";

const LoadingStyled = styled.div`
  z-index: 10;
  height: 100%;
  align-self: center;
  width: 100%;
  position: absolute;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffffcf;

  .lds-ripple {
    position: fixed;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid ${(props) => props.theme.colors.primary};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.1, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

export default LoadingStyled;
