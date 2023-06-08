import ModalStyled from "./ModalStyled";
import { ReactSVG } from "react-svg";

export interface ModalProps {
  text: string;
  isError?: boolean;
  onClose: () => void;
}

const Modal = ({ text, isError, onClose }: ModalProps): React.ReactElement => {
  const handleClick = () => {
    onClose();
  };

  return (
    <ModalStyled className={isError ? "error" : ""} onClick={handleClick}>
      <span>{text}</span>
      <ReactSVG src={isError ? "public/error.svg" : "public/error.svg"} />
    </ModalStyled>
  );
};

export default Modal;
