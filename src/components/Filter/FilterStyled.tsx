import styled from "styled-components";

const FilterStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background-color: ${(props) => props.theme.colors.fifth};
  box-shadow: 3px 4px 10px #435fc45e;
  padding: 15px;
  width: 100%;
  max-width: 400px;

  @media only screen and (max-width: 340px) {
    gap: 15px;
  }
`;
export default FilterStyled;
