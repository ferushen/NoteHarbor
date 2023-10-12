import { createBrowserRouter } from "react-router-dom";
import { FilmsPage } from "@/pages/Films";
import { filmsLayout } from "./layouts/filmsLayout";
import { FilmPage } from "@/pages/Film";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: filmsLayout(),
      errorElement: <div>Возникла непредвиденная ошибка</div>,
      children: [
        {
          path: '/',
          element: <FilmsPage />
        },
        {
          path: '/films/:id',
          element: <FilmPage />
        }
      ]
    },
  ])