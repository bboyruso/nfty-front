import { NftsStructure } from "../../types";
import NftsListStyled from "./NftsListStyled";

interface NftsListProps {
  nfts: NftsStructure[];
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
