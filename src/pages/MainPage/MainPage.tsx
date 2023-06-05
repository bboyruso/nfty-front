import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useApi from "../../hooks/useApi";
import { loadNftsActionCreator } from "../../store/nfts/nftsSlice";
import NftsList from "../../components/NftsList/NftsList";
import Loading from "../../components/Loading/Loading";
import MainPageStyled from "./MainPageStyled";

const MainPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getNfts } = useApi();
  const { nfts } = useAppSelector((state) => state.nftsStore);
  const isLoading = useAppSelector((state) => state.uiStore);

  useEffect(() => {
    (async () => {
      const nfts = await getNfts();

      if (nfts) {
        dispatch(loadNftsActionCreator(nfts));
      }
    })();
  }, [dispatch, getNfts]);

  return (
    <MainPageStyled aria-label="main page">
      {isLoading && <Loading />}
      <NftsList nfts={nfts} />
    </MainPageStyled>
  );
};

export default MainPage;
