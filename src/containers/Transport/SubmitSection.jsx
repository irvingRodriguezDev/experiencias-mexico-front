import { Box, Button, Typography } from "@mui/material";

const SubmitSection = ({ onSubmit }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: { xs: "stretch", sm: "center" },
      justifyContent: "space-between",
      gap: 3,
      pt: 2,
      borderTop: "1px solid rgba(1,82,140,0.8)",
    }}
  >
    <Typography
      sx={{
        fontSize: 14,
        fontWeight: "bold",
        color: "rgba(1,82,140,0.9)",
        fontFamily: "'Jost', sans-serif",
        maxWidth: 340,
        lineHeight: 1.7,
      }}
    >
      * Los campos marcados son obligatorios.
      <br />
      Te contactaremos en menos de 24 horas.
    </Typography>

    <Button
      onClick={onSubmit}
      variant='contained'
      disableElevation
      sx={{
        background: "#01528C",
        color: "#ffffff",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 400,
        fontSize: 13,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        px: 5,
        py: 1.8,
        borderRadius: "12px",
        border: "1.5px solid #01528C",
        whiteSpace: "nowrap",
        flexShrink: 0,
        transition: "all 0.3s ease",
        "&:hover": { background: "transparent", color: "#01528C" },
        "&:active": { transform: "scale(0.98)" },
      }}
    >
      Solicitar cotización
    </Button>
  </Box>
);

export default SubmitSection;
