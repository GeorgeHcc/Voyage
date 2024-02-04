import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Login = lazy(() => import("../views/login"));
const Friends = lazy(() => import("@/views/friends"));
const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
    
  },
  {
    path: "/friends",
    element: <Friends />,
  },
];

export default routes;
