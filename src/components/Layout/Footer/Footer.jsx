import {
  Box,
  Grid,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../../../assets/LOGO EXPERIENCIAS MEXICO VECTOR.png";
import Location from "../../icons/Location";
import Phoneicon from "../../icons/Phoneicon";
import TimeIcon from "../../icons/TimeIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import TiktokIcon from "../../icons/TiktokIcon";
import MailIcon from "../../icons/MailIcon";

// ── Patrón geométrico SVG de fondo ──────────────────────────────
const GeometricBg = () => (
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0,
    }}
  >
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 1200 400'
      preserveAspectRatio='xMidYMid slice'
    >
      {/* Círculos concéntricos esquina izquierda */}
      {[80, 140, 200, 260, 320].map((r, i) => (
        <circle
          key={`cl-${i}`}
          cx='0'
          cy='400'
          r={r}
          stroke='#01528C'
          strokeWidth='0.8'
          fill='none'
          opacity={0.06 - i * 0.008}
        />
      ))}
      {/* Círculos concéntricos esquina derecha */}
      {[80, 140, 200, 260].map((r, i) => (
        <circle
          key={`cr-${i}`}
          cx='1200'
          cy='0'
          r={r}
          stroke='#A3BB13'
          strokeWidth='0.8'
          fill='none'
          opacity={0.07 - i * 0.01}
        />
      ))}
      {/* Grid de puntos */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 20 }).map((_, col) => (
          <circle
            key={`d-${row}-${col}`}
            cx={60 + col * 60}
            cy={40 + row * 48}
            r='1.5'
            fill='#01528C'
            opacity='0.07'
          />
        ))
      )}
      {/* Líneas diagonales sutiles */}
      {[200, 400, 600, 800, 1000].map((x, i) => (
        <line
          key={`l-${i}`}
          x1={x}
          y1='0'
          x2={x + 200}
          y2='400'
          stroke='#01528C'
          strokeWidth='0.5'
          opacity='0.04'
        />
      ))}
      {/* Rombo decorativo centro */}
      <polygon
        points='600,60 660,140 600,220 540,140'
        stroke='#A3BB13'
        strokeWidth='1'
        fill='none'
        opacity='0.08'
      />
      <polygon
        points='600,90 645,140 600,190 555,140'
        stroke='#A3BB13'
        strokeWidth='0.6'
        fill='none'
        opacity='0.05'
      />
    </svg>
  </Box>
);

// ── Separador vertical entre columnas ───────────────────────────
const ColumnDivider = () => (
  <Box
    sx={{
      display: { xs: "none", md: "flex" },
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      px: 1,
    }}
  >
    <Box
      sx={{
        width: 1,
        flex: 1,
        background:
          "linear-gradient(to bottom, transparent, rgba(1,82,140,0.15), transparent)",
      }}
    />
    <Box
      sx={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#A3BB13",
        opacity: 0.6,
      }}
    />
    <Box
      sx={{
        width: 1,
        flex: 1,
        background:
          "linear-gradient(to bottom, transparent, rgba(1,82,140,0.15), transparent)",
      }}
    />
  </Box>
);

