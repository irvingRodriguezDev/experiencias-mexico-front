import { Box, TextField } from "@mui/material";
import SectionTitle from "./SectionTitle";
import FieldLabel from "./FieldLabel";
import { inputSx } from "./formStyles";

const DescriptionSection = ({ value, onChange }) => (
  <Box sx={{ mb: 5 }}>
    <SectionTitle number='05'>Descripción del servicio</SectionTitle>
    <FieldLabel>¿Qué incluye o requiere tu servicio?</FieldLabel>
    <TextField
      fullWidth
      multiline
      rows={4}
      placeholder='Ej. Necesito transporte para 40 personas, incluye parada en zona arqueológica, requiero WiFi a bordo...'
      value={value}
      onChange={onChange("descripcion")}
      sx={{
        ...inputSx,
        "& .MuiOutlinedInput-root": {
          ...inputSx["& .MuiOutlinedInput-root"],
          alignItems: "flex-start",
          fontSize: 19,
        },
      }}
    />
  </Box>
);

export default DescriptionSection;
