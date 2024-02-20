import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/baseLayout";
import { FilmsPage } from "@/pages/Films";
import { FilmPage } from "@/pages/Film";
import { PersonPage } from "@/pages/Person";
import { PlanetPage } from "@/pages/Planet";
import { RacePage } from "@/pages/Race";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <div>Возникла непредвиденная ошибка</div>,
      children: [
        {
          path: '/',
          element: <FilmsPage />
        },
        {
          path: '/films',
          element: <FilmsPage />
        },
        {
          path: '/films/:id',
          element: <FilmPage />
        },
        {
          path: '/persons/:id',
          element: <PersonPage />
        },
        {
          path: '/planets/:id',
          element: <PlanetPage />
        },
        {
          path: '/species/:id',
          element: <RacePage />
        },
      ]
    },
  ])