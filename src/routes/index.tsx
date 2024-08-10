import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import lazyLoading from "@/utils/lazyLoading";
import useUsers from "@/hooks/useUsers";

type Role = "administrador" | "lider" | "usuario";

type privateProps = {
  element: React.JSX.Element;
  role: Role[];
  redirectRoute?: string;
};

export const Private = ({
  element,
  role,
  redirectRoute = "/home",
}: privateProps) => {
  const { currentUser } = useUsers();

  if (!currentUser) return <Navigate to={redirectRoute} />;

  if (!role.includes(currentUser.rol.rol))
    return <Navigate to={redirectRoute} />;

  return element;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: lazyLoading("App"),
    children: [
      {
        path: "/",
        element: <Navigate to="/login" />,
      },
      {
        path: "login",
        element: lazyLoading("Login"),
      },
      {
        path: "/dashboard",
        element: lazyLoading("Dashboard"),
      },
    ],
  },
  {
    path: "*",
    element: lazyLoading("404"),
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
