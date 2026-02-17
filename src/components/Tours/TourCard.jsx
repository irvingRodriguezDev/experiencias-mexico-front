import { Card } from "@mui/material";
import { FavoriteBorder, Star } from "@mui/icons-material";
import LocationIcon from "../icons/Location";
import TimeIcon from "../icons/TimeIcon";
import "./tour-card.css";

const TourCard = ({ tour }) => {
  return (
    <Card className='tour-card'>
      {/* IMAGE */}
      <div className='tour-image'>
        <img src={tour.cover_image} alt={tour.title} loading='lazy' />

        {tour.badge && <span className='tour-badge'>{tour.badge}</span>}

        <button
          className='tour-favorite'
          type='button'
          aria-label='Agregar a favoritos'
        >
          <FavoriteBorder fontSize='small' />
        </button>
      </div>

      {/* CONTENT */}
      <div className='tour-content'>
        <h3 className='tour-title'>{tour.title}</h3>

        <div className='tour-meta'>
          <span className='tour-location'>
            <LocationIcon width={16} /> {tour.location}
          </span>

          <span className='tour-days'>
            <TimeIcon width={16} /> {tour.duration}
          </span>
        </div>

        {/* FOOTER */}
        <div className='tour-footer'>
          <div className='tour-price'>
            {tour.old_price && (
              <span className='price old'>${tour.old_price}</span>
            )}

            <span className='price'>${tour.price}</span>
            <span className='per'>/Persona</span>
          </div>

          <div className='tour-rating'>
            <Star fontSize='small' />
            <span>({tour.reviews_count ?? 0} Reviews)</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;
