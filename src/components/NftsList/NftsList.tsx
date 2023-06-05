import { NftStructure } from "../../types";
import NftCard from "../NftCard/NftCard";
import NftsListStyled from "./NftsListStyled";

interface NftsListProps {
  nfts: NftStructure[];
}

const NftsList = ({ nfts }: NftsListProps) => {
  return (
    <NftsListStyled>
      {nfts.map((nfts, index) => (
        <li key={nfts._id}>
          <NftCard nft={nfts} isLazy={index === 0 ? "eager" : "lazy"} />
        </li>
      ))}
    </NftsListStyled>
  );
};

export default NftsList;
