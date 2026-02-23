import { AppBar, Toolbar, Box, Button, useScrollTrigger } from "@mui/material";
import Phoneicon from "../../icons/Phoneicon";
import logo from "../../../assets/LOGO EXPERIENCIAS MEXICO VECTOR.png";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
const HEADER_HEIGHT = { xs: 64, md: 72 };

const Header = () => {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1, // en cuanto hay scroll
  });

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
              }}
            />
          </Link>

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
