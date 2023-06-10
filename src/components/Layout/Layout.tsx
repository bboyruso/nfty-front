import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store";
import Modal from "../Modal/Modal";

const Layout = () => {
  const { loading } = useAppSelector((state) => state.uiStore);
  const { message } = useAppSelector((state) => state.feedbackStore);

  return (
    <>
      <Header />
      <ContainerStyled>
        {loading && <Loading />}
        {message && <Modal text={message} />}
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
