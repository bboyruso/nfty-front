import { useCallback } from "react";
import { NftStructure } from "../types";
import axios from "axios";
import { useAppDispatch } from "../store";
import { startLoading } from "../store/loading/loadingSlice";
import { stopLoading } from "../store/loading/loadingSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const dispatch = useAppDispatch();

  const getNfts = useCallback(async (): Promise<NftStructure[]> => {
    dispatch(startLoading());
    const { data: nfts } = await axios.get<NftStructure[]>(`${apiUrl}nfts`);
    dispatch(stopLoading());
    return nfts;
  }, [dispatch]);
  return { getNfts };
};

export default useApi;
