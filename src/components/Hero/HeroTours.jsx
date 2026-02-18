import { Box, Typography, Button, Chip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroTours = ({ tours = [] }) => {
  if (!tours.length) return null;

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "100vh", md: "100vh" },
        overflow: "hidden", // 🔒 elimina scroll horizontal
      }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        slidesPerView={1}
        loop
        autoplay={{
          delay: 6000, // ⏱ 6 segundos
          disableOnInteraction: false,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${tour.cover_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)",
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  alignItems: { xs: "flex-end", md: "center" },
                  px: { xs: 2.5, md: 10 },
                  pb: { xs: 6, md: 0 },
                  maxWidth: "1200px",
                }}
              >
                <Box sx={{ maxWidth: "600px" }}>
                  <Chip
                    label={tour.location}
                    sx={{
                      mb: 1.5,
                      bgcolor: "rgba(255,255,255,0.15)",
                      color: "#fff",
                      backdropFilter: "blur(6px)",
                      fontSize: { xs: "0.75rem", md: "0.85rem" },
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      mb: 1.5,
                      fontSize: {
                        xs: "2rem",
                        sm: "2.4rem",
                        md: "3.2rem",
                      },
                    }}
                  >
                    {tour.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.9)",
                      mb: 2,
                      fontSize: { xs: "0.95rem", md: "1.1rem" },
                    }}
                  >
                    {tour.short_description}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: "1rem", md: "1.15rem" },
                    }}
                  >
                    Desde ${tour.price} MXN · {tour.duration}
                  </Typography>

                  <Button
                    variant='contained'
                    size='large'
                    href={tour.whatsapp_link}
                    target='_blank'
                    sx={{
                      bgcolor: "#A3BB13",
                      color: "#01528C",
                      fontWeight: 600,
                      px: 4,
                      py: 1.4,
                      "&:hover": { bgcolor: "#A3BB13", color: "#01528C" },
                    }}
                  >
                    Reservar ahora
                  </Button>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroTours;
