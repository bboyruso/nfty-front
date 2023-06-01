import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../../pages/MainPage/MainPage";

const Layout = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Outlet />
    </>
  );
};

export default Layout;
