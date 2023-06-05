import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import PageNotFound from "../../pages/PageNotFount/PageNotFound";
import MainPage from "../../pages/MainPage/MainPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
