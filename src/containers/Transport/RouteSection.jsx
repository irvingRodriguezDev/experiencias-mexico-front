import { Box, Grid, TextField, MenuItem } from "@mui/material";
import SectionTitle from "./SectionTitle";
import FieldLabel from "./FieldLabel";
import { inputSx } from "./formStyles";

const unidades = [
  // Particulares
  {
    group: "Vehículos particulares",
    value: "sedan",
    label: "Sedán — hasta 4 pasajeros",
  },
  {
    group: "Vehículos particulares",
    value: "suv",
    label: "SUV — hasta 6 pasajeros",
  },
  // Vans
  { group: "Vans y minibuses", value: "van_14", label: "Van — 14 pasajeros" },
  {
    group: "Vans y minibuses",
    value: "van_20",
    label: "Van Plus — 20 pasajeros",
  },
  {
    group: "Vans y minibuses",
    value: "van_21",
    label: "Van Executive — 21 pasajeros",
  },
  // Autobuses
  { group: "Autobuses", value: "bus_45", label: "Autobús — 45 pasajeros" },
  { group: "Autobuses", value: "bus_48", label: "Autobús Plus — 48 pasajeros" },
  {
    group: "Autobuses",
    value: "bus_50",
    label: "Autobús Executive — 50 pasajeros",
  },
  {
    group: "Autobuses",
    value: "bus_55",
    label: "Autobús Gran Turismo — 55 pasajeros",
  },
];

const groups = [...new Set(unidades.map((u) => u.group))];

const RouteSection = ({ form, onChange }) => (
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
        <TextField
          select
          fullWidth
          value={form.tipoUnidad}
          onChange={onChange("tipoUnidad")}
          sx={inputSx}
          SelectProps={{
            displayEmpty: true,
            renderValue: (v) =>
              v ? (
                unidades.find((u) => u.value === v)?.label
              ) : (
                <span
                  style={{
                    color: "rgba(1,82,140,0.35)",
                    fontFamily: "'Jost',sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                  }}
                >
                  Selecciona el tipo de unidad
                </span>
              ),
          }}
        >
          {groups.map((group) => [
            <MenuItem
              key={`header-${group}`}
              disabled
              sx={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 20,
                letterSpacing: "0.15em",
                color: "#A3BB13",
                textTransform: "uppercase",
                opacity: "1 !important",
                mt: 1,
              }}
            >
              — {group}
            </MenuItem>,
            ...unidades
              .filter((u) => u.group === group)
              .map((u) => (
                <MenuItem
                  key={u.value}
                  value={u.value}
                  sx={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 19,
                    fontWeight: "bold",
                    color: "#01528C",
                    py: 1.2,
                    pl: 3,
                  }}
                >
                  {u.label}
                </MenuItem>
              )),
          ])}
        </TextField>
      </Grid>
    </Grid>
  </Box>
);

export default RouteSection;
