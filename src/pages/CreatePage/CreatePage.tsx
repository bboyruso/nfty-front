import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useApi from "../../hooks/useApi";
import { NftStructure } from "../../types";

const CreatePage = (): React.ReactElement => {
  const { addNft } = useApi();
  const navigate = useNavigate();

  const handleFormSubmit = async (nftData: NftStructure) => {
    await addNft(nftData);

    navigate("/");
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
