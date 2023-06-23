import Button from "../Button/Button";
import FilterStyled from "./FiterStyled";

const Filter = (): React.ReactElement => {
  return (
    <FilterStyled>
      <Button text="< 1 ETH" />
      <Button text="1 - 5 ETH" />
      <Button text="> 5 ETH" />{" "}
    </FilterStyled>
  );
};

export default Filter;
