import CounterPage from 'pages/CounterPage';
import ErrorPage from 'pages/ErrorPage';
import CreateUserPage from 'pages/users/CreateUserPage';
import EditUserPage from 'pages/users/EditUserPage';
import UsersListPage from 'pages/users/UsersListPage';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'counter',
        element: <CounterPage />,
      },
      {
        path: 'users',
        element: <UsersListPage />,
      },
      {
        path: 'users/create',
        element: <CreateUserPage />,
      },
      {
        path: 'users/edit/:userId',
        element: <EditUserPage />,
      },
    ],
  },
]);

export default Router;
