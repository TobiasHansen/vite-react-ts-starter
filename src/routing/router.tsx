import { lazy, Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { AppLayout } from '~/components/appLayout';
import IndexScreen from '~/pages';
import PageAScreen from '~/pages/pageA';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

//When lazy loading pages there will be a refresh-like feeling when visiting them for the first time
const Page404Screen = lazy(() => import('~/pages/404'));

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: 'page-a',
          element: <PageAScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
  ]);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
