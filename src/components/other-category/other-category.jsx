import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategory,
} from "../../entities/api/category/category";
import { API } from "../../config/utilits/utilits";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import TextField from "@mui/material/TextField";
import { Add } from "@mui/icons-material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Upload } from "lucide-react";

const OtherCategory = () => {
  const categories = useSelector((state) => state.category.categoryData);


  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [files, setFiles] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [open, setOpen] = useState(false);

  const [editFiles, setEditFiles] = useState([]);
  const [editCategoryName, setEditCategoryName] = useState("");
  const [editModal,setEditModal] = useState(false)
  const [categoryId,setCategoryId]= useState(null)

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newCategory = new FormData();
    newCategory.append("CategoryName", categoryName);
    for (let i = 0; i < files.length; i++) {
      newCategory.append("CategoryImage", files[i]);
    }
    dispatch(addCategory(newCategory));
    setOpen(false);
  };
  const handleEdit = (el) => {
    setEditModal(true)
    setEditCategoryName(el.categoryName)
    setCategoryId(el.id)
  };

  const handleEditSave=(e)=>{
    e.preventDefault()
    const editedCategory = new FormData()
    editedCategory.append('Id',categoryId)
    editedCategory.append('CategoryName',editCategoryName)
    for(let i=0;i<editFiles.length;i++){
        editedCategory.append('CategoryImage',editFiles[i])
    }
    dispatch(editCategory(editedCategory))
    setEditModal(false)
  }

  return (
    <>
      <div>
        <div className="flex items-center justify-between w-[93%] ">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search..."
              variant="outlined"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            startIcon={<Add />}
          >
            Add order
          </Button>
        </div>
        <div className="flex gap-[50px] flex-wrap">
          {categories
            .filter((el) =>
              el.categoryName.toLowerCase().includes(search.toLowerCase())
            )
            .map((el) => {
              return (
                <div
                  className="flex flex-col items-center gap-5 border-[1px] p-[20px] rounded-[10px]"
                  key={el.id}
                >
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-3.5 items-center">
                      <img
                        className="w-[150px] h-[150px] rounded"
                        src={`${API}/images/${el.categoryImage}`}
                        alt=""
                      />
                      <h3 className="text-[22px]">{el.categoryName}</h3>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <button onClick={() => handleEdit(el)}>
                        <EditIcon color="primary" />
                      </button>
                      <button onClick={() => dispatch(deleteCategory(el.id))}>
                        <DeleteForeverRoundedIcon color="error" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Category</DialogTitle>
          <DialogContent sx={{ paddingBottom: 0 }}>
            <form onSubmit={handleAdd}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="category"
                label="Category name"
                type="text"
                fullWidth
                variant="outlined"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: "center",
                  position: "relative",
                  cursor: "pointer",
                  border: "2px dashed #ccc",
                  "&:hover": { borderColor: "#999" },
                }}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  required
                  onChange={(e) => setFiles(e.target.files)}
                />

                <Upload size={20} style={{ marginBottom: 4, margin: "auto" }} />
                <Typography variant="body2">
                  Click to upload or drag and drop
                </Typography>
                <Typography variant="caption">
                  (SVG, JPG, PNG, or GIF maximum 900×400)
                </Typography>
              </Paper>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={editModal} onClose={()=>setEditModal(false)}>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogContent sx={{ paddingBottom: 0 }}>
            <form onSubmit={handleEditSave}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="category"
                label="Category name"
                type="text"
                fullWidth
                variant="outlined"
                value={editCategoryName}
                onChange={(e) => setEditCategoryName(e.target.value)}
              />
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: "center",
                  position: "relative",
                  cursor: "pointer",
                  border: "2px dashed #ccc",
                  "&:hover": { borderColor: "#999" },
                }}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  required
                  onChange={(e) => setEditFiles(e.target.files)}
                />

                <Upload size={20} style={{ marginBottom: 4, margin: "auto" }} />
                <Typography variant="body2">
                  Click to upload or drag and drop
                </Typography>
                <Typography variant="caption">
                  (SVG, JPG, PNG, or GIF maximum 900×400)
                </Typography>
              </Paper>
              <DialogActions>
                <Button onClick={()=>setEditModal(false)}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </>
    </>
  );
};

export default OtherCategory;
