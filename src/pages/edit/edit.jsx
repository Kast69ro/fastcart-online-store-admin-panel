import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  Chip,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from "@mui/material";
import { Upload } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getBrand } from "../../entities/api/brand/brand";
import { getCategory } from "../../entities/api/category/category";
import { getSubCategory } from "../../entities/api/sub-category/sub-categore";
import { getColor } from "../../entities/api/color/color";
import { deleteImage, editProduct } from "../../entities/api/products/products";
import { API } from "../../config/utilits/utilits";

export default function Edit() {
  const brand = useSelector((state) => state.brands.brandData);
  const categories = useSelector((state) => state.category.categoryData);
  const subCategories = useSelector(
    (state) => state.subCategory.subCategoryData
  );
  const colors = useSelector((state) => state.color?.colorData);
  const product = useSelector((state) => state.productById.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrand());
    dispatch(getCategory());
    dispatch(getSubCategory());
    dispatch(getColor());

}, []);

const [productName, setProductName] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("");
const [subCategory, setSubCategory] = useState("");
const [price, setPrice] = useState("");
const [discount, setDiscount] = useState("");
const [count, setCount] = useState("");
const [brands, setBrand] = useState("");
const [files, setFiles] = useState([]);
const [colour, setColour] = useState("");
const [hasDiscount, setHasDiscount] = useState(false);
const [existingImages, setExistingImages] = useState([]); 


const [previews, setPreviews] = useState([]);

const [tags, setTags] = useState([
    "T-Shirt",
    "Men Clothes",
    "Summer Collection",
]);
const [options, setOptions] = useState({
    size: ["S", "M", "L", "XL"],
    weight: ["10", "20", "30", "40"],
});

useEffect(() => {
  if (
    product &&
    Object.keys(product).length > 0 &&
    brand.length > 0 &&
    categories.length > 0 &&
    subCategories.length > 0
  ) {
    setProductName(product.productName || "");
    setDescription(product.description || "");
    setPrice(product.price?.toString() || "");
    setCount(product.quantity?.toString() || "");
    setColour(product.color || "");
    setHasDiscount(product.hasDiscount || false);
    setDiscount(product.discountPrice?.toString() || "");

    const brandMatch = brand.find((b) => b.brandName === product.brand);
    setBrand(brandMatch ? brandMatch.id : "");

    const categoryMatch = categories.find(
      (c) => c.categoryName === product.category
    );
    setCategory(categoryMatch ? categoryMatch.id : "");

    const subCategoryMatch = subCategories.find(
  (sc) => sc.id === product.subCategoryId
);
setSubCategory(subCategoryMatch ? subCategoryMatch.id : "");

 const colorMatch = colors.find((c) => c.colorName === product.color);
    setColour(colorMatch ? colorMatch.id : "");

  }
   if (product?.images) {
    setExistingImages(product.images);
  }
  console.log(product);
  
}, [product, brand, categories, subCategories]);

