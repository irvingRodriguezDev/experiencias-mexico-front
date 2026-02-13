import { Box, Typography, Button } from "@mui/material";
import "./explore.css";

const Explore = () => {
  return (
    <section className='explore'>
      <div className='explore-overlay' />

      <Box className='explore-content'>
        <span className='explore-eyebrow'>Next Adventure Destination</span>

        <Typography className='explore-title'>
          Popular Travel Destinations <br />
          Available Worldwide
        </Typography>

        <Button className='explore-btn'>BOOK YOUR TRIP NOW →</Button>
      </Box>

      <span className='explore-watermark'>EXPLORA MÉXICO</span>
    </section>
  );
};

export default Explore;
