import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  onClickForm?: (event: React.FormEvent) => void;
  isDisabled?: boolean;
}

const Button = ({
  text,
  onClick,
  onClickForm,
  isDisabled,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      onClick={onClick || onClickForm}
      className={isDisabled ? "disabled" : ""}
      disabled={isDisabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
