import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Login = lazy(() => import("../views/login"));
const Friends = lazy(() => import("@/views/friends"));
const Meeting=lazy(()=>import("@/views/meeting"))
const Home = lazy(() => import("@/views/home"));
const routes: RouteObject[] = [
  {
    path:"/",
    element:<Home/>
  },
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
