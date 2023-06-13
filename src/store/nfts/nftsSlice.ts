import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NftsSliceState, NftsState, NftStructure } from "../../types";

const initialState: NftsSliceState = {
  nfts: [],
  currentNft: {
    _id: "",
    title: "",
    image: "",
    author: "",
    description: "",
    price: 0,
  },
};

const nftsSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    loadNfts: (
      currentNfts,
      action: PayloadAction<NftStructure[]>
    ): NftsState => ({
      ...currentNfts,
      nfts: [...action.payload],
    }),

    deleteNft: (currentNftsState, action: PayloadAction<string>) => {
      currentNftsState.nfts = currentNftsState.nfts.filter(
        (nft) => nft._id !== action.payload
      );
    },

    addNft: (currentState, action: PayloadAction<NftStructure>): NftsState => ({
      ...currentState,
      nfts: [...currentState.nfts, action.payload],
    }),

    loadSelectedNft: (
      currentState: NftsState,
      action: PayloadAction<NftStructure>
    ) => ({
      ...currentState,
      currentNft: { ...action.payload },
    }),
  },
});

export const {
  loadNfts: loadNftsActionCreator,
  deleteNft: deleteNftsActionCreator,
  addNft: addNftsActionCreator,
  loadSelectedNft: loadSelectedNftActionCreator,
} = nftsSlice.actions;

export const nftsReducer = nftsSlice.reducer;
