import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const publicRoutes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
];
