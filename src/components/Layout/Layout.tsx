import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import Loading from "../Loading/Loading";
import { useAppSelector, useAppDispatch } from "../../store";
import Modal from "../Modal/Modal";
import { hideFeedback } from "../../store/ui/feedbackSlice";

const Layout = () => {
  const isLoading = useAppSelector((state) => state.uiStore.loading);
  const feedBackMessage = useAppSelector(
    (state) => state.feedbackStore.message
  );
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(hideFeedback());
  };

  return (
    <ContainerStyled>
      {isLoading && <Loading />}
      {feedBackMessage && <Modal text={feedBackMessage} onClose={closeModal} />}
      <Header />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
