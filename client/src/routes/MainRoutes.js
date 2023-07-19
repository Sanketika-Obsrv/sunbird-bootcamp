import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const GlobalMap = Loadable(lazy(() => import('views/maps/GlobalMap')));
const ChartTypes = Loadable(lazy(() => import('views/chartTypes')));
const IndiaMap = Loadable(lazy(() => import('views/maps/IndiaMap')));


const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <GlobalMap />
    },
    {
      path: 'types',
      element: <ChartTypes />
    },
    {
      path: 'india',
      element: <IndiaMap />
    }
  ]
};

export default MainRoutes;
