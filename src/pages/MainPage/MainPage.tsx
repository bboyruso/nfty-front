import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useApi from "../../hooks/useApi";
import { loadNftsActionCreator } from "../../store/nfts/nftsSlice";
import NftsList from "../../components/NftsList/NftsList";
import Loading from "../../components/Loading/Loading";
import MainPageStyled from "./MainPageStyled";
import Modal from "../../components/Modal/Modal";

const MainPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getNfts } = useApi();
  const { nfts } = useAppSelector((state) => state.nftsStore);
  const isLoading = useAppSelector((state) => state.uiStore.loading);
  const feedbackMessage = useAppSelector(
    (state) => state.feedbackStore.message
  );

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
      {feedbackMessage && <Modal text={feedbackMessage}></Modal>}
      {isLoading && <Loading />}
      <NftsList nfts={nfts} />
    </MainPageStyled>
  );
};

export default MainPage;
