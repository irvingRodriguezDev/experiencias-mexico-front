import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SectionTitle from "./SectionTitle";
import FieldLabel from "./FieldLabel";

const TripTypeSection = ({ value, onChange }) => (
  <Box sx={{ mb: 5 }}>
    <SectionTitle number='01'>Tipo de viaje</SectionTitle>
    <FieldLabel>¿Cómo será tu viaje?</FieldLabel>
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={(_, val) => val && onChange(val)}
      sx={{ gap: 1.5, flexWrap: "wrap" }}
    >
      {[
        { value: "sencillo", label: "Viaje Sencillo", icon: "→" },
        { value: "redondo", label: "Viaje Redondo", icon: "⇄" },
      ].map((opt) => (
        <ToggleButton
          key={opt.value}
          value={opt.value}
          sx={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: 13,
            px: 3,
            py: 1.4,
            borderRadius: "12px !important",
            border: "1.5px solid rgba(1,82,140,0.15) !important",
            color: "rgba(1,82,140,0.6)",
            textTransform: "none",
            gap: 1,
            transition: "all 0.25s",
            "&.Mui-selected": {
              background: "#01528C",
              color: "#ffffff",
              borderColor: "#01528C !important",
              "&:hover": { background: "#01528C" },
            },
            "&:hover": {
              borderColor: "rgba(1,82,140,0.35) !important",
              background: "rgba(1,82,140,0.03)",
            },
          }}
        >
          <span style={{ fontSize: 22, fontWeight: "bold" }}>{opt.icon}</span>
          {opt.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  </Box>
);

export default TripTypeSection;
