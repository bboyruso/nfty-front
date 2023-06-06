import { NftStructure } from "../../types";
import NftCardStyled from "./NftCardStyled";

interface NftCardProps {
  nft: NftStructure;
  isLazy?: "lazy" | "eager";
  onDeleteClick: (id: string) => void;
}

const NftCard = ({
  nft: { title, price, author, image, _id: id },
  isLazy,
  onDeleteClick,
}: NftCardProps): React.ReactElement => {
  return (
    <NftCardStyled>
      <img src={image} alt={title} width={300} height={330} loading={isLazy} />
      <div className="card-info">
        <span className="title">{title}</span>
        <span className="author"> by {author}</span>
        <span className="price"> {price} ETH</span>
        <button onClick={() => onDeleteClick(id as string)}>Delete</button>
      </div>
    </NftCardStyled>
  );
};

export default NftCard;
