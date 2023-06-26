import styled from "styled-components";

const FilterStyled = styled.div`
  display: flex;
  gap: 30px;

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 340px) {
    gap: 15px;
  }
`;
export default FilterStyled;
