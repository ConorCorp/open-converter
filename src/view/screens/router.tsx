import Root, { converterUrlLoader } from "src/view/screens/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "src/view/screens/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: converterUrlLoader,
    children: [
      {
        path: ":converterUrl",
        element: <></>,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
