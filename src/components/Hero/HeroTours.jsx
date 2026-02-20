import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const HeroTours = ({ tours = [] }) => {
  if (!tours.length) return null;

  return (
    <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        slidesPerView={1}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        style={{ width: "100%", height: "100%" }}
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            {/* IMAGE */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${tour.cover_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* GLOBAL DARK OVERLAY */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45))",
                zIndex: 1,
              }}
            />

            {/* CENTER FOCUS OVERLAY (CLAVE DEL FIX) */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0) 100%)",
                zIndex: 2,
              }}
            />

            {/* CONTENT */}
            <Box
              sx={{
                position: "relative",
                zIndex: 3,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 3,
              }}
            >
              <Box sx={{ maxWidth: "900px" }}>
                {/* EYEBROW */}
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    fontSize: "0.75rem",
                    mb: 2,
                  }}
                >
                  Oferta válida por tiempo limitado
                </Typography>

                {/* TITLE */}
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    lineHeight: 1.05,
                    mb: 3,
                    fontSize: {
                      xs: "2.2rem",
                      sm: "3.2rem",
                      md: "4.3rem",
                    },
                  }}
                >
                  {tour.title}
                </Typography>

                {/* DIVIDER */}
                <Box
                  sx={{
                    width: 90,
                    height: 2,
                    bgcolor: "#fff",
                    mx: "auto",
                    mb: 3,
                    opacity: 0.9,
                  }}
                />

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    mb: 4,
                  }}
                >
                  {tour.short_description}
                </Typography>

                {/* PRICE */}
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "1rem",
                    mb: 4,
                  }}
                >
                  Desde{" "}
                  <Box
                    component='span'
                    sx={{ fontWeight: 700, fontSize: "1.8rem" }}
                  >
                    ${tour.price}
                  </Box>{" "}
                  / Persona
                </Typography>

                {/* CTA */}
                <Button
                  href={tour.whatsapp_link}
                  target='_blank'
                  size='large'
                  sx={{
                    bgcolor: "#a3bb13",
                    color: "#fff",
                    px: 5,
                    py: 1.6,
                    fontWeight: 600,
                    borderRadius: "999px",
                    textTransform: "none",
                    boxShadow: "0 12px 35px rgba(163, 187, 19, 0.45)",
                    "&:hover": {
                      bgcolor: "#a3bb13",
                      color: "#fff",
                    },
                  }}
                >
                  Me interesa →
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroTours;
