import { NftStructure } from "../../types";
import Button from "../Button/Button";
import NftCardStyled from "./NftCardStyled";

interface NftCardProps {
  nft: NftStructure;
}

const NftCard = ({
  nft: { title, price, author, image },
}: NftCardProps): React.ReactElement => {
  return (
    <NftCardStyled>
      <img src={image} alt={title} />
      <div className="card-info">
        <span className="title">{title}</span>
        <span className="author"> by {author}</span>
        <span className="price"> {price} ETH</span>
        <Button text="Delete"></Button>
      </div>
    </NftCardStyled>
  );
};

export default NftCard;
