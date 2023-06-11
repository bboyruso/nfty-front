import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useApi from "../../hooks/useApi";
import { loadNftsActionCreator } from "../../store/nfts/nftsSlice";
import NftsList from "../../components/NftsList/NftsList";
import MainPageStyled from "./MainPageStyled";
import Pagination from "../../components/Pagination/Pagination";

const MainPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getNfts } = useApi();
  const { nfts } = useAppSelector((state) => state.nftsStore);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);

  useEffect(() => {
    (async () => {
      const nfts = await getNfts(skip, limit);

      if (nfts) {
        dispatch(loadNftsActionCreator(nfts));
      }
    })();
  }, [dispatch, getNfts, limit, skip]);

  const nextPage = () => {
    setSkip(skip + limit);
    window.scroll(0, 0);
  };

  const previousPage = () => {
    if (skip !== 0) {
      setSkip(skip - limit);
      window.scroll(0, 0);
    } else return;
  };

  return (
    <MainPageStyled aria-label="main page">
      <Pagination nextPage={nextPage} previousPage={previousPage} />
      <NftsList nfts={nfts} />
    </MainPageStyled>
  );
};

export default MainPage;
