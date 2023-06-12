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
  const [totalNfts, setTotalNfts] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await getNfts(skip, limit);

      if (response) {
        const { nfts, length } = response;

        if (length) {
          setTotalNfts(length);
        }

        dispatch(loadNftsActionCreator(nfts));
      }
    })();
  }, [dispatch, getNfts, limit, skip]);

  const nextPage = () => {
    setSkip(skip + limit);
    window.scroll(0, 0);
  };

  const previousPage = () => {
    setSkip(skip - limit);
    window.scroll(0, 0);
  };

  return (
    <MainPageStyled aria-label="main page">
      <NftsList nfts={nfts} />
      <Pagination
        nextPage={nextPage}
        previousPage={previousPage}
        skip={skip}
        limit={limit}
        nftLength={totalNfts}
      />
    </MainPageStyled>
  );
};

export default MainPage;
