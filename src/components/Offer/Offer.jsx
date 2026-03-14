import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

import pareja from "../../assets/pareja.webp";
import lanchas from "../../assets/lanchas.webp";

import WorldIcon from "../icons/WorldIcon";
import PackageIcon from "../icons/PackageIcon";

// ── Variantes de animación ───────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut", delay },
  }),
};

// ── Feature item ─────────────────────────────────────────────────
const FeatureItem = ({ icon, title, desc, titleColor, delay }) => (
  <motion.div
    variants={fadeUp}
    custom={delay}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
  >
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "flex-start",
        p: 2.5,
        borderRadius: "16px",
        background: "#ffffff",
        border: "1.5px solid rgba(1,82,140,0.08)",
        boxShadow: "0 4px 20px rgba(1,82,140,0.05)",
        transition: "box-shadow 0.35s, transform 0.35s",
        "&:hover": {
          boxShadow: "0 8px 32px rgba(1,82,140,0.10)",
          transform: "translateY(-3px)",
        },
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "12px",
          flexShrink: 0,
          background: "rgba(1,82,140,0.05)",
          border: "1px solid rgba(1,82,140,0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: "bold",
            color: titleColor,
            fontFamily: "'Jost', sans-serif",
            mb: 0.4,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 19,
            fontWeight: "bold",
            color: "rgba(1,82,140,0.8)",
            fontFamily: "'Jost', sans-serif",
            lineHeight: 1.7,
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  </motion.div>
);

