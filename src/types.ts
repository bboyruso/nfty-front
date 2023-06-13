export interface NftStructure {
  _id: string;
  title: string;
  image: string;
  author: string;
  description: string;
  price: number;
}
export interface NftCardStructure {
  title: string;
  image: string;
  description: string;
  price: number;
  author: string;
}

export interface NftsState {
  nfts: NftStructure[];
  length?: number;
  currentNft?: NftStructure;
}

export interface NftsSliceState {
  nfts: NftStructure[];
  length?: number;
  currentNft?: NftStructure;
}
