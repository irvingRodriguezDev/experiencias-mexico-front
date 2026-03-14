import { Typography } from "@mui/material";

const FieldLabel = ({ children, required }) => (
  <Typography
    sx={{
      fontSize: 11,
      fontWeight: "bold",
      letterSpacing: "0.15em",
      color: "rgba(1,82,140,0.9)",
      textTransform: "uppercase",
      mb: 1,
      fontFamily: "'Jost', sans-serif",
      display: "flex",
      alignItems: "center",
      gap: 0.5,
    }}
  >
    {children}
    {required && (
      <span style={{ color: "#A3BB13", fontSize: 14, lineHeight: 1 }}>*</span>
    )}
  </Typography>
);

export default FieldLabel;
