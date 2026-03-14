import { Box, Typography } from "@mui/material";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import OutletIcon from "@mui/icons-material/Outlet";
const benefits = [
  {
    label: "Casetas y peajes",
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <rect
          x='2'
          y='8'
          width='20'
          height='12'
          rx='2'
          stroke='#01528C'
          strokeWidth='1.8'
        />
        <path
          d='M8 8V6a4 4 0 018 0v2'
          stroke='#01528C'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
        <circle cx='12' cy='14' r='2' fill='#A3BB13' />
      </svg>
    ),
  },
  {
    label: "Gasolina y viáticos",
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <path
          d='M4 22V6a2 2 0 012-2h8a2 2 0 012 2v4h1a2 2 0 012 2v4a2 2 0 01-2 2h-1v4'
          stroke='#01528C'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
        <rect
          x='7'
          y='8'
          width='5'
          height='4'
          rx='1'
          fill='#A3BB13'
          opacity='0.7'
        />
      </svg>
    ),
  },
  {
    label: "Operador especializado",
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <circle cx='12' cy='8' r='4' stroke='#01528C' strokeWidth='1.8' />
        <path
          d='M4 20c0-4 3.6-7 8-7s8 3 8 7'
          stroke='#01528C'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
        <path
          d='M16 6l1.5 1.5L20 5'
          stroke='#A3BB13'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    label: "Internet inalámbrico",
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <path
          d='M2 9C6 5 18 5 22 9'
          stroke='#01528C'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
        <path
          d='M5 12.5C8 10 16 10 19 12.5'
          stroke='#01528C'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
        <path
          d='M8.5 16C10 14.5 14 14.5 15.5 16'
          stroke='#01528C'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
        <circle cx='12' cy='19' r='1.5' fill='#A3BB13' />
      </svg>
    ),
  },
  {
    label: "Rastreo satelital",
    icon: <SatelliteAltIcon sx={{ color: "#01528c" }} />,
  },
  {
    label: "Seguro de viajero",
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <path
          d='M12 2L4 6v6c0 5.5 3.5 9 8 10 4.5-1 8-4.5 8-10V6L12 2z'
          stroke='#01528C'
          strokeWidth='1.8'
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
    ),
  },
  {
    label: "Cinturones de seguridad",
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <circle cx='12' cy='12' r='9' stroke='#01528C' strokeWidth='1.8' />
        <path
          d='M12 7v5l3 3'
          stroke='#A3BB13'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 12h8'
          stroke='#01528C'
          strokeWidth='1.5'
          strokeLinecap='round'
          opacity='0.4'
        />
      </svg>
    ),
  },
  {
    label: "Aire acondicionado",
    icon: (
      <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
        <rect
          x='2'
          y='6'
          width='20'
          height='8'
          rx='3'
          stroke='#01528C'
          strokeWidth='1.8'
        />
        <path
          d='M6 18l1-4M12 18v-4M18 18l-1-4'
          stroke='#A3BB13'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
        <path
          d='M6 10h12'
          stroke='#01528C'
          strokeWidth='1.5'
          strokeLinecap='round'
          opacity='0.4'
        />
      </svg>
    ),
  },
  {
    label: "Toma de corriente",
    icon: <OutletIcon sx={{ color: "#01528c" }} />,
  },
];

const BenefitChip = ({ label, icon }) => (
  <Box
    sx={{
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      mx: 1.5,
      px: 2.5,
      py: 1.5,
      borderRadius: "12px",
      background: "#ffffff",
      border: "1.5px solid rgba(1,82,140,0.10)",
      boxShadow: "0 2px 10px rgba(1,82,140,0.05)",
      transition: "border-color 0.3s, box-shadow 0.3s",
      cursor: "default",
      "&:hover": {
        borderColor: "#A3BB13",
        boxShadow: "0 4px 16px rgba(163,187,19,0.15)",
      },
    }}
  >
    <Box
      sx={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: "rgba(1,82,140,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {icon}
    </Box>
    <Typography
      sx={{
        fontSize: 13,
        fontWeight: 400,
        color: "#01528C",
        whiteSpace: "nowrap",
        fontFamily: "'Jost', sans-serif",
      }}
    >
      {label}
    </Typography>
  </Box>
);

const BenefitsMarquee = () => (
  <Box sx={{ mb: 5 }}>
    <Typography
      sx={{
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: "0.2em",
        color: "rgba(1,82,140,0.6)",
        textTransform: "uppercase",
        fontFamily: "'Jost', sans-serif",
        mb: 2,
      }}
    >
      Tu viaje incluye
    </Typography>

    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 1,
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          width: 80,
          zIndex: 2,
          pointerEvents: "none",
        },
        "&::before": {
          left: 0,
          background: "linear-gradient(to right, #f6f6f6, transparent)",
        },
        "&::after": {
          right: 0,
          background: "linear-gradient(to left, #f6f6f6, transparent)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "benefits-scroll 28s linear infinite",
          "&:hover": { animationPlayState: "paused" },
          "@keyframes benefits-scroll": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
          },
        }}
      >
        {[...benefits, ...benefits].map((b, i) => (
          <BenefitChip key={i} {...b} />
        ))}
      </Box>
    </Box>

    <style>{`
      @keyframes benefits-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `}</style>
  </Box>
);

export default BenefitsMarquee;
