import ModalStyled from "./ModalStyled";
import { ReactSVG } from "react-svg";

export interface ModalProps {
  text: string;
  isError?: boolean;
}

const Modal = ({ text, isError }: ModalProps): React.ReactElement => {
  return (
    <ModalStyled className={isError ? "error" : ""}>
      <span>{text}</span>
      <ReactSVG src={isError ? "public/error.svg" : "public/error.svg"} />
    </ModalStyled>
  );
};

export default Modal;
