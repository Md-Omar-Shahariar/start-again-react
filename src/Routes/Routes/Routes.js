import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import SignUp from "../../pages/Login/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
