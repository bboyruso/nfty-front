import { NftStructure } from "../../types";
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
        {title}
        {price}
        {author}
      </div>
    </NftCardStyled>
  );
};

export default NftCard;
