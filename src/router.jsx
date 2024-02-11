import {lazy} from 'react';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomePage from './pages/Home';
import {Root} from './root';

const ErrorPage = lazy(() => import('./pages/(Errors)/Error'));
const NotFoundPage = lazy(() => import('./pages/(Errors)/NotFound'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? '/',
  },
);

export const Routes = () => <RouterProvider router={router} />;
