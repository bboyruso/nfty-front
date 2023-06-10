import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useApi from "../../hooks/useApi";
import { NftStructure } from "../../types";
import { useAppDispatch } from "../../store";
import { addNftsActionCreator } from "../../store/nfts/nftsSlice";

const CreatePage = (): React.ReactElement => {
  const { addNft } = useApi();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleFormSubmit = async (nftData: Partial<NftStructure>) => {
    const nft = await addNft(nftData);

    if (nft) {
      dispatch(addNftsActionCreator(nft));
      navigate("/");
    }
  };

  return (
    <>
      <Form
        onFormSubmit={handleFormSubmit}
        headingText="Add your artwork"
      ></Form>
    </>
  );
};

export default CreatePage;
