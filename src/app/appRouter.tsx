import { createBrowserRouter } from "react-router-dom";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <div>{'Layout'}</div>,
      errorElement: <div>error</div>,
      children: [
        {
          path: '/',
          element: <div>{'Page'}</div>
        }
      ]
    },
  ])