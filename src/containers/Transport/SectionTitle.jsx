import { Box, Typography } from "@mui/material";

const SectionTitle = ({ number, children }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
    <Box
      sx={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: "#01528C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Typography
        sx={{
          fontSize: 19,
          fontWeight: 500,
          color: "#A3BB13",
          fontFamily: "'Jost', sans-serif",
        }}
      >
        {number}
      </Typography>
    </Box>
    <Typography
      sx={{
        fontSize: 13,
        fontWeight: "bold",
        letterSpacing: "0.2em",
        color: "#01528C",
        textTransform: "uppercase",
        fontFamily: "'Jost', sans-serif",
      }}
    >
      {children}
    </Typography>
    <Box sx={{ flex: 1, height: "1px", background: "rgba(1,82,140,0.8)" }} />
  </Box>
);

export default SectionTitle;
