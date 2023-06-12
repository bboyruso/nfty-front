import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  skip: number;
  limit: number;
  nftLength: number;
  nextPage: () => void;
  previousPage: () => void;
}

const Pagination = ({
  nextPage,
  previousPage,
  skip,
  nftLength,
  limit,
}: PaginationProps): React.ReactElement => {
  return (
    <PaginationStyled>
      <Button text="Previous" onClick={previousPage} isDisabled={skip === 0} />
      <Button
        text="Next"
        onClick={nextPage}
        isDisabled={nftLength - skip < limit}
      />
    </PaginationStyled>
  );
};

export default Pagination;
