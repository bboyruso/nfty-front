import React, { useState } from "react";
import FormStyled from "./FormStyled";
import { NftCardStructure, NftStructure } from "../../types";
import Button from "../Button/Button";

interface FormProps {
  headingText: string;
  onFormSubmit: (formData: Partial<NftStructure>) => void;
}

const Form = ({ headingText, onFormSubmit }: FormProps): React.ReactElement => {
  const [formData, setFormData] = useState<NftCardStructure>({
    title: "",
    price: 0,
    image: "",
    description: "",
    author: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  const urlPattern = new RegExp(
    /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]{0,61}[a-zA-Z\d])?)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(?::\d{2,5})?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?$/,
    "i"
  );

  const isButtonDisabled =
    formData.author.length < 1 ||
    formData.description.length < 20 ||
    formData.image.length < 1 ||
    formData.title.length < 1 ||
    formData.price < 0.0001 ||
    /[a-zA-Z]/.test(formData.price.toString()) ||
    !urlPattern.test(formData.image);

  return (
    <FormStyled>
      <h1>{headingText}</h1>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Add title..."
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        name="author"
        placeholder="Add your artist name..."
        value={formData.author}
        onChange={handleChange}
      />

      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        name="price"
        placeholder="Add price in ETH..."
        onChange={handleChange}
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        name="image"
        placeholder="Add image link..."
        value={formData.image}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Add description (minimum of 20 characters)..."
        value={formData.description}
        onChange={handleChange}
      />
      <Button
        text="Create"
        onClickForm={handleSubmit}
        isDisabled={isButtonDisabled}
      />
    </FormStyled>
  );
};

export default Form;
