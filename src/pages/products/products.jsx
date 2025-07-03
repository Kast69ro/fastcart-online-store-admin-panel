import { useEffect } from "react";
import ProductsTable from "../../components/product-table/table";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }
  }, [navigate]);
  return <div><ProductsTable/></div>;
};

export default Products;
