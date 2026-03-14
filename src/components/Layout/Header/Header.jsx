import {
  AppBar,
  Toolbar,
  Box,
  Button,
  useScrollTrigger,
  Typography,
  IconButton,
  Menu,
} from "@mui/material";
import logo from "../../../assets/LOGO EXPERIENCIAS MEXICO VECTOR.png";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
const HEADER_HEIGHT = { xs: 64, md: 72 };
const pages = [
  { name: "¿Buscas Transporte?", link: "/transport" },
  { name: "¿Quienes somos?", link: "/nosotros" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Header = () => {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1, // en cuanto hay scroll
  });

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        elevation={0}
        position='fixed'
        sx={{
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          backgroundColor: scrolled
            ? "rgba(163,187,19,0.85)"
            : "rgba(163,187,19,0.95)",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all .35s ease",
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: HEADER_HEIGHT,
            width: "100%",
            px: { xs: 2, md: 4 },
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Box
              component='img'
              src={logo}
              alt='Experiencias México'
              sx={{
                width: { xs: 80, md: scrolled ? 90 : 110 },
                transition: "all .3s ease",
                display: { xs: "none", md: "flex" },
              }}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Link
                  to={page.link}
                  style={{ textDecoration: "none", color: "#01528c" }}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography fontWeight='bold' sx={{ textAlign: "center" }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {pages.map((page) => (
              <Link to={page.link}>
                <Typography
                  sx={{ color: "#fff", "&:hover": { color: "#01528C" } }}
                  fontWeight='bold'
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Box
                component='img'
                src={logo}
                alt='Experiencias México'
                sx={{
                  width: { xs: 80, md: scrolled ? 90 : 110 },
                  transition: "all .3s ease",
                  display: { md: "none" },
                }}
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          {/* Phone */}
          <Button
            component='a'
            href='tel:+525652657371'
            startIcon={
              <CallIcon
                sx={{ width: { xs: 40, md: 30 }, height: { xs: 40, md: 30 } }}
                color='#FFF'
              />
            }
            sx={{
              marginRight: 8,
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#FFF",
              fontWeight: 600,
              fontSize: { xs: 0, sm: "18px" },
              lineHeight: 1,
              textTransform: "none",
              minWidth: { xs: 42, sm: "auto" },
              height: 42,
              px: { xs: 0, sm: 2 },
              borderRadius: 999,
              backgroundColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(6px)",
              "& svg": { display: "block" },
              "&:hover": {
                backgroundColor: "rgba(163,187,19,0.25)",
                transform: "translateY(-1px)",
                color: "#01528C",
              },
              transition: "all .3s ease",
            }}
          >
            <Box
              component='span'
              sx={{ display: { xs: "none", sm: "inline" } }}
            >
              +52 5652 6573 71
            </Box>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Compensación SOLO cuando el header es fixed */}
      {scrolled && <Box sx={{ height: HEADER_HEIGHT }} />}
    </>
  );
};

export default Header;
