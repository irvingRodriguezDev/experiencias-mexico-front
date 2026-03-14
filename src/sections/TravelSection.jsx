import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const images = [
  "https://media.gq.com.mx/photos/5d7948531046f60008fd9a40/16:9/w_2560%2Cc_limit/GettyImages-508054022.jpg",
  "https://www.eluniversal.com.mx/resizer/v2/2BJNJ44FUZENZL3URM5JUQJQQ4.jpg?auth=d91159b45166fab327d54b6cd170959d40cc8bdaeef517db4a353b80224b2880&smart=true&height=666",
  "https://coolhuntermx.com/wp-content/uploads/2021/04/coolhuntermx_valle-de-bravo_-.jpeg",
  "https://plus.unsplash.com/premium_photo-1697730109336-2dcb7d892ef7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxheWElMjBtZXhpY298ZW58MHx8MHx8fDA%3D",
];

const TravelSection = () => {
  return (
    <>
      <link
        href='https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600&display=swap'
        rel='stylesheet'
      />

      <Box
        sx={{
          background: "#f6f6f6",
          px: { xs: 3, md: 10, lg: 16 },
          py: { xs: 8, md: 12 },
          fontFamily: "'Jost', sans-serif",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={6} alignItems='center'>
          {/* ── IZQUIERDA: Collage ── */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              <Grid container spacing={1.5}>
                {/* Foto 1 — pequeña arriba izquierda */}
                <Grid size={6}>
                  <Box
                    component='img'
                    src={images[0]}
                    sx={{
                      width: "100%",
                      height: { xs: 160, md: 200 },
                      objectFit: "cover",
                      borderRadius: "16px",
                      display: "block",
                    }}
                  />
                </Grid>

                {/* Foto 2 — grande arriba derecha */}
                <Grid size={6}>
                  <Box
                    component='img'
                    src={images[1]}
                    sx={{
                      width: "100%",
                      height: { xs: 240, md: 290 },
                      objectFit: "cover",
                      borderRadius: "16px",
                      display: "block",
                      mt: "-50px",
                    }}
                  />
                </Grid>

                {/* Foto 3 — grande abajo izquierda */}
                <Grid size={6}>
                  <Box
                    component='img'
                    src={images[2]}
                    sx={{
                      width: "100%",
                      height: { xs: 240, md: 290 },
                      objectFit: "cover",
                      borderRadius: "16px",
                      display: "block",
                      mt: "-50px",
                    }}
                  />
                </Grid>

                {/* Foto 4 — pequeña abajo derecha */}
                <Grid size={6}>
                  <Box
                    component='img'
                    src={images[3]}
                    sx={{
                      width: "100%",
                      height: { xs: 160, md: 200 },
                      objectFit: "cover",
                      borderRadius: "16px",
                      display: "block",
                    }}
                  />
                </Grid>
              </Grid>

              {/* Badge flotante sobre el collage */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 24,
                  left: -20,
                  background: "#ffffff",
                  border: "1.5px solid rgba(1,82,140,0.12)",
                  borderRadius: "14px",
                  px: 2.5,
                  py: 1.5,
                  boxShadow: "0 8px 28px rgba(1,82,140,0.10)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(163,187,19,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z'
                      stroke='#A3BB13'
                      strokeWidth='1.8'
                    />
                    <circle
                      cx='12'
                      cy='9'
                      r='2.5'
                      stroke='#A3BB13'
                      strokeWidth='1.8'
                    />
                  </svg>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: 19,
                      fontWeight: 600,
                      color: "#01528C",
                      fontFamily: "'Jost', sans-serif",
                      lineHeight: 1.2,
                    }}
                  >
                    +50 destinos
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 15,
                      fontWeight: 300,
                      color: "rgba(1,82,140,0.6)",
                      fontFamily: "'Jost', sans-serif",
                    }}
                  >
                    en toda la república
                  </Typography>
                </Box>
              </Box>

              {/* Badge flotante arriba derecha */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: -16,
                  background: "#01528C",
                  borderRadius: "12px",
                  px: 2,
                  py: 1.2,
                  boxShadow: "0 6px 20px rgba(1,82,140,0.25)",
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 21,
                    fontWeight: 300,
                    color: "#A3BB13",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "'Jost', sans-serif",
                  }}
                >
                  Desde 2017
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* ── DERECHA: Texto ── */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ pl: { md: 4 } }}>
              {/* Eyebrow */}
              <Typography
                sx={{
                  fontSize: 31,
                  fontWeight: "bold",
                  letterSpacing: "0.35em",
                  color: "#A3BB13",
                  textTransform: "uppercase",
                  mb: 2,
                  fontFamily: "'Jost', sans-serif",
                }}
              >
                Sobre nosotros
              </Typography>

              {/* Título principal */}
              <Typography
                sx={{
                  fontSize: { xs: 32, md: 42, lg: 48 },
                  fontWeight: 600,
                  color: "#01528C",
                  lineHeight: 1.1,
                  mb: 1.5,
                  fontFamily: "'Jost', sans-serif",
                }}
              >
                Explora México
              </Typography>

              {/* Subtítulo verde */}
              <Typography
                sx={{
                  fontSize: { xs: 22, md: 38 },
                  fontWeight: 300,
                  color: "#A3BB13",
                  lineHeight: 1.3,
                  mb: 3,
                  fontFamily: "'Jost', sans-serif",
                }}
              >
                Las vacaciones perfectas,
                <br />
                hechas realidad con nosotros.
              </Typography>

              {/* Línea decorativa */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 2,
                    background: "#01528C",
                    borderRadius: 1,
                    opacity: 0.8,
                  }}
                />
                <Box
                  sx={{
                    width: 48,
                    height: 3,
                    background: "#A3BB13",
                    borderRadius: 1,
                  }}
                />
                <Box
                  sx={{
                    width: 32,
                    height: 2,
                    background: "#01528C",
                    borderRadius: 1,
                    opacity: 0.8,
                  }}
                />
              </Box>

              {/* Descripción */}
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "rgba(1,82,140,0.70)",
                  lineHeight: 1.85,
                  mb: 4,
                  maxWidth: 460,
                  fontFamily: "'Jost', sans-serif",
                  textAlign: "center",
                }}
              >
                Descubre experiencias únicas con nuestros servicios de turismo y
                transporte privado. Nos especializamos en crear viajes
                inolvidables que combinan comodidad, seguridad y aventura por
                toda la república mexicana.
              </Typography>

              {/* Botón CTA */}
              <Link to={"/"}>
                <Button
                  variant='contained'
                  disableElevation
                  sx={{
                    background: "#01528C",
                    color: "#ffffff",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    px: 4,
                    py: 1.6,
                    borderRadius: "10px",
                    border: "1.5px solid #01528C",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "transparent",
                      color: "#01528C",
                      borderColor: "#01528C",
                    },
                  }}
                >
                  Conoce nuestros destinos
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TravelSection;
