import { Box, Typography } from "@mui/material";
import TourCard from "./TourCard";
import "./tours.css";
import avion from "../../assets/avion.webp";
import piramides from "../../assets/piramides.webp";
import sidney from "../../assets/sidney.webp";
import venecia from "../../assets/venecia.webp";
const categories = [
  "Tour",
  "Hotel",
  "Restaurant",
  "Rental",
  "Activity",
  "Car Rental",
];

const tours = [
  {
    id: 1,
    title: "Two Hour Walking Tour Of Manhattan",
    location: "Venice City, Italy",
    days: "7 Days",
    price: 320,
    rating: 5,
    reviews: 5,
    badge: "New",
    image: sidney,
  },
  {
    id: 2,
    title: "When You Visit The Eternal Dubai City",
    location: "Dubai, Emirates",
    days: "2 Days",
    price: 149,
    oldPrice: 299,
    rating: 5,
    reviews: 5,
    badge: "% Offer",
    image: venecia,
  },
  {
    id: 3,
    title: "The Pulau Seribu, Jakarta Indonesia",
    location: "51 Dekor Land, Thailand",
    days: "5 Days",
    price: 349,
    rating: 5,
    reviews: 5,
    badge: "New",
    image: sidney,
  },
  {
    id: 4,
    title: "American Parks Trail End Rapid City Express",
    location: "New York, USA",
    days: "3 Days",
    price: 255,
    oldPrice: 280,
    rating: 4,
    reviews: 4,
    badge: "Featured",
    image: venecia,
  },
];

const Tours = () => {
  return (
    <Box className='tours'>
      <img src={avion} alt='avion' className='tours-avion' />
      <img src={piramides} alt='piramides' className='tours-piramides' />

      <Typography className='tours-subtitle'>
        Most Popular Tour Packages
      </Typography>

      <Typography className='tours-title'>
        Something Amazing Waiting For you
      </Typography>

      <Box className='tours-tabs'>
        {categories.map((item, i) => (
          <span key={i} className={`tours-tab ${i === 0 ? "active" : ""}`}>
            {item}
          </span>
        ))}
      </Box>

      <Box className='tours-grid'>
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </Box>
    </Box>
  );
};

export default Tours;
