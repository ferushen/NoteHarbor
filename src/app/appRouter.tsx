import { createBrowserRouter } from "react-router-dom";
import { FilmsPage } from "@/pages/Films";
import { filmsLayout } from "./layouts/filmsLayout";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: filmsLayout(),
      errorElement: <div>Возникла непредвиденная ошибка</div>,
      children: [
        {
          path: '/',
          element: <FilmsPage />
        }
      ]
    },
  ])