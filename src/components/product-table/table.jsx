import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Edit, Delete } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../../entities/api/products/products";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../config/utilits/utilits";
import { getProductById } from "../../entities/api/product-by-id/product";
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
    width: 80,
    headerAlign: "center",
    renderCell: (params) => (
  <Box display="flex" justifyContent="center" width="100%">
    <Avatar
      variant="rounded"
      src={`${API}/images/${params.value}`}
      alt={params.row.productName}
      sx={{ width: 40, height: 40,marginTop:'5px' }}
    />
  </Box>
)
  },
  { field: "productName", headerName: "Product", width: 150,
    headerAlign: "center",
    align: "center",
   },
  {
    field: 'quantity',
    headerName: "Inventory",
    width: 100,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => `${params.value} in stock`,
  },
  {
    field: "categoryName",
    headerName: "Category",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    renderCell:(params)=>`$ ${params.value}`
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Box>
        <Link to='/edit-product'>
        <IconButton onClick={()=>dispatch(getProductById(params.id))} size="small" color="primary">
          <Edit fontSize="small" />
        </IconButton>
        </Link>
        <IconButton size="small" color="error"
        onClick={()=>dispatch(deleteProduct(params.id))}>
          <Delete fontSize="small" />
        </IconButton>
      </Box>
    ),
  },
];
  return (
    <Paper sx={{ height: 700, width: "90%", mt: 2, margin: "auto" }}>
      <DataGrid
        rows={products || []}
        columns={columns}
        pageSizeOptions={[5]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        disableRowSelectionOnClick
        checkboxSelection 
      />
    </Paper>
  );
}
