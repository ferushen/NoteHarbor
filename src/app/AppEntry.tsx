import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux'

import { appRouter } from './appRouter.tsx';
import { appStore } from './appStore.ts';

import './styles/index.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  // <React.StrictMode>
  <ReduxProvider store={appStore}>
    <RouterProvider router={appRouter()} />
  </ReduxProvider>
  // </React.StrictMode>
);
