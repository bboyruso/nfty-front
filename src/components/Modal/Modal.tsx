import { useAppDispatch } from "../../store";
import { hideFeedback } from "../../store/ui/feedbackSlice";
import ModalStyled from "./ModalStyled";

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
    <ModalStyled
      className={isError ? "error" : ""}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <span>{text}</span>
      <span>OK</span>
    </ModalStyled>
  );
};

export default Modal;
