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
  },
});

export const { loadNfts: loadNftsActionCreator } = nftsSlice.actions;
export const nftsReducer = nftsSlice.reducer;
