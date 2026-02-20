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
import { useContext, useEffect, useState } from "react";
import TourIcon from "../icons/TourIcon";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ToursContext from "../../context/Tours/ToursContext";
import SearchBar from "../searchBar/searchBar";
import TourDetailModal from "./TourDetailModal";
import MethodGet from "../../config/Service";
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

const Tours = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const { tours, getAllTours } = useContext(ToursContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getAllTours();
  }, []);

  const [open, setOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = async (tour) => {
    setOpen(true);
    setLoading(true);

    try {
      const { data } = await MethodGet(`/tours/slug/${tour.slug}`);
      setSelectedTour(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#F4F4F5" }}>
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
              sx={{ color: "#A3BB13" }}
              textAlign='center'
              fontSize='25px'
            >
              Nuestros Paquetes Más Populares
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography
              fontWeight='bold'
              color='#01528C'
              textAlign='center'
              fontSize='40px'
            >
              Algo Increible Te Espera
            </Typography>
          </Grid>

          <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                bgcolor: "transparent",
                width: "75%",
              }}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Grid container spacing={2}>
                  {tours.map((tour, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={index}>
                      <TourCard
                        key={tour.id}
                        tour={tour}
                        onOpen={() => handleOpen(tour)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </Box>
          </Grid>
          <TourDetailModal
            open={open}
            onClose={() => setOpen(false)}
            tour={selectedTour}
            loading={loading}
          />
        </Grid>
      </Grid>
      <Grid size={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
        <img src={volcan} />
      </Grid>
    </Grid>
  );
};

export default Tours;
