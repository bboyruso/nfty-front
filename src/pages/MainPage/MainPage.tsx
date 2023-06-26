import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useApi from "../../hooks/useApi";
import { loadNftsActionCreator } from "../../store/nfts/nftsSlice";
import NftsList from "../../components/NftsList/NftsList";
import MainPageStyled from "./MainPageStyled";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";

const MainPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getNftsByPrice } = useApi();
  const { nfts } = useAppSelector((state) => state.nftsStore);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);
  const [totalNfts, setTotalNfts] = useState(0);
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await getNftsByPrice(
        skip,
        limit,
        maximumPrice,
        minimumPrice
      );

      if (response) {
        const { nfts, length } = response;

        if (length) {
          setTotalNfts(length);
        }

        dispatch(loadNftsActionCreator(nfts));

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = nfts[0].image;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [dispatch, limit, skip, getNftsByPrice, minimumPrice, maximumPrice]);

  const nextPage = () => {
    setSkip(skip + limit);
    window.scroll(0, 0);
  };

  const setFilter = (minPrice: number, maxPrice: number) => {
    setMaximumPrice(maxPrice);
    setMinimumPrice(minPrice);
  };

  const previousPage = () => {
    setSkip(skip - limit);
    window.scroll(0, 0);
  };

  return (
    <MainPageStyled aria-label="main page">
      <Filter
        onClickButtonOne={() => {
          setFilter(0, 1);
        }}
        onClickButtonThree={() => {
          setFilter(5, Infinity);
        }}
        onClickButtonTwo={() => {
          setFilter(1, 5);
        }}
        onClickButtonFour={() => {
          setFilter(0, Infinity);
        }}
      />
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
