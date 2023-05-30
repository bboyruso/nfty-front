import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const Button = ({ text }: ButtonProps): React.ReactElement => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
