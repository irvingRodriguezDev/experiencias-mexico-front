import { Box, Typography } from "@mui/material";
import TourCard from "./TourCard";
import "./tours.css";

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
    image: "/tours/1.jpg",
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
    image: "/tours/2.jpg",
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
    image: "/tours/3.jpg",
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
    image: "/tours/4.jpg",
  },
];

const Tours = () => {
  return (
    <Box className='tours'>
      <Typography className='tours-subtitle'>
        Most Popular Tour Packages
      </Typography>

      <Typography className='tours-title'>
        Something Amazing Waiting For you
      </Typography>

      {/* Tabs */}
      <Box className='tours-tabs'>
        {categories.map((item, i) => (
          <span key={i} className={`tours-tab ${i === 0 ? "active" : ""}`}>
            {item}
          </span>
        ))}
      </Box>

      {/* Grid */}
      <Box className='tours-grid'>
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </Box>
    </Box>
  );
};

export default Tours;
