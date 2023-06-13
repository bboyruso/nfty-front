import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useApi from "../../hooks/useApi";
import DetailsPageStyled from "./DetailsPageStyled";
import {
  deleteNftsActionCreator,
  loadSelectedNftActionCreator,
} from "../../store/nfts/nftsSlice";
import { useParams } from "react-router-dom";
import NftCard from "../../components/NftCard/NftCard";

const DetailsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const selectedNft = useAppSelector((state) => state.nftsStore.nfts);
  const { id } = useParams();
  const { getNftById } = useApi();

  const { deleteNft } = useApi();

  const handleDeleteClick = async (id: string) => {
    await deleteNft(id);

    dispatch(deleteNftsActionCreator(id));
  };

  useEffect(() => {
    (async () => {
      const nft = await getNftById(id as string);

      if (nft) {
        dispatch(loadSelectedNftActionCreator);
      }
    })();
  }, [dispatch, getNftById, id]);

  return (
    <DetailsPageStyled>
      <NftCard nft={selectedNft[0]} onDeleteClick={handleDeleteClick}></NftCard>
    </DetailsPageStyled>
  );
};

export default DetailsPage;