const deleteFoto = (id) => {
  dispatch(deleteImage(id));
  setExistingImages(prev => prev.filter(img => img.id !== id));
};






  const handleSave = () => {
  let newProduct = {
    id:product.id,
    BrandId:brands,
    ColorId:colour,
    ProductName:productName,
    Description:description,
    Quantity:count,
    Code:uuidv4(),
    Price:price,
    HasDiscount:hasDiscount,
    DiscountPrice :discount,
    SubCategoryId:subCategory,
  }
  dispatch(editProduct(newProduct))
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);

    const previewsWithIndex = await Promise.all(
      selectedFiles.map(async (file) => {
        const base64 = await getBase64(file);
        return { file, preview: base64 };
      })
    );
    setPreviews(previewsWithIndex);
  };
  const handleRemoveImage = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setFiles(newFiles);
    setPreviews(newPreviews);
  };



  return (
    <Box p={4}>
      <Typography variant="h6" mb={2}>
        {"Products / Add new"}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                label="Product name"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField  fullWidth label="Code" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Categories</InputLabel>
                <Select
                value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Categories"
                >
                  {categories?.map((el) => {
                    return (
                      <MenuItem key={el.id} value={el.id}>
                        {el.categoryName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ marginTop: "20px" }}>
                <InputLabel>Sub-Categories</InputLabel>
                <Select
                value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  label="SubCategories"
                >
                  {subCategories?.map((el) => {
                    return (
                      <MenuItem key={el.id} value={el.id}>
                        {el.subCategoryName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Brands</InputLabel>
                <Select
                value={brands}
                  onChange={(e) => setBrand(e.target.value)}
                  label="Brands"
                >
                  {brand?.map((el) => {
                    return (
                      <MenuItem key={el.id} value={el.id}>
                        {el.brandName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
              value={price}
                fullWidth
                onChange={(e) => setPrice(e.target.value)}
                label="Product price"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
              value={discount}
                fullWidth
                onChange={(e) => setDiscount(e.target.value)}
                label="Discount"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
              value={count}
                fullWidth
                onChange={(e) => setCount(e.target.value)}
                label="Count"
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={2}>
                <Switch
                checked={hasDiscount}
                onChange={(e) => setHasDiscount(e.target.checked)} />
                
                <Typography>Add tax for this product</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle1">Different Options</Typography>
                <Switch defaultChecked />
              </Box>
              <Typography variant="body2" color="text.secondary">
                This product has multiple options
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <TextField fullWidth label="Option 1" value="Size" disabled />
                </Grid>
                <Grid item xs={9}>
                  <ToggleButtonGroup fullWidth size="small">
                    {options.size.map((val) => (
                      <ToggleButton key={val} value={val}>
                        {val}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    label="Option 2"
                    value="Weight"
                    disabled
                  />
                </Grid>
                <Grid item xs={9}>
                  <ToggleButtonGroup fullWidth size="small">
                    {options.weight.map((val) => (
                      <ToggleButton key={val} value={val}>
                        {val}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button size="small">+ Add more</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="flex-end" gap={2} mb={2}>
            <Button variant="text">Cancel</Button>
            <Button onClick={handleSave} variant="contained">
              Save
            </Button>
          </Box>
          <Box mb={4}>
            <Box
              mb={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle2">Colour:</Typography>
              <Button size="small">Create new</Button>
            </Box>
            <Box display="flex" gap={1} flexWrap="wrap">
              {colors.map((el) => (
                <Box
                  key={el.id}
                  onClick={() => setColour(el.id)}
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    backgroundColor: el.colorName,
                    border:
                      colour === el.colorName
                        ? "2px solid black"
                        : "1px solid lightgray",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          </Box>
          <Box mb={4}>
            <Typography variant="subtitle2" mb={1}>
              Tags
            </Typography>
            <TextField fullWidth label="Tags name" size="small" />
            <Box display="flex" gap={1} flexWrap="wrap" mt={1}>
              {tags.map((tag) => (
                <Chip key={tag} label={tag} onDelete={() => {}} />
              ))}
            </Box>
          </Box>
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
            value={files}
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleFileChange}
            />

            <Upload size={20} style={{ marginBottom: 4, margin: "auto" }} />
            <Typography variant="body2">
              Click to upload or drag and drop
            </Typography>
            <Typography variant="caption">
              (SVG, JPG, PNG, or GIF maximum 900×400)
            </Typography>
          </Paper>
          <Box className="flex flex-wrap gap-2 mt-5">
  {existingImages.map(({ id, images }) => (
    <div key={id} className="relative inline-block mr-2">
      <img
        src={`${API}/images/${images}`}
        alt="product"
        className="w-20 h-20 object-cover rounded-lg"
      />
      <button
        onClick={() => deleteFoto(id)}
        className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 border-none cursor-pointer flex items-center justify-center text-sm"
        type="button"
      >
        ×
      </button>
    </div>
  ))}
</Box>

          <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
            {previews.map((item, index) => (
              <Box key={index} position="relative">
                <img
                  src={item.preview}
                  alt={`preview-${index}`}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
                <Button
                  size="small"
                  onClick={() => handleRemoveImage(index)}
                  sx={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    minWidth: "auto",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    padding: 0,
                    fontSize: 12,
                    lineHeight: 1,
                    backgroundColor: "white",
                    color: "red",
                    border: "1px solid lightgray",
                    zIndex: 1,
                  }}
                >
                  ×
                </Button>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
