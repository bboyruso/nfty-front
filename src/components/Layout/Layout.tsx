import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";

const Layout = () => {
  return (
    <ContainerStyled>
      <Header />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
