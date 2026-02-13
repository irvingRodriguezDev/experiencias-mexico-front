import { Box, Typography, Button, Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./offer.css";
import lanchas from "../../assets/lanchas.webp";
import pareja from "../../assets/pareja.webp";
import WorldIcon from "../icons/WorldIcon";
import PackageIcon from "../icons/PackageIcon";
import china from "../../assets/nuevo-europa.webp";
import rosa from "../../assets/rosa.webp";
import europa from "../../assets/europa.webp";
const Offer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 10,
        bgcolor: "#F7F6F6",
      }}
    >
      <img
        src={china}
        style={{
          marginLeft: -270,
          zIndex: 0,
          position: "relative",
        }}
      />
      {/* CONTENEDOR PRINCIPAL */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          display: "flex",
          gap: 8,
          zIndex: 5,
        }}
      >
        {/* ===== LEFT CONTENT ===== */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: "#6C3BFF",
              fontSize: "16px",
              fontStyle: "italic",
              mb: 1,
            }}
          >
            Dream Your Next Trip
          </Typography>

          <Typography
            sx={{
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "56px",
              mb: 2,
              color: "#000",
            }}
          >
            Discover When Ever <br />
            You Want To Go
          </Typography>

          <Typography
            sx={{
              color: "#555",
              fontSize: "16px",
              maxWidth: "500px",
              mb: 4,
            }}
          >
            Are You Tired Of The Typical Tourist Destinations And Looking To
            Step Out Of Your Comfort Zone? Adventure Travel May Be The Perfect
            Solution For You! Here Are Four.
          </Typography>

          {/* FEATURE 1 */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <WorldIcon />
            </Box>

            <Box>
              <Typography fontWeight={600}>Best Travel Agency</Typography>
              <Typography fontSize='14px' color='#555'>
                Are you tired of the typical tourist destination and looking
                step out of your comfort.
              </Typography>
            </Box>
          </Box>

          {/* FEATURE 2 */}
          <Box sx={{ display: "flex", gap: 2, mb: 5 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PackageIcon />
            </Box>

            <Box>
              <Typography fontWeight={600}>Secure Journey With Us</Typography>
              <Typography fontSize='14px' color='#555'>
                Are you tired of the typical tourist destination and looking
                step out of your comfort.
              </Typography>
            </Box>
          </Box>

          <Button
            variant='contained'
            sx={{
              bgcolor: "#6C3BFF",
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#5A2DE0",
              },
            }}
          >
            Book Your Trip →
          </Button>
        </Box>

        {/* ===== RIGHT IMAGES ===== */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* TEXTO VERTICAL */}
          <Typography
            sx={{
              position: "absolute",
              right: "-60px",
              top: "40%",
              transform: "rotate(90deg) translateY(-50%)",
              fontSize: "140px",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "1px #999",
              letterSpacing: "8px",
            }}
          >
            TRAVEL
          </Typography>

          {/* IMAGEN GRANDE */}
          <Box
            component='img'
            src={lanchas}
            sx={{
              width: "490px",
              height: "590px",
              objectFit: "cover",
              borderRadius: "24px",
              marginRight: 25,
            }}
          />

          {/* IMAGEN FLOTANTE */}
          <Box
            component='img'
            src={pareja}
            sx={{
              position: "absolute",
              bottom: "170px",
              left: "-70px",
              width: "300px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            }}
          />
          <img
            src={rosa}
            style={{ position: "absolute", marginRight: "105%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Offer;
