import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps): React.ReactElement => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default Button;
