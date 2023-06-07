import styled from "styled-components";

const ModalStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  margin: 20px 0;
  font-size: 22px;
  text-align: center;
  padding: 8px;
  border-radius: 10px;
  align-self: center;
  margin: 0 auto;
  color: white;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};

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
