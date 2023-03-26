import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App/App";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Chats from "./Chats/Chats";
import Browse from "./Browse/Browse";
import Profile from "./Profile/Profile";
import SetUp from "./Setup/SetUp";
import UserDetails from "./UserDetails/UserDetails";
import UserDetailsBasic from "./UserDetails/UserDetailsBasic";
import UserDetailsPersonality from "./UserDetails/UserDetailsPersonality";
import UserDetailsLifestyle from "./UserDetails/UserDetailsLifestyle";

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
