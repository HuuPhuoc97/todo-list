import { lazy } from 'react';
import { PublicLayout } from '../layouts';

const HomeContainer = lazy(() => import('../modules').then(module => ({ default: module.HomeContainer })));

const TodoDetailContainer = lazy(() =>
  import('../modules').then(module => ({ default: module.TodoContainer.TodoDetailContainer })),
);

const TodoUpdateContainer = lazy(() =>
  import('../modules').then(module => ({ default: module.TodoContainer.TodoUpdateContainer })),
);

const publicRouters = {
  layout: PublicLayout,
  subRoutes: [
    {
      path: '/',
      component: HomeContainer,
      exact: true,
    },
    {
      path: '/update-todo',
      component: TodoUpdateContainer,
      exact: true,
    },
    {
      path: '/update-todo/:id',
      component: TodoUpdateContainer,
      exact: true,
    },
    {
      path: '/todo-detail/:id',
      component: TodoDetailContainer,
      exact: true,
    },
  ],
};

export default publicRouters;
