import ModalStyled from "./ModalStyled";
import { ReactSVG } from "react-svg";

export interface ModalProps {
  text: string;
  isError: boolean;
}

const Modal = ({ text, isError }: ModalProps): React.ReactElement => {
  return (
    <ModalStyled className={isError ? "error" : ""}>
      <span>{text}</span>
      {isError ? (
        <ReactSVG src="src\assets\icons\error.svg"></ReactSVG>
      ) : (
        <ReactSVG src="src\assets\icons\done.svg"></ReactSVG>
      )}
    </ModalStyled>
  );
};

export default Modal;
