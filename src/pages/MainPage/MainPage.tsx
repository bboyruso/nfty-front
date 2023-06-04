import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useApi from "../../hooks/useApi";
import { loadNftsActionCreator } from "../../store/nfts/nftsSlice";
import NftsList from "../../components/NftsList/NftsList";
import Loading from "../../components/Loading/Loading";
import Modal from "../../components/Modal/Modal";

const MainPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getNfts, errorMessage } = useApi();
  const { nfts } = useAppSelector((state) => state.nftsStore);
  const isLoading = useAppSelector((state) => state.loaderStore);

  useEffect(() => {
    (async () => {
      const nfts = await getNfts();

      if (nfts) dispatch(loadNftsActionCreator(nfts));
    })();
  }, [dispatch, getNfts]);

  return (
    <main aria-label="main page">
      {isLoading && <Loading />}
      {errorMessage && <Modal text={errorMessage} isError />}
      <NftsList nfts={nfts} />
    </main>
  );
};

export default MainPage;
