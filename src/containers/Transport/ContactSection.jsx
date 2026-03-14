import { Box, Grid, TextField } from "@mui/material";
import SectionTitle from "./SectionTitle";
import FieldLabel from "./FieldLabel";
import { inputSx } from "./formStyles";

const ContactSection = ({ form, onChange }) => (
  <Box sx={{ mb: 5 }}>
    <SectionTitle number='02'>Datos del solicitante</SectionTitle>
    <Grid container spacing={2.5}>
      <Grid size={12}>
        <FieldLabel required>Nombre completo</FieldLabel>
        <TextField
          fullWidth
          placeholder='Ej. Juan García López'
          value={form.nombre}
          onChange={onChange("nombre")}
          sx={inputSx}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <FieldLabel required>Teléfono (WhatsApp)</FieldLabel>
        <TextField
          fullWidth
          placeholder='Ej. 55 1234 5678'
          value={form.telefono}
          onChange={onChange("telefono")}
          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z'
                    fill='#25D366'
                  />
                  <path
                    d='M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.336-1.506C8.01 23.459 9.963 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.395l-.37-.22-3.762.894.952-3.659-.242-.382C2.516 15.565 2 13.84 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'
                    fill='#25D366'
                    opacity='0.6'
                  />
                </svg>
              </Box>
            ),
          }}
          sx={inputSx}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <FieldLabel required>Correo electrónico</FieldLabel>
        <TextField
          fullWidth
          placeholder='Ej. juan@correo.com'
          value={form.correo}
          onChange={onChange("correo")}
          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                <svg width='15' height='15' viewBox='0 0 24 24' fill='none'>
                  <rect
                    x='2'
                    y='4'
                    width='20'
                    height='16'
                    rx='3'
                    stroke='#01528C'
                    strokeWidth='1.8'
                    opacity='0.5'
                  />
                  <path
                    d='M2 8l10 6 10-6'
                    stroke='#01528C'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    opacity='0.5'
                  />
                </svg>
              </Box>
            ),
          }}
          sx={inputSx}
        />
      </Grid>
    </Grid>
  </Box>
);

export default ContactSection;
