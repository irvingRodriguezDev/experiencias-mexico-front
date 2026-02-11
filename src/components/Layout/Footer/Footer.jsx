import { Box, Grid, Typography, TextField, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./footer.css";

const Footer = () => {
  return (
    <Box className='footer'>
      <Grid container spacing={4} className='footer-content'>
        <Grid item xs={12} md={3}>
          <Typography className='footer-logo'>Tourex</Typography>
          <Typography className='footer-text'>
            Pharetra Maecenas Felis Vestibulum Convallis Mollis.
          </Typography>

          <Box className='newsletter'>
            <input placeholder='Enter your mail' />
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography className='footer-title'>Quick Links</Typography>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography className='footer-title'>Information</Typography>
          <ul>
            <li>58 Street Commercial Road</li>
            <li>+123 888 9999</li>
            <li>Mon – Sat: 8am – 5pm</li>
          </ul>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography className='footer-title'>Utility Pages</Typography>
          <ul>
            <li>Style Guide</li>
            <li>404 Error</li>
            <li>Changelog</li>
            <li>License</li>
          </ul>
        </Grid>
      </Grid>

      <Box className='footer-bottom'>© Tourex | All Rights Reserved</Box>
    </Box>
  );
};

export default Footer;
