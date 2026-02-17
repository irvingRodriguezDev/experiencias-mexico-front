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
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
const tabStyles = {
  textTransform: "none",
  fontWeight: 500,
  fontSize: "15px",
  color: "#000",
  minHeight: "64px",
  "&.Mui-selected": {
    color: "#000",
  },
  "& .MuiTab-iconWrapper": {
    marginRight: "6px",
  },
};
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
              <AppBar
                position='static'
                elevation={0}
                sx={{
                  bgcolor: "transparent",
                  width: "80%",
                  borderBottom: "1px solid #e0e0e0", // línea gris inferior
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant='fullWidth'
                  textColor='inherit'
                  TabIndicatorProps={{
                    sx: {
                      backgroundColor: "#5b2dff", // morado
                      height: "4px",
                      borderRadius: "4px",
                    },
                  }}
                  sx={{
                    "& .MuiTabs-flexContainer": {
                      gap: "8px",
                    },
                  }}
                >
                  <Tab
                    icon={<FlightIcon />}
                    iconPosition='start'
                    label='Tour'
                    sx={tabStyles}
                  />
                  <Tab
                    icon={<HotelIcon />}
                    iconPosition='start'
                    label='Hotel'
                    sx={tabStyles}
                  />
                  <Tab
                    icon={<RestaurantIcon />}
                    iconPosition='start'
                    label='Restaurant'
                    sx={tabStyles}
                  />
                  <Tab
                    icon={<HomeIcon />}
                    iconPosition='start'
                    label='Rental'
                    sx={tabStyles}
                  />
                  <Tab
                    icon={<DirectionsCarIcon />}
                    iconPosition='start'
                    label='Car Rental'
                    sx={tabStyles}
                  />
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
  );
};

export default Tours;
