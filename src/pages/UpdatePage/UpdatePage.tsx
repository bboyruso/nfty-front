import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useApi from "../../hooks/useApi";
import { NftStructure } from "../../types";
import { useAppSelector } from "../../store";

const UpdatePage = (): React.ReactElement => {
  const { updateNft } = useApi();
  const navigate = useNavigate();
  const nft = useAppSelector((state) => state.nftsStore.currentNft);

  const id = nft?._id;

  const handleFormSubmit = async (formData: Partial<NftStructure>) => {
    await updateNft({ ...formData, _id: id });

    navigate("/");
  };

  return (
    <>
      <Form
        onFormSubmit={handleFormSubmit}
        headingText="Update your artwork"
        nft={nft}
      ></Form>
    </>
  );
};

export default UpdatePage;
