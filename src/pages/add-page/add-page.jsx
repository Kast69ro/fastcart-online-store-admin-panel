import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
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

export default function AddProduct() {
  const [colour, setColour] = useState("");
  const [tags, setTags] = useState([
    "T-Shirt",
    "Men Clothes",
    "Summer Collection",
  ]);
  const [options, setOptions] = useState({
    size: ["S", "M", "L", "XL"],
    weight: ["10", "20", "30", "40"],
  });

  return (
    <Box p={4}>
      <Typography variant="h6" mb={2}>
        {"Products / Add new"}
      </Typography>
      <Grid container spacing={4}>
        {/* Left Form */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField fullWidth label="Product name" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label="Code" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Description" multiline rows={4} />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Categories</InputLabel>
                <Select label="Categories">
                  <MenuItem value="">Select</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Brands</InputLabel>
                <Select label="Brands">
                  <MenuItem value="">Select</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label="Product price" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label="Discount" />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label="Count" />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={2}>
                <Switch />
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
            {/* Options */}
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

        {/* Right Panel */}
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="flex-end" gap={2} mb={2}>
            <Button variant="text">Cancel</Button>
            <Button variant="contained">Save</Button>
          </Box>
          <Box mb={4}>
            <Box mb={3} sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography variant="subtitle2" >
              Colour:
            </Typography>
            <Button size="small">Create new</Button>
            </Box>
            <Box display="flex" gap={1} flexWrap="wrap">
              {[
                "#3B82F6",
                "#EF4444",
                "#F59E0B",
                "#10B981",
                "#6366F1",
                "#111827",
              ].map((c) => (
                <Box
                  key={c}
                  onClick={() => setColour(c)}
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    backgroundColor: c,
                    border:
                      colour === c ? "2px solid black" : "1px solid lightgray",
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
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={(e) => {
                const files = e.target.files;
                console.log(files);
                // handle upload here
              }}
            />
            <Upload size={20} style={{ marginBottom: 4, margin: "auto" }} />
            <Typography variant="body2">
              Click to upload or drag and drop
            </Typography>
            <Typography variant="caption">
              (SVG, JPG, PNG, or GIF maximum 900×400)
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
