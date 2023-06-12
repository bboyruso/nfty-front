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
      return 200;
    } catch {
      dispatch(hideLoading());
      dispatch(setFeedback("NTF NOT DELETED"));
      return 500;
    }
  };

  const addNft = async (formData: Partial<NftStructure>) => {
    try {
      dispatch(hideFeedback());
      dispatch(showLoading());
      const { data: nfts } = await axios.post(`${apiUrl}nfts`, formData);
      dispatch(hideLoading());
      dispatch(setFeedback("NTF ADDED CORRECTLY"));
      return nfts;
    } catch {
      dispatch(hideLoading());
      dispatch(setFeedback("NTF COULDN'T ADD"));
      return 500;
    }
  };

  return { getNfts, deleteNft, addNft, feedbackMessage };
};

export default useApi;
