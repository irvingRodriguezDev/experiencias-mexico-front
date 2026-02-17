import { Box, Grid, Typography, IconButton, Stack } from "@mui/material";

import Logo from "../../../assets/LOGO EXPERIENCIAS MEXICO VECTOR.png";
import Location from "../../icons/Location";
import Phoneicon from "../../icons/Phoneicon";
import TimeIcon from "../../icons/TimeIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import TiktokIcon from "../../icons/TiktokIcon";
import MailIcon from "../../icons/MailIcon";

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
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "18px",
            mb: 3,
          }}
        >
          Visítanos
        </Typography>

        <Stack spacing={2}>
          <Stack direction='row' spacing={2} alignItems='flex-start'>
            <Location width={28} />
            <Typography fontSize='15px' color='#000'>
              C. Independencia #72,
              <br />
              Xonacatlán, EdoMex, <br />
              Segundo piso
            </Typography>
          </Stack>

          <Stack direction='row' spacing={2} alignItems='center'>
            <Phoneicon width={28} color={"#000"} />
            <Typography fontSize='15px' color='#000'>
              +52 56 5265 7331
            </Typography>
          </Stack>

          <Stack direction='row' spacing={2} alignItems='center'>
            <TimeIcon width={28} />
            <Typography fontSize='15px' color='#000'>
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
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "18px",
            mb: 3,
          }}
        >
          Síguenos en redes
        </Typography>

        <Stack spacing={2}>
          <Stack direction='row' spacing={2} alignItems='center'>
            <FacebookIcon width={28} />
            <Typography fontSize='15px' color='#000'>
              Facebook
            </Typography>
          </Stack>

          <Stack direction='row' spacing={2} alignItems='center'>
            <InstagramIcon width={28} />
            <Typography fontSize='15px' color='#000'>
              Instagram
            </Typography>
          </Stack>

          <Stack direction='row' spacing={2} alignItems='center'>
            <TiktokIcon width={28} />
            <Typography fontSize='15px' color='#000'>
              TikTok
            </Typography>
          </Stack>

          <Stack direction='row' spacing={2} alignItems='center'>
            <MailIcon width={28} />
            <Typography fontSize='15px' color='#000'>
              Contacto
            </Typography>
          </Stack>
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
