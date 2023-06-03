import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useApi from "../../hooks/useApi";
import { loadNftsActionCreator } from "../../store/nfts/nftsSlice";
import NftsList from "../../components/NftsList/NftsList";
import Loading from "../../components/Loading/Loading";

const MainPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getNfts } = useApi();
  const { nfts } = useAppSelector((state) => state.nftsStore);
  const isLoading = useAppSelector((state) => state.loaderStore);

  useEffect(() => {
    (async () => {
      const nfts = await getNfts();
      dispatch(loadNftsActionCreator(nfts));
    })();
  }, [dispatch, getNfts]);

  return (
    <main aria-label="main page">
      {isLoading && <Loading />}
      <NftsList nfts={nfts}></NftsList>
    </main>
  );
};

export default MainPage;
