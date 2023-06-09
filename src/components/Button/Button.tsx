import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  onClickForm?: (event: React.FormEvent) => void;
}

const Button = ({
  text,
  onClick,
  onClickForm,
}: ButtonProps): React.ReactElement => {
  return <ButtonStyled onClick={onClick || onClickForm}>{text}</ButtonStyled>;
};

export default Button;
