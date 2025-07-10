import { useEffect, useState } from "react";
import { Toaster } from 'sonner';

import ProductsTable from "../../components/product-table/table";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Add, Delete,  Search } from "@mui/icons-material";

const Products = () => {
  const navigate = useNavigate()

   const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
     <div>
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      

      <Box display="flex" alignItems="center" gap={2} flexGrow={1} >
        <TextField
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
          variant="outlined"
          placeholder="Search..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          />

      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <Link to='/add-product'>
        <Button variant="contained" startIcon={<Add />}>
          Add product
        </Button>
        </Link>
     
        <IconButton>
          <Delete />
        </IconButton>
      </Box>
    </Box>
          </div>
  <div><ProductsTable/></div>;
  <Toaster position="bottom-right" />
    </>
  )
  
};

export default Products;
