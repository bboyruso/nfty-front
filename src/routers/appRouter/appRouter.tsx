import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import {
  LazyCreatePage,
  LazyMainPage,
  LazyNftDetailsPage,
  LazyNotFoundPage,
  LazyUpdatePage,
} from "../lazyPages/lazyPages";
import { Suspense } from "react";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense>
            <LazyMainPage />
          </Suspense>
        ),
      },
      {
        path: "nft/:id",
        element: (
          <Suspense>
            <LazyNftDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "/create",
        element: (
          <Suspense>
            <LazyCreatePage />
          </Suspense>
        ),
      },
      {
        path: "/update",
        element: (
          <Suspense>
            <LazyUpdatePage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
