import { Box, Typography, Button } from "@mui/material";

import "./hero.css";
import ToursContext from "../../context/Tours/ToursContext";
import { useContext, useEffect } from "react";
import HeroTours from "./HeroTours";

const Hero = () => {
  const { getLatestTours, tours } = useContext(ToursContext);

  useEffect(() => {
    getLatestTours();
  }, []);

  return (
    <Box className='hero'>
      <HeroTours tours={tours} />
    </Box>
  );
};

export default Hero;
