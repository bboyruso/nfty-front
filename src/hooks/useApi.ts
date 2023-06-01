import { useCallback } from "react";
import { NftStructure } from "../types";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const getNfts = useCallback(async (): Promise<NftStructure[]> => {
    const { data: nfts } = await axios.get<NftStructure[]>(`${apiUrl}nfts`);
    return nfts;
  }, []);
  return { getNfts };
};

export default useApi;
