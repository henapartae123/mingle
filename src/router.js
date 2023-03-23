import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import Chats from "./Chats";
import Browse from "./Browse";
import Profile from "./Profile";
import SetUp from "./SetUp";
import UserDetails from "./UserDetails";
import UserDetailsBasic from "./UserDetailsBasic";
import UserDetailsPersonality from "./UserDetailsPersonality";
import UserDetailsLifestyle from "./UserDetailsLifestyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/chats",
        element: <Chats />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/setup",
        element: <SetUp />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user-details",
    element: <UserDetails />,
    children: [
      {
        path: "/user-details-basic",
        element: <UserDetailsBasic />,
      },
      {
        path: "/user-details-personality",
        element: <UserDetailsPersonality />,
      },
      {
        path: "/user-details-lifestyle",
        element: <UserDetailsLifestyle />,
      },
    ],
  },
]);

export default router;
