import { Text } from '@mantine/core';
import { lazy, Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { AppLayout } from '~/components/appLayout';
import IndexScreen from '~/pages';
import PageAScreen from '~/pages/pageA';
import { routes } from '~/routing/routes';

const Loading = () => <Text component="p">Loading...</Text>;

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
      path: routes.frontpage.path,
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: routes.pageA.path,
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
