import { Box, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./offer.css";

const Offer = () => {
  return (
    <section className='discover'>
      <Box className='discover-container'>
        {/* LEFT */}
        <Box className='discover-left'>
          <span className='discover-eyebrow'>Dream Your Next Trip</span>

          <Typography className='discover-title'>
            Offer When Even <br /> You Want To Go
          </Typography>

          <Typography className='discover-desc'>
            Are You Tired Of The Typical Tourist Destinations And Looking To
            Step Out Of Your Comfort Zone? Adventure Travel May Be The Perfect
            Solution For You! Here Are Four.
          </Typography>

          <Box className='discover-feature'>
            <span className='icon'>🌍</span>
            <Box>
              <h4>Best Travel Agency</h4>
              <p>
                Are you tired of the typical tourist destination and looking
                step out of your comfort.
              </p>
            </Box>
          </Box>

          <Box className='discover-feature'>
            <span className='icon'>🛡️</span>
            <Box>
              <h4>Secure Journey With Us</h4>
              <p>
                Are you tired of the typical tourist destination and looking
                step out of your comfort.
              </p>
            </Box>
          </Box>

          <Button className='discover-btn'>BOOK YOUR TRIP →</Button>
        </Box>

        {/* RIGHT */}
        <Box className='discover-right'>
          <span className='travel-text'>TRAVEL</span>

          <img
            src='/discover/main.jpg'
            alt='travel'
            className='discover-main-img'
          />

          <img
            src='/discover/small.jpg'
            alt='people'
            className='discover-small-img'
          />
        </Box>
      </Box>

      {/* BOTTOM BANNER */}
      <Box className='discover-banner'>
        <Box className='banner-video'>
          <PlayArrowIcon />
        </Box>

        <Box className='banner-content'>
          <span>Enjoy Summer Deals</span>
          <h3>Up to 40% Discount!</h3>
          <Button className='banner-btn'>SEE DETAILS →</Button>
        </Box>
      </Box>
    </section>
  );
};

export default Offer;
