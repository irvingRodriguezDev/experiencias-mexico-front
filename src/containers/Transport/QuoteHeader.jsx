import { Box, Typography } from "@mui/material";

const QuoteHeader = () => (
  <Box sx={{ textAlign: "center", maxWidth: 600, mx: "auto", mb: 8 }}>
    <Typography
      sx={{
        fontSize: 40,
        fontWeight: "bold",
        letterSpacing: "0.4em",
        color: "#A3BB13",
        textTransform: "uppercase",
        mb: 2,
        fontFamily: "'Jost', sans-serif",
      }}
    >
      Solicitud de servicio
    </Typography>

    <Typography
      sx={{
        fontSize: { xs: 30, md: 42 },
        fontWeight: 600,
        color: "#01528C",
        lineHeight: 1.1,
        mb: 1,
        fontFamily: "'Jost', sans-serif",
      }}
    >
      Cotiza tu viaje
    </Typography>

    <Typography
      sx={{
        fontSize: { xs: 20, md: 30 },
        fontWeight: 300,
        color: "#A3BB13",
        lineHeight: 1.2,
        mb: 3,
        fontFamily: "'Jost', sans-serif",
      }}
    >
      rápido y sin compromiso
    </Typography>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        mb: 3,
      }}
    >
      <Box
        sx={{
          width: 28,
          height: 2,
          background: "#01528C",
          borderRadius: 1,
          opacity: 0.8,
        }}
      />
      <Box
        sx={{ width: 52, height: 3, background: "#A3BB13", borderRadius: 1 }}
      />
      <Box
        sx={{
          width: 28,
          height: 2,
          background: "#01528C",
          borderRadius: 1,
          opacity: 0.8,
        }}
      />
    </Box>

    <Typography
      sx={{
        fontSize: 19,
        fontWeight: "bold",
        color: "rgba(1,82,140,0.9)",
        lineHeight: 1.85,
        fontFamily: "'Jost', sans-serif",
      }}
    >
      Completa el formulario y recibe tu cotización personalizada por WhatsApp y
      correo electrónico.
    </Typography>
  </Box>
);

export default QuoteHeader;
