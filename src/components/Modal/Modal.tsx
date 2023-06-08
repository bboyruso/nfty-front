import { useAppDispatch } from "../../store";
import { hideFeedback } from "../../store/ui/feedbackSlice";
import ModalStyled from "./ModalStyled";
import { ReactSVG } from "react-svg";

export interface ModalProps {
  text: string;
  isError?: boolean;
}

const Modal = ({ text, isError }: ModalProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(hideFeedback());
  };

  return (
    <ModalStyled className={isError ? "error" : ""} onClick={handleClick}>
      <span>{text}</span>
      <ReactSVG src={isError ? "public/error.svg" : "public/error.svg"} />
    </ModalStyled>
  );
};

export default Modal;