// ── Componente principal ─────────────────────────────────────────
const Offer = () => (
  <>
    <link
      href='https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600&display=swap'
      rel='stylesheet'
    />

    <Box
      sx={{
        background: "#f6f6f6",
        px: { xs: 3, md: 8, lg: 14 },
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Patrón geométrico de fondo ── */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 1200 700'
          preserveAspectRatio='xMidYMid slice'
        >
          {[120, 200, 280, 360].map((r, i) => (
            <circle
              key={i}
              cx='1200'
              cy='700'
              r={r}
              stroke='#A3BB13'
              strokeWidth='0.8'
              fill='none'
              opacity={0.07 - i * 0.01}
            />
          ))}
          {[100, 170, 240].map((r, i) => (
            <circle
              key={i}
              cx='0'
              cy='0'
              r={r}
              stroke='#01528C'
              strokeWidth='0.8'
              fill='none'
              opacity={0.06 - i * 0.01}
            />
          ))}
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 14 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={80 + col * 80}
                cy={60 + row * 100}
                r='1.5'
                fill='#01528C'
                opacity='0.06'
              />
            ))
          )}
        </svg>
      </Box>

      <Grid
        container
        spacing={{ xs: 6, md: 8 }}
        alignItems='center'
        sx={{ position: "relative", zIndex: 1 }}
      >
        {/* ══════════════════════════════
            COLUMNA IZQUIERDA — Texto
        ══════════════════════════════ */}
        <Grid size={{ xs: 12, md: 6 }}>
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: "bold",
                letterSpacing: "0.4em",
                color: "#A3BB13",
                textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif",
                mb: 2,
              }}
            >
              Planea tu próxima aventura
            </Typography>
          </motion.div>

          {/* Título */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: { xs: 32, md: 44, lg: 50 },
                fontWeight: 600,
                color: "#01528C",
                lineHeight: 1.08,
                fontFamily: "'Jost', sans-serif",
                mb: 1,
              }}
            >
              Viaja cuando quieras,
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 28, md: 38, lg: 44 },
                fontWeight: 300,
                color: "#A3BB13",
                lineHeight: 1.15,
                fontFamily: "'Jost', sans-serif",
                mb: 3,
              }}
            >
              como siempre soñaste
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              justifySelf: "center",
            }}
          >
            {/* Descripción */}
            <motion.div
              variants={fadeUp}
              custom={0.25}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "rgba(1,82,140,0.86)",
                  lineHeight: 1.85,
                  fontFamily: "'Jost', sans-serif",
                  maxWidth: 460,
                  mb: 4,
                }}
              >
                Sal de lo convencional y descubre experiencias auténticas.
                Diseñamos viajes únicos para quienes buscan algo más que un
                destino: buscan recuerdos inolvidables.
              </Typography>
            </motion.div>
          </Box>

          {/* Features */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
            <FeatureItem
              icon={<WorldIcon />}
              title='Agencia experta en experiencias'
              desc='Creamos viajes personalizados en los destinos más increíbles de México.'
              titleColor='#01528C'
              delay={0.3}
            />
            <FeatureItem
              icon={<PackageIcon />}
              title='Viajes seguros y confiables'
              desc='Te acompañamos en cada paso para que solo te preocupes por disfrutar.'
              titleColor='#A3BB13'
              delay={0.4}
            />
          </Box>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            custom={0.5}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <Button
              size='large'
              disableElevation
              onClick={() =>
                window.scrollBy({ top: -1090, behavior: "smooth" })
              }
              sx={{
                background: "#01528C",
                color: "#ffffff",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: 13,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                px: 4.5,
                py: 1.8,
                borderRadius: "12px",
                border: "1.5px solid #01528C",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "transparent",
                  color: "#01528C",
                },
                "&:active": { transform: "scale(0.98)" },
              }}
            >
              Descubrir experiencias →
            </Button>
          </motion.div>
        </Grid>

        {/* ══════════════════════════════
            COLUMNA DERECHA — Imágenes
        ══════════════════════════════ */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative", height: { xs: 380, md: 520 } }}>
            {/* Watermark VIAJAR */}
            <motion.div
              variants={fadeIn}
              custom={0.1}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-65%, -50%)",
                  fontSize: { xs: 64, md: 96 },
                  fontWeight: "bold",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(1,82,140,0.8)",
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.2em",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  zIndex: 30,
                  marginTop: 30,
                  lineHeight: 1,
                }}
              >
                VIAJAR
              </Typography>
            </motion.div>

            {/* Imagen principal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15,
              }}
              viewport={{ once: true }}
              style={{ position: "absolute", top: 0, left: "5%", zIndex: 1 }}
            >
              <Box
                component='img'
                src='https://grupoenconcreto.com/wp-content/uploads/2025/03/El-Pueblo-MagicoMascota-celebrara-en-grande-su-140-aniversario-scaled.jpg'
                alt='Destino México'
                sx={{
                  width: { xs: 240, md: 320 },
                  height: { xs: 300, md: 400 },
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(1,82,140,0.15)",
                  display: "block",
                }}
              />
              {/* Badge sobre imagen principal */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: -20,
                  background: "#01528C",
                  borderRadius: "12px",
                  px: 2,
                  py: 1.2,
                  boxShadow: "0 6px 20px rgba(1,82,140,0.25)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "#A3BB13",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    fontFamily: "'Jost', sans-serif",
                  }}
                >
                  +50 destinos
                </Typography>
              </Box>
            </motion.div>

            {/* Imagen flotante */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35,
              }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                bottom: 0,
                right: "2%",
                zIndex: 2,
              }}
            >
              <Box
                component='img'
                src='https://travelgrafia.co/wp-content/uploads/2025/01/Pueblo-Magico-de-Queretaro.jpg'
                alt='Pueblo Mágico'
                sx={{
                  width: { xs: 160, md: 220 },
                  height: { xs: 200, md: 260 },
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 16px 48px rgba(1,82,140,0.18)",
                  border: "4px solid #f6f6f6",
                  display: "block",
                }}
              />
            </motion.div>

            {/* Badge verde flotante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                top: "18%",
                right: "0%",
                zIndex: 3,
              }}
            >
              <Box
                sx={{
                  background: "#ffffff",
                  border: "1.5px solid rgba(163,187,19,0.25)",
                  borderRadius: "14px",
                  px: 2,
                  py: 1.2,
                  boxShadow: "0 8px 28px rgba(1,82,140,0.09)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(163,187,19,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M12 2L4 6v6c0 5.5 3.5 9 8 10 4.5-1 8-4.5 8-10V6L12 2z'
                      stroke='#A3BB13'
                      strokeWidth='2'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8.5 12l2.5 2.5L15.5 9'
                      stroke='#A3BB13'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "#01528C",
                      fontFamily: "'Jost', sans-serif",
                      lineHeight: 1.2,
                    }}
                  >
                    Viaje seguro
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: "bold",
                      color: "rgba(1,82,140,0.95)",
                      fontFamily: "'Jost', sans-serif",
                    }}
                  >
                    Seguro incluido
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* Línea decorativa vertical */}
            <Box
              sx={{
                position: "absolute",
                top: "10%",
                left: "-8px",
                width: 3,
                height: "35%",
                background:
                  "linear-gradient(to bottom, transparent, #A3BB13, transparent)",
                borderRadius: 4,
                zIndex: 0,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Offer;
