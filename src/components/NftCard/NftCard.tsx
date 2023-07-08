import { useNavigate } from "react-router-dom";
import { NftStructure } from "../../types";
import Button from "../Button/Button";
import NftCardStyled from "./NftCardStyled";

interface NftCardProps {
  nft: NftStructure;
  isLazy?: "lazy" | "eager";
  onDeleteClick: (id: string) => void;
}

const NftCard = ({
  nft: { title, price, author, image, _id: id },
  isLazy,
}: NftCardProps): React.ReactElement => {
  const navigate = useNavigate();

  const handleOnDetails = () => {
    navigate(`nft/${id}`);
  };

  return (
    <NftCardStyled>
      <div
        onClick={handleOnDetails}
        onKeyUp={handleOnDetails}
        role="button"
        tabIndex={0}
      >
        <img
          src={image}
          alt={title}
          width={400}
          height={400}
          loading={isLazy}
        />
      </div>
      <div className="card-info">
        <span className="title">{title}</span>
        <span className="author"> by {author}</span>
        <span className="price">
          {price}
          <h2>ETH</h2>
        </span>
        <Button text="Read more" onClick={handleOnDetails} />
      </div>
    </NftCardStyled>
  );
};

export default NftCard;
