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
import CalendarIcon from "../icons/CalendarIcon";
import FormatDate from "../../utils/FormatDate";
import LocationIcon from "../icons/Location";
import TimeIcon from "../icons/TimeIcon";
const TourCard = ({ tour, onOpen }) => {
  return (
    <Paper elevation={3} sx={{ borderRadius: "12px" }}>
      <Card
        onClick={onOpen}
        sx={{
          cursor: "pointer",
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
              objectFit: "cover",
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
                onClick={(e) => e.stopPropagation()} // 🔥 CLAVE
                sx={{
                  position: "absolute",
                  bottom: 12,
                  right: 12,
                  bgcolor: "#25D366",
                  color: "#fff",
                  boxShadow: 4,
                  "&:hover": { bgcolor: "#1ebe5d" },
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
              <LocationIcon width={28} />
              <Typography variant='body2'>{tour.short_description}</Typography>
            </Stack>
            <Stack direction='row' spacing={1} alignItems='center'>
              <CalendarIcon width={30} />
              <Typography variant='body2'>{FormatDate(tour.date)}</Typography>
            </Stack>
            <Stack direction='row' spacing={1} alignItems='center'>
              <TimeIcon width={28} />
              <Typography variant='body2'>{tour.duration}</Typography>
            </Stack>
          </Stack>

          {/* PRICE */}
          <Box
            sx={{
              mt: "auto",
              py: 1,
              bgcolor: "#01528C",
              color: "#fff",
              width: "100%",
              borderTopRightRadius: "18px",
              borderBottomLeftRadius: "18px",
            }}
          >
            <Typography variant='h6' fontWeight={800}>
              ${tour.price} MXN
            </Typography>
            <Typography variant='caption'>por persona</Typography>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default TourCard;
