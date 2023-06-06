import { useCallback } from "react";
import { NftStructure } from "../types";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store";
import { hideLoading, showLoading } from "../store/loading/loadingSlice";
import { setError, clearError } from "../store/error/errorSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.error.message);

  const getNfts = useCallback(async (): Promise<NftStructure[] | undefined> => {
    try {
      dispatch(clearError());
      dispatch(showLoading());
      const { data: nfts } = await axios.get<NftStructure[]>(`${apiUrl}nfts`);
      dispatch(hideLoading());
      return nfts;
    } catch (error) {
      dispatch(hideLoading());
      dispatch(setError("Error getting NFTs"));
    }
  }, [dispatch]);

  const deleteNft = async (id: string) => {
    try {
      await axios.delete(`${apiUrl}nfts/${id}`);
      return "Nft was deleted";
    } catch (error) {
      return "Nft NOT deleted";
    }
  };

  return { getNfts, deleteNft, errorMessage };
};

export default useApi;
