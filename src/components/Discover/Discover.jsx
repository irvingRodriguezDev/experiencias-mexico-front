import { Box, Typography, Button } from "@mui/material";
import "./discover.css";
import image from "../../assets/image (1).webp";
import image1 from "../../assets/image (2).webp";
import image2 from "../../assets/image (3).webp";
import image3 from "../../assets/image (3).webp";
import triplan from "../../assets/triplan.webp";
const Discover = () => {
  return (
    <Box className='discover'>
      {/* Imagen izquierda superior */}
      <img src={image} className='discover-img img-top-left' alt='' />

      {/* Imagen izquierda inferior */}
      <img src={image1} className='discover-img img-bottom-left' alt='' />

      {/* Contenido central */}
      <Box className='discover-content'>
        <Typography className='discover-watermark'>
          <img src={triplan} />
        </Typography>

        <Typography
          sx={{
            fontFamily: "fantasy",
            mt: 8,
            fontWeight: "bold",
            color: "#6C3DFF",
          }}
        >
          Most Popular Tour
        </Typography>

        <Typography
          sx={{ color: "#000", fontWeight: "bold", fontSize: "30px" }}
        >
          Let's Discover The World <br />
          With Our Excellent Eyes
        </Typography>

        <Typography className='discover-text'>
          Whether You're Looking For A Romantic Getaway, Family-Friendly Solo
          Journey To Explore The World, A Travel Agency Can Provide Tailored
          Itinerary That Exceeds Your Expectations.
        </Typography>

        <Button className='discover-btn'>TAKE A TOUR →</Button>
      </Box>

      {/* Imagen derecha superior */}
      <img src={image2} className='discover-img img-top-right' alt='' />

      {/* Imagen derecha inferior */}
      <img src={image3} className='discover-img img-bottom-right' alt='' />
    </Box>
  );
};

export default Discover;
