import { Box, Typography, Button } from "@mui/material";
import "./explore.css";

const Explore = () => {
  return (
    <section className='explore'>
      {/* Overlay con gradiente premium */}
      <div className='explore-overlay' />

      {/* Contenido principal */}
      <Box className='explore-content'>
        <span className='explore-eyebrow'>
          Donde comienza tu próxima aventura
        </span>

        <Typography className='explore-title'>
          Destinos de viaje populares <br />
          disponibles en México
        </Typography>

        <Button
          size='large'
          sx={{
            bgcolor: "#01528C",
            color: "#A3BB13",
            borderRadius: "12px",
            fontWeight: "bold",
          }}
          onClick={() =>
            window.scrollBy({
              top: -1850,
              behavior: "smooth",
            })
          }
        >
          Reserva ahora →
        </Button>
      </Box>

      {/* Watermark */}
      <span className='explore-watermark'>DESCUBRE MÉXICO</span>
    </section>
  );
};

export default Explore;
