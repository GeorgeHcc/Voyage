import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Login = lazy(() => import("../views/login"));

const Meeting = lazy(() => import("@/views/meeting"));
const Home = lazy(() => import("@/views/Home"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/meeting",
    element: <Meeting />,
  },
];

export default routes;
