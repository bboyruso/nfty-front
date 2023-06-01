import { useCallback } from "react";
import { NftsState } from "../types";
import axios from "axios";
import { apiUrl } from "../mocks/handlers";

const useApi = () => {
  const getNfts = useCallback(async (): Promise<NftsState> => {
    const { data: nfts } = await axios.get<NftsState>(`${apiUrl}nfts`);
    return nfts;
  }, []);
  return getNfts;
};

export default useApi;
