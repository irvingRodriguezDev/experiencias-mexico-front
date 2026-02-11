import { Box, Typography } from "@mui/material";
import { FavoriteBorder, Star } from "@mui/icons-material";

const TourCard = ({ tour }) => {
  return (
    <Box className='tour-card'>
      <Box className='tour-img-wrapper'>
        {tour.badge && (
          <span className={`tour-badge ${tour.badge.toLowerCase()}`}>
            {tour.badge}
          </span>
        )}

        <FavoriteBorder className='tour-fav' />

        <img src={tour.image} alt={tour.title} />
      </Box>

      <Box className='tour-content'>
        <Typography className='tour-title'>{tour.title}</Typography>

        <Typography className='tour-location'>📍 {tour.location}</Typography>

        <Typography className='tour-days'>⏱ {tour.days}</Typography>

        <Box className='tour-footer'>
          <Box className='tour-price'>
            {tour.oldPrice && <span className='old'>${tour.oldPrice}</span>}$
            {tour.price} <small>/ Person</small>
          </Box>

          <Box className='tour-rating'>
            <Star />
            {tour.rating} ({tour.reviews} Reviews)
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TourCard;
