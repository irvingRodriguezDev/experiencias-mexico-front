import {
  Dialog,
  DialogContent,
  Box,
  Grid,
  Typography,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function TourDetailModal({ open, onClose, tour, loading }) {
  if (loading) {
    return (
      <Dialog open={open} maxWidth='md' fullWidth>
        <Box
          minHeight='60vh'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <CircularProgress />
        </Box>
      </Dialog>
    );
  }

  if (!tour) return null;

  const images = tour.media || [];
  const cover = images.find((m) => m.is_cover)?.url || images[0]?.url;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='xl'
      fullWidth
      scroll='paper'
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
        },
      }}
    >
      {/* ===== HERO ===== */}
      {cover && (
        <Box sx={{ position: "relative" }}>
          <Box
            component='img'
            src={cover}
            sx={{
              width: "100%",
              height: { xs: 260, md: 380 },
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.2))",
            }}
          />

          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "rgba(0,0,0,.45)",
              color: "#fff",
              "&:hover": { bgcolor: "rgba(0,0,0,.65)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            sx={{
              position: "absolute",
              bottom: 32,
              left: 32,
              right: 32,
              color: "#fff",
            }}
          >
            <Typography variant='h4' fontWeight={900}>
              {tour.title}
            </Typography>

            <Stack direction='row' spacing={2} mt={1} flexWrap='wrap'>
              <Chip
                icon={<AccessTimeIcon />}
                label={tour.duration}
                sx={{ bgcolor: "rgba(255,255,255,.85)" }}
              />
            </Stack>
          </Box>
        </Box>
      )}

      {/* ===== CONTENT ===== */}
      <DialogContent sx={{ p: { xs: 3, md: 5 } }}>
        <Grid container spacing={6}>
          {/* ===== MAIN ===== */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Short description */}
            <Typography
              fontSize='1.1rem'
              lineHeight={1.9}
              color='text.secondary'
              mb={4}
            >
              {tour.short_description}
            </Typography>
            {/* Description (HTML) */}
            <Typography variant='h5' fontWeight={800} mb={2} color='#01528C'>
              Sobre esta experiencia
            </Typography>

            <Box
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                mb: 6,
                width: "100%",
              }}
              dangerouslySetInnerHTML={{ __html: tour.description }}
            />
            {/* Location (HTML) */}
            {tour.location && (
              <Stack direction='row' spacing={2} mb={4} alignItems='flex-start'>
                <Box
                  sx={{ lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: tour.location }}
                />
              </Stack>
            )}

            <Divider sx={{ mb: 4 }} />

            {/* Tags */}
            {tour.tags?.length > 0 && (
              <>
                <Typography
                  variant='h5'
                  fontWeight={800}
                  mb={3}
                  color='#01528C'
                >
                  Tags
                </Typography>

                <Grid container spacing={2}>
                  {tour.tags.map((tag, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Stack direction='row' spacing={1.5} alignItems='center'>
                        <CheckCircleIcon sx={{ color: "#A3BB13" }} />
                        <Typography fontWeight={500}>{tag}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
          </Grid>

          {/* ===== SIDEBAR ===== */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                position: "sticky",
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
                  "&:hover": { bgcolor: "#91a911", color: "#01528C" },
                }}
              >
                Reservar ahora
              </Button>

              <Divider sx={{ my: 4 }} />

              <Stack spacing={2}>
                <Stack direction='row' spacing={1.5} alignItems='center'>
                  <StarIcon sx={{ color: "#f5b400" }} />
                  <Typography fontWeight={600}>
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
      </DialogContent>
    </Dialog>
  );
}
