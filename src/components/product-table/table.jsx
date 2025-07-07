import { DataGrid } from "@mui/x-data-grid";
import { Paper, Box, IconButton, Avatar } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../../entities/api/products/products";
import { getProductById } from "../../entities/api/product-by-id/product";
import { API } from "../../config/utilits/utilits";
import { Link } from "react-router-dom";

export default function ProductsTable() {
  const products = useSelector((state) => state.products?.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const columns = [
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => (
        <Box display="flex" justifyContent="center" width="100%">
          <Avatar
            variant="rounded"
            src={`${API}/images/${params.value}`}
            alt={params.row.productName}
            sx={{ width: 40, height: 40, marginTop: "5px" }}
          />
        </Box>
      ),
    },
    {
      field: "productName",
      headerName: "Product",
      flex: 2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Inventory",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => `${params.value} in stock`,
    },
    {
      field: "categoryName",
      headerName: "Category",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => `$ ${params.value}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box display="flex" justifyContent="center" gap={1}>
          <Link to="/edit-product">
            <IconButton
              onClick={() => dispatch(getProductById(params.id))}
              size="small"
              color="primary"
            >
              <Edit fontSize="small" />
            </IconButton>
          </Link>
          <IconButton
            size="small"
            color="error"
            onClick={() => dispatch(deleteProduct(params.id))}
          >
            <Delete fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: "100vh", width: "100%", padding: 2, boxSizing: "border-box" }}>
      <DataGrid
        rows={products || []}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        pageSizeOptions={[10, 25, 50]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
    </Box>
  );
}
