import ModalStyled from "./ModalStyled";

interface ModalProps {
  title?: string;
  text: string;
  isSuccessful: boolean;
}

const Modal = ({
  text,
  title,
  isSuccessful = true,
}: ModalProps): React.ReactElement => {
  return (
    <ModalStyled>
      {title}
      {text}
      {isSuccessful ? (
        <img src="../../assets/icons/done.svg" alt="done" />
      ) : (
        <img src="../../assets/icons/error.svg" alt="error" />
      )}
    </ModalStyled>
  );
};

export default Modal;
