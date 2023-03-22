import Root, { converterUrlLoader } from "src/presentation/routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "src/presentation/routes/error";

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
