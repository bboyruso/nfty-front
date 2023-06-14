import { useCallback } from "react";
import { NftStructure, NftsState } from "../types";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store";
import { hideLoading, showLoading } from "../store/ui/loadingSlice";
import { setFeedback, hideFeedback } from "../store/ui/feedbackSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const dispatch = useAppDispatch();
  const feedbackMessage = useAppSelector(
    (state) => state.feedbackStore.message
  );

  const getNfts = useCallback(
    async (skip: number, limit: number): Promise<NftsState | undefined> => {
      try {
        dispatch(showLoading());
        const {
          data: { nfts, length },
        } = await axios.get<NftsState>(
          `${apiUrl}nfts?skip=${skip}&limit=${limit}`
        );

        dispatch(hideLoading());
        return { nfts, length };
      } catch {
        dispatch(hideLoading());
        dispatch(setFeedback("ERROR GETTING NFTS"));
      }
    },
    [dispatch]
  );

  const deleteNft = async (id: string) => {
    try {
      dispatch(showLoading());
      await axios.delete(`${apiUrl}nfts/${id}`);
      dispatch(hideLoading());
      dispatch(setFeedback("NTF WAS DELETED"));
    } catch {
      dispatch(hideLoading());
      dispatch(setFeedback("NTF NOT DELETED"));
    }
  };

  const addNft = async (formData: NftStructure) => {
    try {
      dispatch(hideFeedback());
      dispatch(showLoading());
      await axios.post(`${apiUrl}nfts`, formData);
      dispatch(hideLoading());
      dispatch(setFeedback("NTF ADDED CORRECTLY"));
    } catch {
      dispatch(hideLoading());
      dispatch(setFeedback("NTF COULDN'T ADD"));
    }
  };

  const getNftById = useCallback(
    async (id: string) => {
      try {
        dispatch(showLoading());
        const { data: nft } = await axios.get(`${apiUrl}nfts/${id}`);
        dispatch(hideLoading());
        return nft;
      } catch {
        dispatch(hideLoading());
        dispatch(setFeedback("OPS.SOMETHING WENT WRONG."));
      }
    },
    [dispatch]
  );

  const updateNft = async (formData: NftStructure) => {
    try {
      dispatch(hideFeedback());
      dispatch(showLoading());
      const { data: nft } = await axios.put(`${apiUrl}nfts`, formData);
      dispatch(hideLoading());
      dispatch(setFeedback("NTF UPLOADED CORRECTLY"));
      return nft;
    } catch {
      dispatch(hideLoading());
      dispatch(setFeedback("NTF COULDN'T UPLOAD"));
    }
  };

  return {
    getNfts,
    deleteNft,
    addNft,
    getNftById,
    updateNft,
    feedbackMessage,
  };
};

export default useApi;
