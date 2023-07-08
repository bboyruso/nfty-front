import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  background-color: ${(props) => props.theme.colors.fifth};
  box-shadow: 3px 4px 10px #435fc45e;
  padding: 15px;
  width: 100%;
  max-width: 400px;
`;

export default PaginationStyled;
