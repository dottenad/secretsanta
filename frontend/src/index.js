import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import App from "./App";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Gifts from "./pages/Gifts";
import Groups from "./pages/groups/Groups";
import CreateGroup from './pages/groups/Create';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Index />
        },
        {
          path: "/gifts",
          element: <Gifts />,
        },
        {
          path: "/groups",
          element: <Groups />,
        },
        {
          path: "/groups/create",
          element: <CreateGroup />,
        }
      ]
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);