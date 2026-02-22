import React from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
const SearchComponent = ({
  value,
  onChange,
  title = "Busca tu próxima aventura",
  placeholder = "Destino, tour, experiencia...",
  loading,
}) => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "transparent",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <Typography
        variant='h5'
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "#01528C",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </Typography>

      <Grid container justifyContent='center'>
        <Grid size={{ xs: 12, md: 8 }}>
          <TextField
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            variant='outlined'
            fullWidth
            type='text'
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  borderColor: "#A3BB13",
                },
                "&:hover fieldset": {
                  borderColor: "#A3BB13",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#A3BB13",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='end'>
                  {loading && <CircularProgress size={20} />}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchComponent;
