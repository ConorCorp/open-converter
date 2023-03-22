import Root, { converterSelectionLoader } from "src/presentation/routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "src/presentation/routes/error";
import ConverterPage from "src/presentation/components/homePage/converterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: converterSelectionLoader,
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
