import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import Products from "./pages/products/products";
import Other from "./pages/other/other";
import LogIn from "./pages/log-in/log-in";
import AddProduct from "./pages/add-page/add-page";
import Edit from "./pages/edit/edit";
import OtherCategory from "./components/other-category/other-category";
import OtherBrand from "./components/other-brand/other-brand";
import OtherSubcategory from "./components/other-subcategory/other-subcategory";
import Dashbord from "./components/layouts/dashboard/dashboard";
import Dashboards from "./pages/dashboard/dashboard";
import Orders from "./pages/orders/orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashbord />,
      children: [
        {
          index: true,
          element: <Dashboards />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },
        {
          path: "edit-product",
          element: <Edit />,
        },
        {
          path: "other",
          element: <Other />,
          children: [
            {
              index: true,
              element: <OtherCategory />,
            },
            {
              path: "brands",
              element: <OtherBrand />,
            },
            {
              path: "subcategories",
              element: <OtherSubcategory />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <LogIn />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="bottom-right" />
    </>
  );
}

export default App;
