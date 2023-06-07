import { lazy } from "react";

export const LazyMainPage = lazy(() => import("../../pages/MainPage/MainPage"));

export const LazyCreatePage = lazy(
  () => import("../../pages/CreatePage/CreatePage")
);

export const LazyNotFoundPage = lazy(
  () => import("../../pages/PageNotFount/PageNotFound")
);
