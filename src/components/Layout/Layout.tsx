import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";

const Layout = () => {
  const { isLoading: loading } = useAppSelector((state) => state.uiStore);
  const { message } = useAppSelector((state) => state.feedbackStore);

  return (
    <>
      {loading && <Loading />}

      <Header />
      <ContainerStyled>
        {message && <Modal text={message} />}
        <Outlet />
      </ContainerStyled>
      <Footer></Footer>
    </>
  );
};

export default Layout;
