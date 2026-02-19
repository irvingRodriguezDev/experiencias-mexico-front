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
import Phoneicon from "../../icons/Phoneicon";

const Header = () => {
  return (
    <AppBar position='absolute' className='header'>
      <Toolbar className='header-toolbar'>
        {/* Logo */}
        <Box className='logo'>
          <Typography variant='h6'>
            <img src={logo} width={100} height={80} />
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
          <Button
            component='a'
            href='tel:+525652657371'
            startIcon={<Phoneicon width={22} color='#FFF' />}
            sx={{
              color: "#FFF",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "20px",
              p: 0,
              minWidth: "auto",
              backgroundColor: "transparent",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgba(163, 187, 19,0.08)",
                textDecoration: "none",
                boxShadow: "none",
              },
            }}
          >
            +52 5652 6573 71
          </Button>

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
