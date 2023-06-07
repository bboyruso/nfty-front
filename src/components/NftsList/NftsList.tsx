import useApi from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import { deleteNftsActionCreator } from "../../store/nfts/nftsSlice";
import { NftStructure } from "../../types";
import NftCard from "../NftCard/NftCard";
import NftsListStyled from "./NftsListStyled";

interface NftsListProps {
  nfts: NftStructure[];
}

const NftsList = ({ nfts }: NftsListProps) => {
  const dispatch = useAppDispatch();
  const { deleteNft } = useApi();

  const handleDeleteClick = async (id: string) => {
    await deleteNft(id);

    dispatch(deleteNftsActionCreator(id));
  };

  return (
    <NftsListStyled>
      {nfts.map((nfts, index) => (
        <li key={nfts._id}>
          <NftCard
            onDeleteClick={handleDeleteClick}
            nft={nfts}
            isLazy={index === 0 ? "eager" : "lazy"}
          />
        </li>
      ))}
    </NftsListStyled>
  );
};

export default NftsList;
