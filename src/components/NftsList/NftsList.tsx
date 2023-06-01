import { NftStructure } from "../../types";
import NftsListStyled from "./NftsListStyled";

interface NftsListProps {
  nfts: NftStructure[];
}

const NftsList = ({ nfts }: NftsListProps) => {
  return (
    <NftsListStyled>
      {nfts.map((nfts) => (
        <li key={nfts._id}></li>
      ))}
    </NftsListStyled>
  );
};

export default NftsList;
