import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NftsState, NftStructure } from "../../types";

const initialState: NftsState = { nfts: [] };

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
      nfts: [{ ...action.payload }],
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
