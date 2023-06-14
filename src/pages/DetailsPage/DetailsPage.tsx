import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import useApi from "../../hooks/useApi";
import DetailsPageStyled from "./DetailsPageStyled";
import { loadSelectedNftActionCreator } from "../../store/nfts/nftsSlice";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";

const DetailsPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedNft = useAppSelector((state) => state.nftsStore.currentNft);
  const { id } = useParams();
  const { getNftById } = useApi();

  const { deleteNft } = useApi();

  const handleDeleteClick = async (id: string) => {
    await deleteNft(id);
    navigate(`/`);
  };

  useEffect(() => {
    (async () => {
      const nft = await getNftById(id as string);

      if (nft) {
        dispatch(loadSelectedNftActionCreator(nft));
      }
    })();
  }, [id, dispatch, getNftById]);

  return (
    <DetailsPageStyled>
      <img
        src={selectedNft?.image}
        alt={selectedNft?.title}
        width={400}
        height={400}
      />

      <div className="card-info">
        <span className="title">{selectedNft?.title}</span>
        <span className="author"> by {selectedNft?.author}</span>
        <p>{selectedNft?.description}</p>
        <span className="price">
          {selectedNft?.price}
          <h2>ETH</h2>
        </span>
        <Button
          text="Delete"
          onClick={() => handleDeleteClick(selectedNft?._id as string)}
        ></Button>
        <Button text="Modify" onClick={() => navigate(`/update`)}></Button>
      </div>
    </DetailsPageStyled>
  );
};

export default DetailsPage;