// ── Ítem de contacto reutilizable ────────────────────────────────
const ContactItem = ({ icon, children, href, to }) => {
  const inner = (
    <Stack
      direction='row'
      spacing={1.5}
      alignItems='flex-start'
      justifyContent='center'
      sx={{
        transition: "transform 0.25s",
        "&:hover": { transform: "translateX(4px)" },
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "10px",
          background: "rgba(1,82,140,0.06)",
          border: "1px solid rgba(1,82,140,0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ pt: 0.5 }}>{children}</Box>
    </Stack>
  );

  if (href)
    return (
      <a href={href} style={{ textDecoration: "none" }}>
        {inner}
      </a>
    );
  if (to)
    return (
      <Link to={to} target='_blank' style={{ textDecoration: "none" }}>
        {inner}
      </Link>
    );
  return inner;
};

// ── Ítem de red social ───────────────────────────────────────────
const SocialItem = ({ icon, label, to, href }) => {
  const inner = (
    <Stack
      direction='row'
      spacing={1.5}
      alignItems='center'
      justifyContent='center'
      sx={{
        transition: "transform 0.25s",
        "&:hover .social-label": { color: "#A3BB13" },
        "&:hover": { transform: "translateX(4px)" },
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "10px",
          background: "rgba(1,82,140,0.06)",
          border: "1px solid rgba(1,82,140,0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background 0.25s, border-color 0.25s",
          "&:hover": {
            background: "rgba(163,187,19,0.10)",
            borderColor: "rgba(163,187,19,0.25)",
          },
        }}
      >
        {icon}
      </Box>
      <Typography
        className='social-label'
        sx={{
          fontSize: 14,
          fontWeight: 400,
          color: "#01528C",
          fontFamily: "'Jost', sans-serif",
          transition: "color 0.25s",
        }}
      >
        {label}
      </Typography>
    </Stack>
  );

  if (href)
    return (
      <a href={href} style={{ textDecoration: "none" }}>
        {inner}
      </a>
    );
  return (
    <Link to={to || ""} target='_blank' style={{ textDecoration: "none" }}>
      {inner}
    </Link>
  );
};

// ── Footer principal ─────────────────────────────────────────────
const Footer = () => (
  <>
    <link
      href='https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600&display=swap'
      rel='stylesheet'
    />

    <Box sx={{ background: "#FFF", position: "relative", overflow: "hidden" }}>
      {/* Franja superior con degradado */}
      {/* <Box
        sx={{
          height: 4,
          background: "linear-gradient(90deg, #01528C, #A3BB13)",
        }}
      /> */}

      {/* Patrón de fondo */}
      <GeometricBg />

      {/* Contenido principal */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 3, md: 8, lg: 14 },
          pt: { xs: 6, md: 8 },
          pb: 0,
        }}
      >
        <Grid container alignItems='stretch' spacing={0}>
          {/* ── Columna 1: Logo + descripción ── */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ pr: { md: 5 }, pb: { xs: 4, md: 0 } }}>
              <Box
                component='img'
                src={Logo}
                alt='Experiencias México'
                sx={{ width: 150, mb: 3, display: "block" }}
              />

              {/* Línea decorativa */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2.5 }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 2,
                    background: "#01528C",
                    borderRadius: 1,
                    opacity: 0.75,
                  }}
                />
                <Box
                  sx={{
                    width: 36,
                    height: 3,
                    background: "#A3BB13",
                    borderRadius: 1,
                  }}
                />
                <Box
                  sx={{
                    width: 24,
                    height: 2,
                    background: "#01528C",
                    borderRadius: 1,
                    opacity: 0.75,
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Separador 1 */}
          <ColumnDivider />

          {/* ── Columna 2: Visítanos ── */}
          <Grid size={{ xs: 12, md: "auto" }} sx={{ flex: { md: 1 } }}>
            <Box sx={{ px: { md: 4 }, pb: { xs: 4, md: 0 } }}>
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.35em",
                  color: "#A3BB13",
                  textTransform: "uppercase",
                  fontFamily: "'Jost', sans-serif",
                  mb: 1,
                }}
              >
                Contacto
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#01528C",
                  fontFamily: "'Jost', sans-serif",
                  mb: 3,
                  lineHeight: 1,
                }}
              >
                Visítanos
              </Typography>

              <Stack spacing={2.5}>
                <ContactItem
                  to='https://maps.app.goo.gl/3Ju9oPDzxz4MCuVG7'
                  icon={<Location width={18} />}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 300,
                      color: "rgba(1,82,140,0.75)",
                      fontFamily: "'Jost', sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    C. Independencia #72
                    <br />
                    Xonacatlán, EdoMex
                    <br />
                    Segundo piso
                  </Typography>
                </ContactItem>

                <ContactItem
                  href='tel:+525652657371'
                  icon={<Phoneicon width={18} height={18} color='#01528C' />}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#01528C",
                      fontFamily: "'Jost', sans-serif",
                    }}
                  >
                    +52 5652 6573 71
                  </Typography>
                </ContactItem>

                <ContactItem icon={<TimeIcon width={18} />}>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 300,
                      color: "rgba(1,82,140,0.75)",
                      fontFamily: "'Jost', sans-serif",
                    }}
                  >
                    Lun – Sab: 11am – 7pm
                  </Typography>
                </ContactItem>
              </Stack>
            </Box>
          </Grid>

          {/* Separador 2 */}
          <ColumnDivider />

          {/* ── Columna 3: Redes sociales ── */}
          <Grid size={{ xs: 12, md: "auto" }} sx={{ flex: { md: 1 } }}>
            <Box sx={{ pl: { md: 4 }, pb: { xs: 4, md: 0 } }}>
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.35em",
                  color: "#A3BB13",
                  textTransform: "uppercase",
                  fontFamily: "'Jost', sans-serif",
                  mb: 1,
                }}
              >
                Comunidad
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#01528C",
                  fontFamily: "'Jost', sans-serif",
                  mb: 3,
                  lineHeight: 1,
                }}
              >
                Síguenos
              </Typography>

              <Stack spacing={2}>
                <SocialItem
                  icon={<FacebookIcon width={18} />}
                  label='Facebook'
                  to=''
                />
                <SocialItem
                  icon={<InstagramIcon width={18} />}
                  label='Instagram'
                  to=''
                />
                <SocialItem
                  icon={<TiktokIcon width={18} />}
                  label='TikTok'
                  to=''
                />
                <SocialItem
                  icon={<MailIcon width={18} />}
                  label='contacto@experienciaspormexico.com.mx'
                  href='mailto:contacto@experienciaspormexico.com.mx?subject=Contacto%20desde%20la%20web'
                />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* ── Franja inferior de copyright ── */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          mt: { xs: 5, md: 6 },
          px: { xs: 3, md: 8, lg: 14 },
          py: 2.5,
          borderTop: "1px solid rgba(1,82,140,0.10)",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 300,
            color: "rgba(1,82,140,0.85)",
            fontFamily: "'Jost', sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          © 2026 Experiencias por México — Todos los derechos reservados
        </Typography>

        {/* Badge hecho con amor */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 16,
              height: 2,
              background: "#01528C",
              borderRadius: 1,
              opacity: 0.2,
            }}
          />
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 300,
              color: "rgba(1,82,140,0.85)",
              fontFamily: "'Jost', sans-serif",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Hecho en México
          </Typography>
          <Box
            sx={{
              width: 16,
              height: 2,
              background: "#A3BB13",
              borderRadius: 1,
              opacity: 0.4,
            }}
          />
        </Box>
      </Box>
    </Box>
  </>
);

export default Footer;
