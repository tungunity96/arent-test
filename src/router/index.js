import { useRoutes } from "react-router-dom";
import ColumnPage from "../pages/ColumnPage";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/HomePage";
import MyRecord from "../pages/MyRecordPage";
import LoginPage from "../pages/LoginPage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/column",
          element: <ColumnPage />,
        },
        {
          path: "/my-record",
          element: <MyRecord />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
}
