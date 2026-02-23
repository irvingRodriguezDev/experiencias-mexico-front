import { Box, Typography, Button } from "@mui/material";

import "./hero.css";
import ToursContext from "../../context/Tours/ToursContext";
import { useContext, useEffect } from "react";
import HeroTours from "./HeroTours";

const Hero = () => {
  const { getLatestTours, latest_tours } = useContext(ToursContext);

  useEffect(() => {
    getLatestTours();
  }, []);

  return (
    <Box className='hero'>
      <HeroTours tours={latest_tours} />
    </Box>
  );
};

export default Hero;
