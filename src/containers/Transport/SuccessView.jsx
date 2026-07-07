import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const SuccessView = ({ onReset, contractorName }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        width: "100dvw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Un fondo con un ligero gradiente se ve más profesional
        background: "linear-gradient(180deg, #F8F9FB 0%, #F8F9FB 100%)",
        px: 3,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "100%",
          p: 6,
          bgcolor: "#fff",
          borderRadius: "24px",
          // Sombra suave para dar efecto de elevación "premium"
          boxShadow: "0 20px 40px rgba(1, 82, 140, 0.05)",
          border: "1px solid rgba(1, 82, 140, 0.03)",
        }}
      >
        {/* Icono animado */}
        <Box
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(163,187,19,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 4,
            position: "relative",
          }}
        >
          {/* Círculo decorativo exterior pulsante */}
          <Box
            component={motion.div}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "1px solid rgba(163,187,19,0.3)",
            }}
          />

          <svg width='40' height='40' viewBox='0 0 28 28' fill='none'>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              d='M5 14l6 6L23 8'
              stroke='#A3BB13'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: 24, md: 32 },
            fontWeight: 700,
            color: "#01528C",
            mb: 2,
            fontFamily: "'Jost', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          ¡Todo listo, {contractorName}!
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 300,
            color: "#64748b",
            lineHeight: 1.8,
            mb: 5,
            fontFamily: "'Jost', sans-serif",
          }}
        >
          Tu solicitud de cotización ha sido procesada. <br />
          Nuestro equipo te contactará por <b>WhatsApp</b> o <b>Email</b> en
          menos de 24 horas para finalizar los detalles.
        </Typography>

        <Button
          onClick={onReset}
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          sx={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            bgcolor: "#01528C",
            color: "#fff",
            borderRadius: "14px",
            px: 6,
            py: 2,
            boxShadow: "0 10px 20px rgba(1, 82, 140, 0.2)",
            transition: "all 0.3s",
            "&:hover": {
              background: "#013d69",
              boxShadow: "0 15px 25px rgba(1, 82, 140, 0.3)",
            },
          }}
        >
          Nueva cotización
        </Button>
      </Box>
    </Box>
  );
};

export default SuccessView;
