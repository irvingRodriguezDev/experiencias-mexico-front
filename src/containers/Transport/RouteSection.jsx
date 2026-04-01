import { Box, Grid, TextField, MenuItem } from "@mui/material";
import SectionTitle from "./SectionTitle";
import FieldLabel from "./FieldLabel";
import { inputSx } from "./formStyles";
import UnitTypesSelect from "../SelectOptions/UnitTypesSelect";

const RouteSection = ({ form, onChange, typeUnit, setTypeUnit, setForm }) => {
  const detectarCambiosTypeUnit = (value) => {
    setForm((prev) => ({ ...prev, tipoUnidad: value.value })),
      setTypeUnit(value.value);
  };

  return (
    <Box sx={{ mb: 5 }}>
      <SectionTitle number='03'>Ruta y unidad</SectionTitle>
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FieldLabel required>Ciudad de origen</FieldLabel>
          <TextField
            fullWidth
            placeholder='Ej. Ciudad de México'
            value={form.origen}
            onChange={onChange("origen")}
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
                    <circle
                      cx='12'
                      cy='10'
                      r='3'
                      stroke='#A3BB13'
                      strokeWidth='2'
                    />
                    <path
                      d='M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z'
                      stroke='#A3BB13'
                      strokeWidth='2'
                    />
                  </svg>
                </Box>
              ),
            }}
            sx={inputSx}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <FieldLabel required>Ciudad de destino</FieldLabel>
          <TextField
            fullWidth
            placeholder='Ej. Cancún, Quintana Roo'
            value={form.destino}
            onChange={onChange("destino")}
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
                    <circle
                      cx='12'
                      cy='10'
                      r='3'
                      fill='#01528C'
                      fillOpacity='0.3'
                      stroke='#01528C'
                      strokeWidth='2'
                    />
                    <path
                      d='M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z'
                      stroke='#01528C'
                      strokeWidth='2'
                    />
                  </svg>
                </Box>
              ),
            }}
            sx={inputSx}
          />
        </Grid>

        <Grid size={12}>
          <FieldLabel required>Tipo de unidad</FieldLabel>
          <UnitTypesSelect detectarCambiosTypeUnit={detectarCambiosTypeUnit} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RouteSection;
