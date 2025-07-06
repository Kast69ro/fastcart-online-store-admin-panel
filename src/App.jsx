import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashbord from "./components/layouts/Dashboard/dashboard";
import Dashboard from "/src/pages/Dashboard/dashboard";
import Orders from "/src/pages/Orders/orders";
import Products from "/src/pages/Products/products";
import Other from "/src/pages/Other/other";
import LogIn from "./pages/log-in/log-in";
import AddProduct from "./pages/add-page/add-page";
import Edit from "./pages/edit/edit";
import OtherCategory from "./components/other-category/other-category";
import OtherBrand from "./components/other-brand/other-brand";
import OtherSubcategory from "./components/other-subcategory/other-subcategory";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashbord />,
      children: [
        {
          index: true,
          element: <Dashboard />,
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
              element: <OtherBrand/>,
            },
            {
              path: "subcategories",
              element: <OtherSubcategory/>,
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

  return <RouterProvider router={router} />;
}

export default App;
