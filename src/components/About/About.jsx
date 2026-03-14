import { Box, Typography } from "@mui/material";
import React from "react";

const cards = [
  {
    tag: "01 — Misión",
    title: "Nuestra Misión",
    body: "Brindar servicios de transporte y experiencias turísticas de alta calidad, gestionando cada detalle logístico con eficiencia y profesionalismo para garantizar la satisfacción total de nuestros clientes.",
    accent: "#01528C",
    pattern: "mission",
    icon: (
      <svg width='48' height='48' viewBox='0 0 48 48' fill='none'>
        <circle cx='24' cy='24' r='10' stroke='#A3BB13' strokeWidth='2' />
        <circle
          cx='24'
          cy='24'
          r='18'
          stroke='#A3BB13'
          strokeWidth='1'
          strokeDasharray='3 3'
          opacity='0.4'
        />
        <line
          x1='24'
          y1='6'
          x2='24'
          y2='14'
          stroke='#A3BB13'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='24'
          y1='34'
          x2='24'
          y2='42'
          stroke='#A3BB13'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='6'
          y1='24'
          x2='14'
          y2='24'
          stroke='#A3BB13'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <line
          x1='34'
          y1='24'
          x2='42'
          y2='24'
          stroke='#A3BB13'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <circle cx='24' cy='24' r='3' fill='#A3BB13' />
      </svg>
    ),
  },
  {
    tag: "02 — Visión",
    title: "Nuestra Visión",
    body: "Consolidarnos como la empresa líder en transporte privado y experiencias turísticas de la región, reconocida por nuestra excelencia operativa, innovación y compromiso con nuestros clientes.",
    accent: "#A3BB13",
    pattern: "vision",
    icon: (
      <svg width='48' height='48' viewBox='0 0 48 48' fill='none'>
        <path
          d='M6 24 C12 14 20 10 24 10 C28 10 36 14 42 24 C36 34 28 38 24 38 C20 38 12 34 6 24Z'
          stroke='#01528C'
          strokeWidth='2'
          fill='none'
        />
        <circle cx='24' cy='24' r='6' stroke='#01528C' strokeWidth='2' />
        <circle cx='24' cy='24' r='2.5' fill='#01528C' />
        <path
          d='M24 4 L24 10'
          stroke='#01528C'
          strokeWidth='1.5'
          strokeLinecap='round'
          opacity='0.4'
        />
        <path
          d='M24 38 L24 44'
          stroke='#01528C'
          strokeWidth='1.5'
          strokeLinecap='round'
          opacity='0.4'
        />
      </svg>
    ),
  },
  {
    tag: "03 — Identidad",
    title: "¿Quiénes Somos?",
    body: '"Ejecutivas y Experiencias por México" nace con la visión de conectar personas y destinos a través de soluciones de movilidad confiables, seguras y confortables, fomentando el amor por viajar.',
    accent: "#01528C",
    pattern: "identity",
    icon: (
      <svg width='48' height='48' viewBox='0 0 48 48' fill='none'>
        <circle cx='17' cy='16' r='6' stroke='#A3BB13' strokeWidth='2' />
        <circle cx='31' cy='16' r='6' stroke='#A3BB13' strokeWidth='2' />
        <path
          d='M6 38 C6 30 11 26 17 26'
          stroke='#A3BB13'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <path
          d='M42 38 C42 30 37 26 31 26'
          stroke='#A3BB13'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <path
          d='M17 26 C17 26 20 24 24 24 C28 24 31 26 31 26 C37 26 42 30 42 38'
          stroke='#A3BB13'
          strokeWidth='2'
          strokeLinecap='round'
          fill='none'
        />
      </svg>
    ),
  },
];

