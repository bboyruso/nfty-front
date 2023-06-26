import Button from "../Button/Button";
import FilterStyled from "./FilterStyled";

interface FilterProps {
  onClickButtonOne: () => void;
  onClickButtonTwo: () => void;
  onClickButtonThree: () => void;
  onClickButtonFour: () => void;
}

const Filter = ({
  onClickButtonOne,
  onClickButtonTwo,
  onClickButtonThree,
  onClickButtonFour,
}: FilterProps): React.ReactElement => {
  return (
    <FilterStyled>
      <Button onClick={onClickButtonOne} text="< 1 ETH" />
      <Button onClick={onClickButtonTwo} text="1 - 5 ETH" />
      <Button onClick={onClickButtonThree} text="> 5 ETH" />
      <Button onClick={onClickButtonFour} text="All" />
    </FilterStyled>
  );
};

export default Filter;
