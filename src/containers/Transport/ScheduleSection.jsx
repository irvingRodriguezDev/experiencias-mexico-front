import { Box, Grid, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import FieldLabel from "./FieldLabel";
import SectionTitle from "./SectionTitle";

const pickerSx = {
  width: "100%",
  "& .MuiOutlinedInput-root": {
    fontFamily: "'Jost', sans-serif",
    fontSize: 14,
    fontWeight: 300,
    borderRadius: "12px",
    background: "#ffffff",
    "& fieldset": {
      borderColor: "rgba(1,82,140,0.15)",
      borderWidth: "1.5px",
    },
    "&:hover fieldset": { borderColor: "rgba(1,82,140,0.35)" },
    "&.Mui-focused fieldset": {
      borderColor: "#01528C",
      borderWidth: "1.5px",
    },
  },
  "& .MuiInputBase-input": {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: 14,
    color: "#01528C",
  },
  "& .MuiIconButton-root": {
    color: "rgba(1,82,140,0.4)",
    "&:hover": { color: "#01528C", background: "rgba(1,82,140,0.05)" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'Jost', sans-serif",
    fontSize: 13,
    fontWeight: 300,
    color: "rgba(1,82,140,0.55)",
    "&.Mui-focused": { color: "#01528C" },
  },
};

// Estilos del popover del calendario
const popperSx = {
  "& .MuiPaper-root": {
    borderRadius: "16px",
    border: "1.5px solid rgba(1,82,140,0.10)",
    boxShadow: "0 12px 40px rgba(1,82,140,0.12)",
    fontFamily: "'Jost', sans-serif",
    overflow: "hidden",
  },
  "& .MuiPickersCalendarHeader-root": {
    "& .MuiPickersCalendarHeader-label": {
      fontFamily: "'Jost', sans-serif",
      fontWeight: 500,
      fontSize: 14,
      color: "#01528C",
      textTransform: "capitalize",
    },
    "& .MuiIconButton-root": {
      color: "#01528C",
      "&:hover": { background: "rgba(1,82,140,0.07)" },
    },
  },
  "& .MuiDayCalendar-weekDayLabel": {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 400,
    fontSize: 12,
    color: "rgba(1,82,140,0.45)",
    textTransform: "capitalize",
  },
  "& .MuiPickersDay-root": {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: 13,
    color: "#01528C",
    borderRadius: "8px",
    "&:hover": {
      background: "rgba(1,82,140,0.07)",
    },
    "&.Mui-selected": {
      background: "#01528C !important",
      color: "#ffffff",
      fontWeight: 500,
      "&:hover": { background: "#01357a !important" },
    },
    "&.MuiPickersDay-today:not(.Mui-selected)": {
      border: "1.5px solid #A3BB13",
      color: "#A3BB13",
      fontWeight: 500,
    },
    "&.Mui-disabled": {
      color: "rgba(1,82,140,0.2)",
    },
  },
  "& .MuiPickersYear-yearButton": {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: 13,
    color: "#01528C",
    borderRadius: "8px",
    "&.Mui-selected": {
      background: "#01528C",
      color: "#ffffff",
    },
    "&:hover": { background: "rgba(1,82,140,0.07)" },
  },
  "& .MuiPickersMonth-monthButton": {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
    fontSize: 13,
    color: "#01528C",
    borderRadius: "8px",
    textTransform: "capitalize",
    "&.Mui-selected": {
      background: "#01528C",
      color: "#ffffff",
    },
    "&:hover": { background: "rgba(1,82,140,0.07)" },
  },
  // TimePicker
  "& .MuiMultiSectionDigitalClock-root": {
    "& .MuiMenuItem-root": {
      fontFamily: "'Jost', sans-serif",
      fontWeight: 300,
      fontSize: 14,
      color: "#01528C",
      borderRadius: "8px",
      mx: 0.5,
      "&.Mui-selected": {
        background: "#01528C",
        color: "#ffffff",
        fontWeight: 500,
      },
      "&:hover": { background: "rgba(1,82,140,0.07)" },
    },
  },
  "& .MuiDialogActions-root .MuiButton-root": {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#01528C",
    "&:last-child": {
      color: "#ffffff",
      background: "#01528C",
      borderRadius: "8px",
      px: 2,
      "&:hover": { background: "#013f6e" },
    },
  },
};

const ScheduleSection = ({ form, onChange }) => {
  const today = dayjs().startOf("day");

  // Conversores dayjs ↔ string "YYYY-MM-DD" / "HH:mm"
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
    <Box sx={{ mb: 5 }}>
      <SectionTitle number='04'>Fechas y horarios</SectionTitle>

      <Grid container spacing={2.5}>
        {/* ── Fecha salida ── */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <FieldLabel required>Fecha de salida</FieldLabel>
          <DatePicker
            value={toDate(form.fechaInicio)}
            onChange={fromDate}
            minDate={today}
            format='DD/MM/YYYY'
            sx={pickerSx}
            slotProps={{
              popper: { sx: popperSx },
              textField: { placeholder: "DD/MM/AAAA" },
            }}
          />
        </Grid>

        {/* ── Hora salida ── */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <FieldLabel required>Hora de salida</FieldLabel>
          <TimePicker
            value={toTime(form.horaInicio)}
            onChange={fromTime("horaInicio")}
            format='hh:mm a'
            minutesStep={1}
            sx={pickerSx}
            slotProps={{
              popper: { sx: popperSx },
              textField: { placeholder: "hh:mm am/pm" },
            }}
          />
        </Grid>

        {/* ── Regreso (solo viaje redondo) ── */}
        {form.tipoViaje === "redondo" && (
          <Grid size={12}>
            <Box
              sx={{
                p: 3,
                borderRadius: "14px",
                background: "rgba(163,187,19,0.05)",
                border: "1.5px solid rgba(163,187,19,0.2)",
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  color: "#A3BB13",
                  textTransform: "uppercase",
                  fontFamily: "'Jost', sans-serif",
                  mb: 2,
                }}
              >
                Regreso
              </Typography>

              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FieldLabel required>Fecha de regreso</FieldLabel>
                  <DatePicker
                    value={toDate(form.fechaFin)}
                    onChange={fromDateFin}
                    minDate={form.fechaInicio ? dayjs(form.fechaInicio) : today}
                    format='DD/MM/YYYY'
                    sx={pickerSx}
                    slotProps={{
                      popper: { sx: popperSx },
                      textField: { placeholder: "DD/MM/AAAA" },
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <FieldLabel required>Hora de regreso</FieldLabel>
                  <TimePicker
                    value={toTime(form.horaFin)}
                    onChange={fromTime("horaFin")}
                    format='hh:mm a'
                    minutesStep={1}
                    sx={pickerSx}
                    slotProps={{
                      popper: { sx: popperSx },
                      textField: { placeholder: "hh:mm am/pm" },
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
