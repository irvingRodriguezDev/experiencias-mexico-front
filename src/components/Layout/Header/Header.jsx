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

const Header = () => {
  return (
    <AppBar position='absolute' className='header'>
      <Toolbar className='header-toolbar'>
        {/* Logo */}
        <Box className='logo'>
          <Typography variant='h6'>Tourex</Typography>
        </Box>

        {/* Navigation */}
        <Box className='nav-links'>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pages</Button>
          <Button color='inherit'>Blogs</Button>
          <Button color='inherit'>Contact</Button>
        </Box>

        {/* Actions */}
        <Box className='actions'>
          <Typography className='phone'>+123 5959 66</Typography>

          <IconButton color='inherit'>
            <ShoppingCartIcon />
          </IconButton>

          <Button variant='outlined' className='login-btn'>
            Login
          </Button>

          <IconButton color='inherit'>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
