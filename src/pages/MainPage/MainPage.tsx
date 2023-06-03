import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useApi from "../../hooks/useApi";
import { loadNftsActionCreator } from "../../store/nfts/nftsSlice";
import NftsList from "../../components/NftsList/NftsList";

const MainPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getNfts } = useApi();

  useEffect(() => {
    (async () => {
      const nfts = await getNfts();
      dispatch(loadNftsActionCreator(nfts));
    })();
  }, [dispatch, getNfts]);

  const { nfts } = useAppSelector((state) => state.nftsStore);

  return (
    <main aria-label="main page">
      <NftsList nfts={nfts}></NftsList>
    </main>
  );
};

export default MainPage;
