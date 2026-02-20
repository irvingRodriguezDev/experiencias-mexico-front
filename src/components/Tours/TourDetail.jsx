import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  Container,
} from "@mui/material";
import { useParams } from "react-router-dom";
import MethodGet from "../../config/Service";
import MainLayout from "../Layout/Layout";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
        minHeight='70vh'
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
      <Container maxWidth='xl' sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={6} sx={{ marginTop: 12 }}>
          {/* ===== MAIN CONTENT ===== */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* ===== IMAGES (STACKED) ===== */}
            {images.length > 0 && (
              <Stack spacing={3} mb={6}>
                {images.map((img) => (
                  <Box sx={{ borderRadius: "20px" }}>
                    <img
                      src={img.url}
                      width='100%'
                      height='auto'
                      style={{ borderRadius: "12px" }}
                    />
                  </Box>
                ))}
              </Stack>
            )}
            {/* Title */}
            <Typography
              variant='h3'
              textAlign='start'
              fontWeight={900}
              mb={2}
              color='#01528C'
            >
              {tour.title}
            </Typography>

            {/* Meta */}
            <Stack direction='row' spacing={2} flexWrap='wrap' mb={4}>
              <Chip icon={<LocationOnIcon />} label={tour.location} />
              <Chip icon={<AccessTimeIcon />} label={tour.duration} />
            </Stack>

            {/* Intro */}
            <Typography
              fontSize='1.1rem'
              lineHeight={1.9}
              color='text.secondary'
              mb={4}
            >
              {tour.short_description}
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Description */}
            <Typography variant='h5' fontWeight={800} mb={2} color='#A3BB13'>
              Sobre esta experiencia
            </Typography>

            <Typography color='text.secondary' lineHeight={1.9}>
              {tour.description}
            </Typography>

            {/* Includes */}
            {tour.tags?.length > 0 && (
              <Box mt={6}>
                <Typography
                  variant='h5'
                  fontWeight={700}
                  mb={3}
                  color='#01528C'
                >
                  ¿Qué incluye?
                </Typography>

                <Grid container spacing={2}>
                  {tour.tags.map((tag, i) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={i}>
                      <Stack direction='row' spacing={1.5} alignItems='center'>
                        <CheckCircleIcon sx={{ color: "#A3BB13" }} />
                        <Typography fontWeight={500} color='#000'>
                          {tag}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Grid>

          {/* ===== SIDEBAR ===== */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                position: { xl: "sticky" },
                top: 120,
                p: 4,
                borderRadius: 4,
                bgcolor: "#fff",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
            >
              <Typography
                variant='caption'
                fontWeight={700}
                color='text.secondary'
                sx={{ textTransform: "uppercase" }}
              >
                Precio por persona
              </Typography>

              <Typography variant='h3' fontWeight={900} color='#01528C' mb={2}>
                ${tour.price} MXN
              </Typography>

              <Button
                fullWidth
                size='large'
                variant='contained'
                startIcon={<WhatsAppIcon />}
                href={tour.whatsapp_link}
                target='_blank'
                sx={{
                  py: 2,
                  fontSize: "17px",
                  fontWeight: 800,
                  bgcolor: "#A3BB13",
                  color: "#01528C",
                  borderRadius: 3,
                  "&:hover": { bgcolor: "#91a911" },
                }}
              >
                Reservar ahora
              </Button>

              <Divider sx={{ my: 4 }} />

              <Stack spacing={2}>
                <Stack direction='row' spacing={1.5} alignItems='center'>
                  <StarIcon sx={{ color: "#f5b400" }} />
                  <Typography fontWeight={600} color='#000'>
                    Experiencia recomendada
                  </Typography>
                </Stack>

                <Typography color='text.secondary' fontSize='14px'>
                  Atención personalizada y experiencia premium garantizada.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default TourDetail;
