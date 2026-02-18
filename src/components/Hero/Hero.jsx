import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./hero.css";
import ToursContext from "../../context/Tours/ToursContext";
import Hero1 from "../../assets/hero-1.jpg";
import { useContext, useEffect } from "react";
import HeroTours from "./HeroTours";

const slides = [
  {
    title: "Maldives island",
    subtitle: "* This Offer Valid Till 22 August",
    description:
      "When An Unknown Printer Took A Galley Offer Type Area Year Anddey Make Specimen Book",
    price: "$299",
    image: Hero1,
  },
];

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
