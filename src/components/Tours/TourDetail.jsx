import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Divider,
  IconButton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import MethodGet from "../../config/Service";
import MainLayout from "../Layout/Layout";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import Carousel from "react-material-ui-carousel";

const TourDetail = () => {
  const { slug } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    MethodGet(`/tours/slug/${slug}`)
      .then((res) => setTour(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <Box
        minHeight='60vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <CircularProgress />
      </Box>
    );
  }
  if (!tour) return null;

  const images = tour.media || [];

  return (
    <MainLayout>
      {/* HERO + GALLERY */}
      {images.length > 0 && (
        <Box sx={{ position: "relative", width: "100%", height: "60vh" }}>
          <Carousel navButtonsAlwaysVisible>
            {images.map((img) => (
              <Box
                key={img.id}
                sx={{
                  width: "100%",
                  height: "50vh",
                  backgroundImage: `url(${img.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </Carousel>
        </Box>
      )}

      <Container sx={{ mt: 4, mb: 8 }}>
        {/* BASIC INFO */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Typography variant='h3' fontWeight={800} gutterBottom>
              {tour.title}
            </Typography>

            <Box display='flex' gap={2} mb={2}>
              <Chip icon={<LocationOnIcon />} label={tour.location} />
              <Chip icon={<AccessTimeIcon />} label={tour.duration} />
            </Box>

            <Typography color='text.secondary' lineHeight={1.8}>
              {tour.short_description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* DESCRIPTION */}
            <Typography variant='h5' fontWeight={700} mb={2}>
              Descripción
            </Typography>

            <Typography color='text.secondary'>{tour.description}</Typography>
          </Grid>

          {/* SIDEBAR */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                position: "sticky",
                top: 100,
                p: 4,
                borderRadius: 3,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                bgcolor: "#fff",
              }}
            >
              <Typography variant='h4' fontWeight={800} gutterBottom>
                ${tour.price} MXN
              </Typography>
              <Button
                fullWidth
                variant='contained'
                startIcon={<WhatsAppIcon />}
                href={tour.whatsapp_link}
                target='_blank'
                sx={{
                  py: 1.5,
                  fontWeight: 700,
                  bgcolor: "#A3BB13",
                  color: "#01528C",
                  "&:hover": {
                    bgcolor: "#A3BB13",
                    color: "#01528C",
                  },
                }}
              >
                Reservar ahora
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* WHAT’S INCLUDED */}
        <Box sx={{ mt: 6 }}>
          <Typography variant='h5' fontWeight={700} mb={2}>
            ¿Qué incluye?
          </Typography>

          <Grid container spacing={2}>
            {tour.tags?.map((tag, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Chip label={tag} sx={{ width: "100%" }} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* REVIEWS */}
        <Box sx={{ mt: 8 }}>
          <Typography variant='h5' fontWeight={700} mb={2}>
            Opiniones
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default TourDetail;
