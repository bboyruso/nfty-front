import { useDispatch } from "react-redux";
import { deleteNftsActionCreator } from "../../store/nfts/nftsSlice";
import { NftStructure } from "../../types";
import Button from "../Button/Button";
import NftCardStyled from "./NftCardStyled";

interface NftCardProps {
  nft: NftStructure;
  isLazy?: "lazy" | "eager";
}

const NftCard = ({
  nft: { title, price, author, image, _id },
  isLazy,
}: NftCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNftsActionCreator(_id));
  };

  return (
    <NftCardStyled>
      <img src={image} alt={title} width={300} height={330} loading={isLazy} />
      <div className="card-info">
        <span className="title">{title}</span>
        <span className="author"> by {author}</span>
        <span className="price"> {price} ETH</span>
        <Button text="Delete" onClick={handleDelete} />
      </div>
    </NftCardStyled>
  );
};

export default NftCard;
