import { useRoutes, Navigate } from "react-router-dom";
import ColumnPage from "../pages/ColumnPage";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/HomePage";
import MyRecord from "../pages/MyRecordPage";
import LoginPage from "../pages/LoginPage";
import { AuthStore } from "../store/authStore";

export default function Router() {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);
  return useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "",
          element: isLoggedIn ? <Home /> : <Navigate to="/login" />,
        },
        {
          path: "/column",
          element: <ColumnPage />,
        },
        {
          path: "/my-record",
          element: isLoggedIn ? <MyRecord /> : <Navigate to="/login" />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
}
