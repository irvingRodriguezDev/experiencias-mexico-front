import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";
import logo from "../../../assets/LOGO EXPERIENCIAS MEXICO VECTOR.png";
import { Phone } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position='absolute' className='header'>
      <Toolbar className='header-toolbar'>
        {/* Logo */}
        <Box className='logo'>
          <Typography variant='h6'>
            <img src={logo} width={120} />
          </Typography>
        </Box>

        {/* Navigation */}
        {/* <Box className='nav-links'>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pages</Button>
          <Button color='inherit'>Blogs</Button>
          <Button color='inherit'>Contact</Button>
        </Box> */}

        {/* Actions */}
        <Box className='actions'>
          <Phone />
          <Typography className='phone'>+52 5652 6573 71</Typography>

          {/* <Button variant='outlined' className='login-btn'>
            Login
          </Button>

          <IconButton color='inherit'>
            <MenuIcon />
          </IconButton> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
