import { NftStructure } from "../../types";
import Button from "../Button/Button";
import NftCardStyled from "./NftCardStyled";

interface NftCardProps {
  nft: NftStructure;
  isLazy?: "lazy" | "eager";
}

const NftCard = ({
  nft: { title, price, author, image },
  isLazy,
}: NftCardProps): React.ReactElement => {
  return (
    <NftCardStyled>
      <img src={image} alt={title} width={300} height={330} loading={isLazy} />
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
