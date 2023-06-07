import FormStyled from "./FormStyled";

interface FormProps {
  headingText: string;
}

const Form = ({ headingText }: FormProps): React.ReactElement => {
  return (
    <FormStyled>
      <h1>{headingText}</h1>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Add title.."
      ></input>

      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        name="price"
        placeholder="Add price in ETH.."
      ></input>

      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        name="image"
        placeholder="Add image link.."
      ></input>
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Add description.."
      ></textarea>
    </FormStyled>
  );
};

export default Form;
