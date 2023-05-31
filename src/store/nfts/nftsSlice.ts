import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NftsState, NftsStructure } from "../../types";

const initialState: NftsState = { nfts: [] };

const nftsSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    loadNfts: (
      currentNfts,
      action: PayloadAction<NftsStructure[]>
    ): NftsState => ({
      ...currentNfts,
      nfts: [...action.payload],
    }),
  },
});

export const { loadNfts } = nftsSlice.actions;
export const nftsReducer = nftsSlice.reducer;
