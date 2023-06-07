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
      dispatch(setFeedback("Error getting NFTs"));
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

  return { getNfts, deleteNft, feedbackMessage };
};

export default useApi;
