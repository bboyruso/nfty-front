import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../../pages/MainPage/MainPage";
import Modal from "../Modal/Modal";

const Layout = () => {
  return (
    <>
      <Header />
      <Modal isError={false} text="NFT not found"></Modal>
      <MainPage />
      <Outlet />
    </>
  );
};

export default Layout;
