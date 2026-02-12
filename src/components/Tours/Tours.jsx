import { Box, Grid, Typography } from "@mui/material";
import TourCard from "./TourCard";
import "./tours.css";
import avion from "../../assets/avion.webp";
import piramides from "../../assets/piramides.webp";
import volcan from "../../assets/volcan.webp";
import sidney from "../../assets/sidney.webp";
import venecia from "../../assets/venecia.webp";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import TourIcon from "../icons/TourIcon";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
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
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#f8f8f8" }}>
      <Grid size={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={avion} />
      </Grid>
      <Grid size={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={piramides} />
      </Grid>
      <Grid size={12} sx={{ mt: -30 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography
              sx={{ color: "purple" }}
              textAlign='center'
              fontFamily='monospace'
            >
              Most Popular Tour Packages
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography
              fontWeight='bold'
              color='#000'
              textAlign='center'
              fontSize='40px'
            >
              Something Amazing Waiting For you
            </Typography>
          </Grid>
          <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                bgcolor: "transparent",
                width: "75%",
              }}
            >
              <AppBar position='static'>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor='secondary'
                  textColor='inherit'
                  variant='fullWidth'
                  aria-label='full width tabs example'
                >
                  <Tab label='Item One ' {...a11yProps(0)} />
                  <Tab label='Item Two' {...a11yProps(1)} />
                  <Tab label='Item Three' {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Grid container spacing={2}>
                  {tours.map((tour, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={index}>
                      <TourCard key={tour.id} tour={tour} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                {tours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                {tours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
        <img src={volcan} />
      </Grid>
    </Grid>
    // <>
    //   <img
    //     src={piramides}
    //     alt='piramides'
    //     style={{ border: "3px solid green" }}
    //   />
    //   <Box className='tours'>
    //     <Box
    //       sx={{ position: "absolute", display: "flex", justifyContent: "end" }}
    //     >
    //       <img src={avion} alt='avion' />
    //     </Box>

    //     <Typography className='tours-subtitle'>
    //       Most Popular Tour Packages
    //     </Typography>

    //     <Typography className='tours-title'>
    //       Something Amazing Waiting For you
    //     </Typography>

    //     <Box className='tours-tabs'>
    //       {categories.map((item, i) => (
    //         <span key={i} className={`tours-tab ${i === 0 ? "active" : ""}`}>
    //           {item}
    //         </span>
    //       ))}
    //     </Box>

    //     <Box className='tours-grid'>
    //       {tours.map((tour) => (
    //         <TourCard key={tour.id} tour={tour} />
    //       ))}
    //     </Box>
    //     <Box>
    //       <img src={volcan} />
    //     </Box>
    //   </Box>
    // </>
  );
};

export default Tours;
