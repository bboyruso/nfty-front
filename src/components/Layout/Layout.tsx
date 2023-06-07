import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import Form from "../Form/Form";

const Layout = () => {
  return (
    <ContainerStyled>
      <Header />
      <Form headingText="Add your artwork" />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
