/** @format */

import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import { NotFound } from "@/pages/NotFound/NotFound";
import { ErrorPage } from "@/pages/Error/ErrorPage";
import { ROUTES } from "./constants";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);
