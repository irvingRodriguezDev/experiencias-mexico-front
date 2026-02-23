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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import CalendarIcon from "../icons/CalendarIcon";
import FormatDate from "../../utils/FormatDate";
import StyleIcon from "@mui/icons-material/Style";

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
          borderRadius: { xs: 4, md: 4 },
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
              height: { xs: 240, sm: 300, md: 380 },
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
              bottom: { xs: 16, md: 32 },
              left: { xs: 16, md: 32 },
              right: { xs: 16, md: 32 },
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: "1.6rem",
                  sm: "2rem",
                  md: "2.4rem",
                },
                lineHeight: 1.2,
              }}
            >
              {tour.title}
            </Typography>

            <Stack direction='row' spacing={2} mt={1} flexWrap='wrap'>
              <Chip
                icon={<AccessTimeIcon />}
                label={tour.duration}
                sx={{ bgcolor: "rgba(255,255,255,.85)" }}
              />
              <Chip
                icon={<CalendarIcon width={30} />}
                label={FormatDate(tour.date)}
                sx={{ bgcolor: "rgba(255,255,255,.85)" }}
              />
            </Stack>
          </Box>
        </Box>
      )}

      {/* ===== CONTENT ===== */}
      <DialogContent sx={{ p: { xs: 2.5, md: 5 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* ===== MAIN ===== */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Short description */}
            <Typography
              sx={{
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.1rem",
                },
                lineHeight: 1.8,
              }}
              color='text.secondary'
              mb={{ xs: 3, md: 4 }}
            >
              {tour.short_description}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontWeight: 800,
                color: "#01528C",
                fontSize: {
                  xs: "1.2rem",
                  md: "1.5rem",
                },
              }}
              mb={2}
            >
              Sobre esta experiencia
            </Typography>

            <Box
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                mb: 6,
                fontSize: {
                  xs: "0.95rem",
                  md: "1rem",
                },
                "& h1": { fontSize: "1.4rem" },
                "& h2": { fontSize: "1.2rem" },
                "& h3": { fontSize: "1.1rem" },
                "& p": { marginBottom: "1rem" },
              }}
              dangerouslySetInnerHTML={{ __html: tour.description }}
            />

            {tour.location && (
              <Box
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.8,
                  mb: 4,
                }}
                dangerouslySetInnerHTML={{ __html: tour.location }}
              />
            )}

            <Divider sx={{ mb: 4 }} />

            {/* Tags */}
            {tour.tags?.length > 0 && (
              <>
                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "#01528C",
                    fontSize: {
                      xs: "1.2rem",
                      md: "1.5rem",
                    },
                  }}
                  mb={3}
                >
                  Tags
                </Typography>

                <Grid container spacing={2}>
                  {tour.tags.map((tag, i) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                      <Stack direction='row' spacing={1.5} alignItems='center'>
                        <StyleIcon sx={{ color: "#A3BB13" }} />
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
                position: { xs: "relative", md: "sticky" },
                top: { md: 120 },
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                bgcolor: "#fff",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                mt: { xs: 2, md: 0 },
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

              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#01528C",
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.2rem",
                    md: "2.6rem",
                  },
                }}
                mb={2}
              >
                ${tour.price} MXN
              </Typography>

              <Button
                fullWidth
                size='large'
                variant='contained'
                startIcon={<WhatsAppIcon width={28} />}
                href={tour.whatsapp_link}
                target='_blank'
                sx={{
                  py: { xs: 1.5, md: 2 },
                  fontSize: {
                    xs: "0.95rem",
                    md: "1rem",
                  },
                  fontWeight: 800,
                  bgcolor: "#A3BB13",
                  color: "#01528C",
                  borderRadius: 3,
                  "&:hover": { bgcolor: "#A3BB13", color: "#01528C" },
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
