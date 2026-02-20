import {
  Box,
  Grid,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material";

import Logo from "../../../assets/LOGO EXPERIENCIAS MEXICO VECTOR.png";
import Location from "../../icons/Location";
import Phoneicon from "../../icons/Phoneicon";
import TimeIcon from "../../icons/TimeIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import TiktokIcon from "../../icons/TiktokIcon";
import MailIcon from "../../icons/MailIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        bgcolor: "#FEFEFE",
        display: "flex",
        justifyContent: "center",
        pt: 8,
        pb: 3,
        px: { xs: 3, md: 10 },
      }}
    >
      {/* LOGO */}
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ mb: 3 }}>
          <Box
            component='img'
            src={Logo}
            alt='Experiencias México'
            sx={{ width: 160 }}
          />
        </Box>
      </Grid>

      {/* VISÍTANOS */}
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack spacing={2}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              mb: 3,
              color: "#A3BB13",
            }}
          >
            Visítanos
          </Typography>
          <Link
            to={"https://maps.app.goo.gl/3Ju9oPDzxz4MCuVG7"}
            style={{ textDecoration: "none" }}
            target='__blank'
          >
            <Stack direction='row' spacing={2} alignItems='flex-start'>
              <Location width={28} />
              <Typography fontSize='15px' color='#000' fontWeight='bold'>
                C. Independencia #72,
                <br />
                Xonacatlán, EdoMex, <br />
                Segundo piso
              </Typography>
            </Stack>
          </Link>

          <Stack direction='row' spacing={2} alignItems='center'>
            <Button
              component='a'
              href='tel:+525652657371'
              startIcon={<Phoneicon width={30} height={20} color='#000' />}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#000",
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
          </Stack>

          <Stack direction='row' spacing={2} alignItems='center'>
            <TimeIcon width={28} />
            <Typography fontSize='15px' color='#000' fontWeight='bold'>
              Lun – Sab: 11am – 7pm
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      {/* REDES */}
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack spacing={2}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              mb: 3,
              color: "#01528C",
            }}
          >
            Síguenos en redes
          </Typography>
          <Link to={""} style={{ textDecoration: "none" }} target='__blank'>
            <Stack direction='row' spacing={2} alignItems='center'>
              <FacebookIcon width={28} />
              <Typography fontSize='15px' color='#000' fontWeight='bold'>
                Facebook
              </Typography>
            </Stack>
          </Link>
          <Link to={""} style={{ textDecoration: "none" }} target='__blank'>
            <Stack direction='row' spacing={2} alignItems='center'>
              <InstagramIcon width={28} />
              <Typography fontSize='15px' color='#000' fontWeight='bold'>
                Instagram
              </Typography>
            </Stack>
          </Link>
          <Link to={""} style={{ textDecoration: "none" }} target='__blank'>
            <Stack direction='row' spacing={2} alignItems='center'>
              <TiktokIcon width={28} />
              <Typography fontSize='15px' color='#000' fontWeight='bold'>
                TikTok
              </Typography>
            </Stack>
          </Link>
          <a
            href='mailto:contacto@experienciaspormexico.com.mx?subject=Contacto%20desde%20la%20web'
            style={{ textDecoration: "none" }}
          >
            <Stack direction='row' spacing={2} alignItems='center'>
              <MailIcon width={28} />
              <Typography fontSize='15px' color='#000' fontWeight='bold'>
                Contacto
              </Typography>
            </Stack>
          </a>
        </Stack>
      </Grid>
      <Box
        sx={{
          borderTop: "1px solid #E0E0E0",
          mt: 0,
          pt: 3,
          textAlign: "center",
        }}
      >
        <Typography fontSize='18px' color='text.secondary'>
          Todos los derechos reservados 2026
        </Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
