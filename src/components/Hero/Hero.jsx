import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./hero.css";
import Hero1 from "../../assets/hero-1.jpg";
import Hero2 from "../../assets/hero-2.jpg";
import Hero3 from "../../assets/hero-3.jpg";
import Hero4 from "../../assets/hero-4.jpg";
import Hero5 from "../../assets/hero-5.jpg";
const slides = [
  {
    title: "Maldives island",
    subtitle: "* This Offer Valid Till 22 August",
    description:
      "When An Unknown Printer Took A Galley Offer Type Area Year Anddey Make Specimen Book",
    price: "$299",
    image: [
      { image: Hero1 },
      { image: Hero2 },
      { image: Hero3 },
      { image: Hero4 },
      { image: Hero5 },
    ],
  },
];

const Hero = () => {
  return (
    <Box className='hero'>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className='hero-swiper'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              className='hero-slide'
              style={{
                backgroundImage: `url(${slide.image.map((i) => i.image)})`,
              }}
            >
              {/* Overlay */}
              <Box className='hero-overlay' />

              {/* Content */}
              <Box className='hero-content'>
                <Typography className='hero-subtitle'>
                  {slide.subtitle}
                </Typography>

                <Typography className='hero-title'>{slide.title}</Typography>

                <Typography className='hero-description'>
                  {slide.description}
                </Typography>

                <Typography className='hero-price'>
                  Booking Start From <span>{slide.price}</span>/night
                </Typography>

                <Button className='hero-btn'>TAKE A TOUR →</Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;
