import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Chip,
  Stack,
  Tooltip,
  Paper,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: "12px" }}>
      <Card
        component={Link}
        to={`/tour/${tour.slug}`}
        sx={{
          textDecoration: "none",
          color: "inherit",
          borderRadius: 4,
          overflow: "hidden",
          transition: "all .35s ease",
          boxShadow: 3,
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: 10,
          },
        }}
      >
        {/* IMAGE */}
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component='img'
            image={tour.cover_image}
            alt={tour.title}
            sx={{
              height: "auto",
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover", // 👈 CLAVE
            }}
          />

          {/* Gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,.05), rgba(0,0,0,.05))",
            }}
          />

          {/* Badge */}
          {tour.badge && (
            <Chip
              label={tour.badge}
              size='small'
              sx={{
                position: "absolute",
                top: 14,
                left: 14,
                fontWeight: 600,
                bgcolor: "#22c55e",
                color: "#fff",
              }}
            />
          )}

          {/* WhatsApp */}
          {tour.whatsapp_link && (
            <Tooltip title='Contactar por WhatsApp'>
              <IconButton
                href={tour.whatsapp_link}
                target='_blank'
                onClick={(e) => e.stopPropagation()}
                sx={{
                  position: "absolute",
                  bottom: 12,
                  right: 12,
                  bgcolor: "#25D366",
                  color: "#fff",
                  boxShadow: 4,
                  "&:hover": {
                    bgcolor: "#1ebe5d",
                  },
                }}
              >
                <WhatsAppIcon fontSize='small' />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        {/* CONTENT */}
        <CardContent sx={{ p: 2.5 }}>
          <Typography
            variant='subtitle1'
            fontWeight={700}
            sx={{
              mb: 1,
              lineHeight: 1.3,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {tour.title}
          </Typography>

          <Stack spacing={0.8} sx={{ color: "text.secondary", mb: 2 }}>
            <Stack direction='row' spacing={1} alignItems='center'>
              <LocationOnIcon fontSize='small' />
              <Typography variant='body2'>{tour.location}</Typography>
            </Stack>

            <Stack direction='row' spacing={1} alignItems='center'>
              <ScheduleIcon fontSize='small' />
              <Typography variant='body2'>{tour.duration}</Typography>
            </Stack>
          </Stack>

          {/* PRICE */}
          <Box
            sx={{
              mt: "auto",
              display: "inline-flex",
              flexDirection: "column",
              px: 2,
              py: 1,
              borderRadius: 3,
              bgcolor: "primary.main",
              color: "#fff",
            }}
          >
            {tour.old_price && (
              <Typography
                variant='caption'
                sx={{ textDecoration: "line-through", opacity: 0.8 }}
              >
                ${tour.old_price}
              </Typography>
            )}

            <Typography variant='h6' fontWeight={800} lineHeight={1}>
              ${tour.price}
            </Typography>

            <Typography variant='caption' sx={{ opacity: 0.9 }}>
              MXN / persona
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default TourCard;
