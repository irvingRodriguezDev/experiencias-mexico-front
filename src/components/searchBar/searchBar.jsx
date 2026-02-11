import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <Box className='search-wrapper'>
      <Box className='search-card'>
        {/* Tabs */}
        <Tabs value={0} className='search-tabs'>
          <Tab label='Tour' />
          <Tab label='Hotel' />
          <Tab label='Restaurant' />
          <Tab label='Rental' />
          <Tab label='Activity' />
          <Tab label='Car Rental' />
        </Tabs>

        {/* Form */}
        <Box className='search-form'>
          <Box className='search-field'>
            <label>Destinations:</label>
            <TextField
              placeholder='Where are you going . . .'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box className='search-field'>
            <label>Check In:</label>
            <TextField
              type='date'
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box className='search-field'>
            <label>Check Out:</label>
            <TextField
              type='date'
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box className='search-field'>
            <label>Guest:</label>
            <TextField
              placeholder='+ Add Guests'
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button className='search-btn'>Search</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
