import { lazy } from "react";

export const LazyMainPage = lazy(() => import("../../pages/MainPage/MainPage"));

export const LazyCreatePage = lazy(
  () => import("../../pages/CreatePage/CreatePage")
);

export const LazyNotFoundPage = lazy(
  () => import("../../pages/PageNotFount/PageNotFound")
);

export const LazyNftDetailsPage = lazy(
  () => import("../../pages/DetailsPage/DetailsPage")
);

export const LazyUpdatePage = lazy(
  () => import("../../pages/UpdatePage/UpdatePage")
);

export const LazyLoginPage = lazy(
  () => import("../../pages/LoginPage/LoginPage")
);
