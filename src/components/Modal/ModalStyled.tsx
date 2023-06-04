import styled from "styled-components";

const ModalStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  width: 100%;
  gap: 20px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  margin: 20px 0;
  font-size: 22px;
  text-align: center;
  padding: 30px;

  &.error {
    border: 2px solid ${(props) => props.theme.colors.tertiary};
    svg {
      fill: ${(props) => props.theme.colors.tertiary};
      border: 1px solid ${(props) => props.theme.colors.tertiary};
    }
  }

  svg {
    fill: ${(props) => props.theme.colors.secondary};
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;

export default ModalStyled;
