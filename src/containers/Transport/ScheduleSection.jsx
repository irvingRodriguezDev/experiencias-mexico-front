import { Box, Grid, Typography, InputAdornment } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import dayjs from "dayjs";
import FieldLabel from "./FieldLabel";
import SectionTitle from "./SectionTitle";

// Estilo para envolver los bloques de Salida y Regreso como Tarjetas Premium
const cardWrapperSx = {
  p: 3,
  borderRadius: "16px",
  background: "#ffffff",
  border: "1px solid rgba(1,82,140,0.08)",
  boxShadow: "0 8px 24px rgba(1,82,140,0.02)",
  height: "100%",
};

const pickerSx = {
  width: "100%",
  maxWidth: "320px", // 🚀 Clave: Evita que el input se estire infinitamente
  "& .MuiOutlinedInput-root": {
    fontFamily: "'Jost', sans-serif",
    fontSize: "16px",
    fontWeight: 500,
    borderRadius: "12px",
    background: "#F8FAFC", // Un gris/azul sutil de fondo para el input
    height: "54px",
    "& fieldset": {
      borderColor: "rgba(1,82,140,0.12)",
      borderWidth: "1px",
    },
    "&:hover fieldset": { borderColor: "rgba(1,82,140,0.3)" },
    "&.Mui-focused fieldset": {
      borderColor: "#01528C",
      borderWidth: "2px",
    },
  },
  "& .MuiInputBase-input": {
    fontFamily: "'Jost', sans-serif",
    color: "#01528C",
    paddingLeft: "12px",
  },
};

// Estilos del Modal que se abre en grande (Estilo App Nativa)
const popperSx = {
  "& .MuiPaper-root": {
    borderRadius: "24px",
    p: 1,
    boxShadow: "0 24px 50px rgba(1,82,140,0.15)",
  },
  "& .MuiPickersLayout-root": {
    fontFamily: "'Jost', sans-serif",
  },
  "& .MuiTypography-root": {
    fontFamily: "'Jost', sans-serif",
  },
  "& .MuiButton-root": {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 600,
  },
};

const ScheduleSection = ({ form, onChange }) => {
  const today = dayjs().startOf("day");

  const toDate = (str) => (str ? dayjs(str) : null);
  const toTime = (str) => (str ? dayjs(`2000-01-01T${str}`) : null);

  const fromDate = (val) =>
    onChange("fechaInicio")({
      target: { value: val ? val.format("YYYY-MM-DD") : "" },
    });
  const fromTime = (field) => (val) =>
    onChange(field)({ target: { value: val ? val.format("HH:mm") : "" } });
  const fromDateFin = (val) =>
    onChange("fechaFin")({
      target: { value: val ? val.format("YYYY-MM-DD") : "" },
    });

  return (
    <Box sx={{ mb: 6 }}>
      <SectionTitle number='03'>Fechas y horarios</SectionTitle>

      <Grid container spacing={3}>
        {/* ── BLOQUE DE SALIDA ── */}
        <Grid size={{ xs: 12, md: form.tipoViaje === "round_trip" ? 6 : 12 }}>
          <Box sx={cardWrapperSx}>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#01528C",
                textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif",
                mb: 3,
              }}
            >
              🛫 Datos de Salida
            </Typography>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FieldLabel required>Fecha de salida</FieldLabel>
                <MobileDatePicker
                  value={toDate(form.fechaInicio)}
                  onChange={fromDate}
                  minDate={today}
                  format='DD / MM / YYYY'
                  sx={pickerSx}
                  slotProps={{
                    dialog: { sx: popperSx },
                    textField: {
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position='start'>
                            <CalendarTodayIcon
                              sx={{ color: "rgba(1,82,140,0.4)", fontSize: 20 }}
                            />
                          </InputAdornment>
                        ),
                      },
                    },
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <FieldLabel required>Hora de salida</FieldLabel>
                <MobileTimePicker
                  value={toTime(form.horaInicio)}
                  onChange={fromTime("horaInicio")}
                  format='hh:mm A'
                  minutesStep={5}
                  sx={pickerSx}
                  slotProps={{
                    dialog: { sx: popperSx },
                    textField: {
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AccessTimeIcon
                              sx={{ color: "rgba(1,82,140,0.4)", fontSize: 20 }}
                            />
                          </InputAdornment>
                        ),
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* ── BLOQUE DE REGRESO (Viaje Redondo) ── */}
        {form.tipoViaje === "round_trip" && (
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                ...cardWrapperSx,
                background: "rgba(163,187,19,0.02)",
                borderColor: "rgba(163,187,19,0.15)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#A3BB13",
                  textTransform: "uppercase",
                  fontFamily: "'Jost', sans-serif",
                  mb: 3,
                }}
              >
                🛬 Datos de Regreso
              </Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FieldLabel required>Fecha de regreso</FieldLabel>
                  <MobileDatePicker
                    value={toDate(form.fechaFin)}
                    onChange={fromDateFin}
                    minDate={form.fechaInicio ? dayjs(form.fechaInicio) : today}
                    format='DD / MM / YYYY'
                    sx={pickerSx}
                    slotProps={{
                      dialog: { sx: popperSx },
                      textField: {
                        InputProps: {
                          startAdornment: (
                            <InputAdornment position='start'>
                              <CalendarTodayIcon
                                sx={{
                                  color: "rgba(163,187,19,0.4)",
                                  fontSize: 20,
                                }}
                              />
                            </InputAdornment>
                          ),
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <FieldLabel required>Hora de regreso</FieldLabel>
                  <MobileTimePicker
                    value={toTime(form.horaFin)}
                    onChange={fromTime("horaFin")}
                    format='hh:mm A'
                    minutesStep={5}
                    sx={pickerSx}
                    slotProps={{
                      dialog: { sx: popperSx },
                      textField: {
                        InputProps: {
                          startAdornment: (
                            <InputAdornment position='start'>
                              <AccessTimeIcon
                                sx={{
                                  color: "rgba(163,187,19,0.4)",
                                  fontSize: 20,
                                }}
                              />
                            </InputAdornment>
                          ),
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ScheduleSection;
