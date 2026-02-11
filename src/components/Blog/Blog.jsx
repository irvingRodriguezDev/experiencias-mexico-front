import { Box, Typography, Button } from "@mui/material";
import "./blog.css";

const Blog = () => {
  return (
    <section className='blog'>
      <Box className='blog-header'>
        <span className='blog-eyebrow'>Blog And Article</span>
        <Typography className='blog-title'>Latest News & Articles</Typography>
        <Typography className='blog-subtitle'>
          Are You Tired Of The Typical Tourist Destinations And Looking To Step
          Out Of Your Comfort Zone
        </Typography>
      </Box>

      <div className='blog-grid'>
        {/* Main Card */}
        <article className='blog-card large'>
          <img src='/blog/1.jpg' alt='' />
          <span className='tag purple'>Travel River</span>

          <h3>Spiritual Sojourn: Pilgrimage Tours For Soul Seekers</h3>

          <div className='meta'>
            <span>26th Sep, 2024</span>
            <span>•</span>
            <span>5 Mins Read</span>
          </div>
        </article>

        {/* Right Cards */}
        <div className='blog-side'>
          <article className='blog-card horizontal'>
            <img src='/blog/2.jpg' alt='' />
            <div>
              <span className='tag'>Hiking</span>
              <h4>Wine Country Escapes: Vineyard Tours For Connoisseurs</h4>
              <div className='meta'>
                <span>26th Sep, 2024</span>
                <span>•</span>
                <span>5 Mins Read</span>
              </div>
            </div>
          </article>

          <article className='blog-card horizontal'>
            <img src='/blog/3.jpg' alt='' />
            <div>
              <span className='tag'>Adventure</span>
              <h4>Thrills & Chills: Extreme Sports Tours For Adrenaline</h4>
              <div className='meta'>
                <span>26th Sep, 2024</span>
                <span>•</span>
                <span>5 Mins Read</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <p className='blog-link'>
        Want To See Our Recent News & Updates.
        <a href='#'> Click Here To View More</a>
      </p>

      {/* APP CTA */}
      <div className='app-banner'>
        <div className='app-info'>
          <span>Explore Tour</span>
          <h3>
            Download Our App <br />
            From Google & App Store!
          </h3>

          <div className='stores'>
            <img src='/store/google.png' alt='Google Play' />
            <img src='/store/apple.png' alt='App Store' />
          </div>
        </div>

        <img src='/app/phones.png' className='phones' alt='App Preview' />
      </div>
    </section>
  );
};

export default Blog;
