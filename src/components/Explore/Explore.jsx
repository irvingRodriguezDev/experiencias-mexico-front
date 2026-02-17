import { Box, Typography, Button } from "@mui/material";
import "./explore.css";

const Explore = () => {
  return (
    <section className='explore'>
      <div className='explore-overlay' />

      <Box className='explore-content'>
        <span className='explore-eyebrow'>
          El Destino de tu proxima Aventura
        </span>

        <Typography className='explore-title'>
          Destinos de viaje populares <br />
          disponibles en México
        </Typography>

        <Button className='explore-btn'>Reserva ahora →</Button>
      </Box>

      <span className='explore-watermark'>DESCUBRE MÉXICO</span>
    </section>
  );
};

export default Explore;
