import { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Add, Delete, Edit, Search } from "@mui/icons-material";
import Tables from "../../components/order-table/table";
import { useNavigate } from "react-router-dom";

export default function OrdersHeader() {
  const navigate = useNavigate()

  const [filter, setFilter] = useState("Newest");


  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
        <div>
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      

      <Box display="flex" alignItems="center" gap={2} flexGrow={1} ml={3}>
        <TextField
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

        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size="small"
          >
          <MenuItem value="Newest">Newest</MenuItem>
          <MenuItem value="Oldest">Oldest</MenuItem>
        </Select>
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <Button variant="contained" startIcon={<Add />}>
          Add order
        </Button>
        <IconButton>
          <Edit />
        </IconButton>
        <IconButton>
          <Delete />
        </IconButton>
      </Box>
    </Box>
    <Tables/>
          </div>
  );
}
