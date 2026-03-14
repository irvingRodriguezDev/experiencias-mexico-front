export const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: "'Jost', sans-serif",
    fontSize: 14,
    fontWeight: 300,
    borderRadius: "12px",
    background: "#ffffff",
    "& fieldset": { borderColor: "rgba(1,82,140,0.15)", borderWidth: "1.5px" },
    "&:hover fieldset": { borderColor: "rgba(1,82,140,0.35)" },
    "&.Mui-focused fieldset": { borderColor: "#01528C", borderWidth: "1.5px" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'Jost', sans-serif",
    fontSize: 13,
    fontWeight: 300,
    color: "rgba(1,82,140,0.55)",
    "&.Mui-focused": { color: "#01528C" },
  },
  "& .MuiSelect-select": {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 300,
  },
};

export const labelSx = {
  fontSize: 11,
  fontWeight: 400,
  letterSpacing: "0.15em",
  color: "rgba(1,82,140,0.6)",
  textTransform: "uppercase",
  mb: 1,
  fontFamily: "'Jost', sans-serif",
};
