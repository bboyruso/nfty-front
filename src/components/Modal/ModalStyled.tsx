import styled from "styled-components";

const ModalStyled = styled.button`
  position: fixed;
  top: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 2px solid ${(props) => props.theme.colors.light};
  margin: 20px 0;
  font-size: 22px;
  text-align: center;
  padding: 8px;
  border-radius: 10px;
  align-self: center;
  margin: 0 auto;
  color: white;
  padding: 25px;
  background-color: #000000e2;

  span:nth-child(2) {
    border: 1px solid #ffffff;
    padding: 10px;
    border-radius: 4px;
  }

  &.error {
    border: 2px solid ${(props) => props.theme.colors.tertiary};
    svg {
      fill: ${(props) => props.theme.colors.tertiary};
      border: 5px solid ${(props) => props.theme.colors.tertiary};
      border-radius: 7px;
    }
  }

  svg {
    fill: ${(props) => props.theme.colors.secondary};
    border: 3px solid ${(props) => props.theme.colors.light};
    border-radius: 4px;
  }
`;

export default ModalStyled;
