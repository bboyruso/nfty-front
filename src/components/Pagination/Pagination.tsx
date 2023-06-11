import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  nextPage: () => void;
  previousPage: () => void;
}

const Pagination = ({
  nextPage,
  previousPage,
}: PaginationProps): React.ReactElement => {
  return (
    <PaginationStyled>
      <Button text="Previous" onClick={previousPage} />
      <Button text="Next" onClick={nextPage} />
    </PaginationStyled>
  );
};

export default Pagination;
