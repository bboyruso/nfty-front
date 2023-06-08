import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useApi from "../../hooks/useApi";
import { loadNftsActionCreator } from "../../store/nfts/nftsSlice";
import NftsList from "../../components/NftsList/NftsList";
import MainPageStyled from "./MainPageStyled";

const MainPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getNfts } = useApi();
  const { nfts } = useAppSelector((state) => state.nftsStore);

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
      <NftsList nfts={nfts} />
    </MainPageStyled>
  );
};

export default MainPage;
