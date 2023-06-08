import { useCallback } from "react";
import { NftStructure } from "../types";
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

  const getNfts = useCallback(async (): Promise<NftStructure[] | undefined> => {
    try {
      dispatch(hideFeedback());
      dispatch(showLoading());
      const { data: nfts } = await axios.get<NftStructure[]>(`${apiUrl}nfts`);
      dispatch(hideLoading());
      return nfts;
    } catch (error) {
      dispatch(hideLoading());
      dispatch(setFeedback("ERROR GETTING NFTS"));
    }
  }, [dispatch]);

  const deleteNft = async (id: string) => {
    try {
      await axios.delete(`${apiUrl}nfts/${id}`);
      dispatch(setFeedback("NTF WAS DELETED"));
      return 200;
    } catch (error) {
      dispatch(setFeedback("NTF NOT DELETED"));
      return 500;
    }
  };

  const addNft = async (formData: Partial<NftStructure>) => {
    try {
      await axios.post(`${apiUrl}nfts`, formData);
      dispatch(setFeedback("NTF ADDED CORRECTLY"));
      return 200;
    } catch {
      dispatch(setFeedback("NTF COULDN'T ADD"));
      return 500;
    }
  };

  return { getNfts, deleteNft, addNft, feedbackMessage };
};

export default useApi;
