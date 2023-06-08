import Form from "../../components/Form/Form";
import useApi from "../../hooks/useApi";
import { NftStructure } from "../../types";

const CreatePage = (): React.ReactElement => {
  const { addNft } = useApi();

  const handleFormSubmit = async (nftData: Partial<NftStructure>) => {
    await addNft(nftData);
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
