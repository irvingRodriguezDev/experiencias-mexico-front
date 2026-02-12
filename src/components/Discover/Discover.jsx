import { Box, Typography, Button } from "@mui/material";
import "./discover.css";
import image1 from "../../assets/image (2).webp";
import image2 from "../../assets/image (3).webp";
import image3 from "../../assets/image (3).webp";
import image5 from "../../assets/image (5).webp";
import image6 from "../../assets/image (6).webp";
import Logo from "../../assets/LOGO EXPERIENCIAS MEXICO VECTOR.png";
const Discover = () => {
  return (
    <Box className='discover'>
      {/* Imagen izquierda superior */}
      <img src={image1} className='discover-img img-top-left' alt='' />

      {/* Imagen izquierda inferior */}
      <img src={image2} className='discover-img img-bottom-left' alt='' />

      {/* Contenido central */}
      <Box className='discover-content'>
        <Typography className='discover-watermark'>
          <img src={Logo} width={180} />
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
      <img src={image5} className='discover-img img-top-right' alt='' />

      {/* Imagen derecha inferior */}
      <img src={image6} className='discover-img img-bottom-right' alt='' />
    </Box>
  );
};

export default Discover;