const GeometricPattern = ({ type, accent }) => {
  const isBlue = accent === "#01528C";
  const primary = isBlue ? "#01528C" : "#A3BB13";
  const secondary = isBlue ? "#A3BB13" : "#01528C";

  if (type === "mission")
    return (
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 400 320'
        preserveAspectRatio='xMidYMid slice'
      >
        {/* Círculos concéntricos */}
        {[200, 160, 120, 80, 40].map((r, i) => (
          <circle
            key={i}
            cx='200'
            cy='160'
            r={r}
            stroke={primary}
            strokeWidth='0.8'
            fill='none'
            opacity={0.08 + i * 0.03}
            strokeDasharray={i % 2 === 0 ? "none" : "4 4"}
          />
        ))}
        {/* Líneas de cuadrícula radial */}
        {[0, 30, 60, 90, 120, 150].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={200}
              y1={160}
              x2={200 + 200 * Math.cos(rad)}
              y2={160 + 200 * Math.sin(rad)}
              stroke={primary}
              strokeWidth='0.6'
              opacity='0.08'
            />
          );
        })}
        {/* Rombo central decorativo */}
        <polygon
          points='200,60 280,160 200,260 120,160'
          stroke={secondary}
          strokeWidth='1.2'
          fill='none'
          opacity='0.15'
        />
        <polygon
          points='200,100 250,160 200,220 150,160'
          stroke={secondary}
          strokeWidth='0.8'
          fill='none'
          opacity='0.1'
        />
        {/* Puntos en esquinas */}
        {[
          [60, 40],
          [340, 40],
          [60, 280],
          [340, 280],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r='3' fill={secondary} opacity='0.2' />
        ))}
        {/* Punto central */}
        <circle cx='200' cy='160' r='5' fill={primary} opacity='0.25' />
        <circle cx='200' cy='160' r='2' fill={primary} opacity='0.5' />
      </svg>
    );

  if (type === "vision")
    return (
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 400 320'
        preserveAspectRatio='xMidYMid slice'
      >
        {/* Grid diagonal */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`d1-${i}`}
            x1={i * 40 - 80}
            y1={0}
            x2={i * 40 + 240}
            y2={320}
            stroke={primary}
            strokeWidth='0.7'
            opacity='0.07'
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`d2-${i}`}
            x1={i * 40 + 160}
            y1={0}
            x2={i * 40 - 80}
            y2={320}
            stroke={primary}
            strokeWidth='0.7'
            opacity='0.07'
          />
        ))}
        {/* Hexágono central */}
        <polygon
          points='200,60 270,100 270,180 200,220 130,180 130,100'
          stroke={secondary}
          strokeWidth='1.5'
          fill='none'
          opacity='0.18'
        />
        <polygon
          points='200,90 245,115 245,165 200,190 155,165 155,115'
          stroke={secondary}
          strokeWidth='0.8'
          fill='none'
          opacity='0.1'
        />
        {/* Triángulos en esquinas */}
        {[
          [20, 20],
          [380, 20],
          [20, 300],
          [380, 300],
        ].map(([cx, cy], i) => (
          <polygon
            key={i}
            points={`${cx},${cy - 12} ${cx + 10},${cy + 8} ${cx - 10},${
              cy + 8
            }`}
            fill={primary}
            opacity='0.15'
            transform={`rotate(${i * 90}, ${cx}, ${cy})`}
          />
        ))}
        <circle cx='200' cy='140' r='4' fill={secondary} opacity='0.4' />
      </svg>
    );

  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 400 320'
      preserveAspectRatio='xMidYMid slice'
    >
      {/* Ondas horizontales */}
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${40 + i * 36} Q100 ${28 + i * 36} 200 ${40 + i * 36} Q300 ${
            52 + i * 36
          } 400 ${40 + i * 36}`}
          stroke={primary}
          strokeWidth='0.8'
          fill='none'
          opacity='0.07'
        />
      ))}
      {/* Red de puntos */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={40 + col * 50}
            cy={40 + row * 50}
            r='2'
            fill={primary}
            opacity='0.12'
          />
        ))
      )}
      {/* Líneas conectoras entre algunos puntos */}
      {[
        [40, 40, 190, 140],
        [190, 140, 340, 90],
        [90, 140, 240, 240],
        [290, 40, 340, 190],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={secondary}
          strokeWidth='1'
          opacity='0.12'
          strokeDasharray='4 3'
        />
      ))}
      {/* Rectángulos decorativos */}
      <rect
        x='30'
        y='30'
        width='60'
        height='60'
        rx='8'
        stroke={secondary}
        strokeWidth='1'
        fill='none'
        opacity='0.1'
      />
      <rect
        x='310'
        y='230'
        width='60'
        height='60'
        rx='8'
        stroke={secondary}
        strokeWidth='1'
        fill='none'
        opacity='0.1'
      />
      <rect
        x='160'
        y='100'
        width='80'
        height='80'
        rx='12'
        stroke={primary}
        strokeWidth='1.5'
        fill='none'
        opacity='0.15'
      />
      <circle cx='200' cy='140' r='3' fill={primary} opacity='0.4' />
    </svg>
  );
};

const AboutCard = ({ tag, title, body, accent, pattern, icon, index }) => {
  const isEven = index % 2 === 0;
  const bgAccent =
    accent === "#01528C" ? "rgba(1,82,140,0.04)" : "rgba(163,187,19,0.04)";

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        mb: { xs: 3, md: 4 },
        borderRadius: "24px",
        overflow: "hidden",
        background: "#ffffff",
        border: "1.5px solid rgba(1,82,140,0.08)",
        boxShadow: "0 4px 24px rgba(1,82,140,0.05)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
        "&:hover": {
          boxShadow: "0 14px 44px rgba(1,82,140,0.11)",
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Panel geométrico */}
      <Box
        sx={{
          order: { xs: 0, md: isEven ? 0 : 1 },
          position: "relative",
          minHeight: { xs: 200, md: 300 },
          background: bgAccent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Patrón SVG de fondo */}
        <Box sx={{ position: "absolute", inset: 0 }}>
          <GeometricPattern type={pattern} accent={accent} />
        </Box>

        {/* Ícono central con círculo */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "#ffffff",
              border: `2px solid ${
                accent === "#01528C"
                  ? "rgba(1,82,140,0.15)"
                  : "rgba(163,187,19,0.25)"
              }`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 8px 28px ${
                accent === "#01528C"
                  ? "rgba(1,82,140,0.12)"
                  : "rgba(163,187,19,0.15)"
              }`,
            }}
          >
            {icon}
          </Box>

          {/* Tag badge */}
          <Box
            sx={{
              background: accent,
              borderRadius: "8px",
              px: 2,
              py: 0.8,
            }}
          >
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: "bold",
                letterSpacing: "0.28em",
                color: accent === "#A3BB13" ? "#01528C" : "#A3BB13",
                textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif",
              }}
            >
              {tag}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Panel de texto */}
      <Box
        sx={{
          order: { xs: 1, md: isEven ? 1 : 0 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 5 },
          position: "relative",
        }}
      >
        {/* Acento lateral */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            ...(isEven ? { left: 0 } : { right: 0 }),
            transform: "translateY(-50%)",
            width: 3,
            height: "35%",
            background: accent,
            borderRadius: 4,
          }}
        />

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: "bold",
            letterSpacing: "0.38em",
            color: "#A3BB13",
            textTransform: "uppercase",
            mb: 2,
            fontFamily: "'Jost', sans-serif",
          }}
        >
          {tag}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 26, md: 32 },
            fontWeight: 600,
            color: "#01528C",
            lineHeight: 1.1,
            mb: 2.5,
            fontFamily: "'Jost', sans-serif",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: 28,
              height: 2,
              background: "#01528C",
              borderRadius: 1,
              opacity: 0.8,
            }}
          />
          <Box
            sx={{ width: 44, height: 3, background: accent, borderRadius: 1 }}
          />
          <Box
            sx={{
              width: 28,
              height: 2,
              background: "#01528C",
              borderRadius: 1,
              opacity: 0.8,
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: "bold",
              color: "rgba(1,82,140,0.85)",
              lineHeight: 1.9,
              fontFamily: "'Jost', sans-serif",
              maxWidth: 400,
            }}
          >
            {body}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const About = () => (
  <>
    <link
      href='https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600&display=swap'
      rel='stylesheet'
    />

    <Box
      sx={{
        background: "#f6f6f6",
        px: { xs: 3, md: 8, lg: 14 },
        py: { xs: 8, md: 14 },
        fontFamily: "'Jost', sans-serif",
      }}
    >
      {/* ── HEADER ── */}
      <Box sx={{ textAlign: "center", maxWidth: 640, mx: "auto", mb: 10 }}>
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: "bold",
            letterSpacing: "0.4em",
            color: "#A3BB13",
            textTransform: "uppercase",
            mb: 2,
            fontFamily: "'Jost', sans-serif",
          }}
        >
          Experiencias por México
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 30, md: 44 },
            fontWeight: 600,
            color: "#01528C",
            lineHeight: 1.1,
            mb: 1,
            fontFamily: "'Jost', sans-serif",
          }}
        >
          Conectamos personas con
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 26, md: 38 },
            fontWeight: 300,
            color: "#A3BB13",
            lineHeight: 1.2,
            mb: 3,
            fontFamily: "'Jost', sans-serif",
          }}
        >
          experiencias inolvidables
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: 28,
              height: 2,
              background: "#01528C",
              borderRadius: 1,
              opacity: 0.9,
            }}
          />
          <Box
            sx={{
              width: 52,
              height: 3,
              background: "#A3BB13",
              borderRadius: 1,
            }}
          />
          <Box
            sx={{
              width: 28,
              height: 2,
              background: "#01528C",
              borderRadius: 1,
              opacity: 0.9,
            }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: 19,
            fontWeight: "bold",
            color: "rgba(1,82,140,0.9)",
            lineHeight: 1.85,
            fontFamily: "'Jost', sans-serif",
          }}
        >
          Somos una empresa comprometida con ofrecer servicios de transporte
          privado y experiencias turísticas seguras, eficientes y memorables,
          mostrando la riqueza cultural y natural de México.
        </Typography>
      </Box>

      {/* ── CARDS ── */}
      {cards.map((card, i) => (
        <AboutCard key={i} {...card} index={i} />
      ))}

      {/* ── FRANJA DE ESTADÍSTICAS ── */}
      <Box
        sx={{
          mt: 8,
          borderRadius: "20px",
          background: "#01528C",
          px: { xs: 4, md: 8 },
          py: { xs: 5, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {[
          { value: "+8", label: "Años de experiencia" },
          { value: "+500", label: "Viajes realizados" },
          { value: "+50", label: "Destinos en México" },
          { value: "100%", label: "Clientes satisfechos" },
        ].map((stat, i) => (
          <Box
            key={i}
            sx={{
              textAlign: "center",
              flex: 1,
              borderRight: {
                md: i < 3 ? "1px solid rgba(255,255,255,0.10)" : "none",
              },
              px: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 38, md: 44 },
                fontWeight: 600,
                color: "#A3BB13",
                lineHeight: 1,
                mb: 0.5,
                fontFamily: "'Jost', sans-serif",
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: "bold",
                color: "rgba(255,255,255,0.95)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif",
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </>
);

export default About;
