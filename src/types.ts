export interface NftsStructure {
  _id: string;
  title: string;
  image: string;
  author: string;
  description: string;
  price: number;
}

export interface NftsState {
  nfts: NftsStructure[];
}
