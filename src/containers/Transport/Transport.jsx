import { Box, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";
import QuoteHeader from "./QuoteHeader";
import TripTypeSection from "./TripTypeSection";
import ContactSection from "./ContactSection";
import RouteSection from "./RouteSection";
import ScheduleSection from "./ScheduleSection";
import DescriptionSection from "./DescriptionSection";
import BenefitsMarquee from "./BenefitsMarquee";
import SubmitSection from "./SubmitSection";
import MainLayout from "../../components/Layout/Layout";

const initialForm = {
  tipoViaje: "sencillo",
  nombre: "",
  telefono: "",
  correo: "",
  origen: "",
  destino: "",
  tipoUnidad: "",
  fechaInicio: "",
  horaInicio: "",
  fechaFin: "",
  horaFin: "",
  descripcion: "",
};

const QuoteForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleTipoViaje = (val) =>
    setForm((prev) => ({ ...prev, tipoViaje: val }));

  const handleSubmit = async () => {
    // Conecta tu API aquí:
    // await fetch("https://tu-api.com/cotizaciones", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    console.log("Payload →", form);
    setSubmitted(true);
  };

  if (submitted)
    return (
      <Box
        sx={{
          width: "100%",
          background: "#f6f6f6",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
          fontFamily: "'Jost', sans-serif",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: 480 }}>
          <Box
            sx={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "rgba(163,187,19,0.12)",
              border: "2px solid #A3BB13",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 3,
            }}
          >
            <svg width='28' height='28' viewBox='0 0 28 28' fill='none'>
              <path
                d='M5 14l6 6L23 8'
                stroke='#A3BB13'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Box>
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 600,
              color: "#01528C",
              mb: 1,
              fontFamily: "'Jost', sans-serif",
            }}
          >
            ¡Solicitud enviada!
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 300,
              color: "rgba(1,82,140,0.6)",
              lineHeight: 1.8,
              mb: 4,
              fontFamily: "'Jost', sans-serif",
            }}
          >
            Hemos recibido tu solicitud. En breve nos comunicaremos contigo vía
            WhatsApp y correo electrónico.
          </Typography>
          <Button
            onClick={() => {
              setForm(initialForm);
              setSubmitted(false);
            }}
            sx={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#01528C",
              border: "1.5px solid #01528C",
              borderRadius: "10px",
              px: 4,
              py: 1.4,
              transition: "all 0.3s",
              "&:hover": { background: "#01528C", color: "#fff" },
            }}
          >
            Nueva cotización
          </Button>
        </Box>
      </Box>
    );

  return (
    <MainLayout>
      <link
        href='https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600&display=swap'
        rel='stylesheet'
      />

      <Grid
        container
        spacing={2}
        sx={{
          background: "#f6f6f6",
          px: { xs: 3, md: 8, lg: 14 },
          py: { xs: 8, md: 12 },
          fontFamily: "'Jost', sans-serif",
        }}
      >
        <Grid size={12} sx={{ mt: 4 }}>
          <QuoteHeader />
        </Grid>

        <Grid size={12}>
          <Box
            sx={{
              mx: "auto",
              background: "#ffffff",
              borderRadius: "24px",
              border: "1.5px solid rgba(1,82,140,0.08)",
              boxShadow: "0 8px 40px rgba(1,82,140,0.07)",
              overflow: "hidden",
            }}
          >
            {/* Franja degradado superior */}
            <Box
              sx={{
                height: 4,
                background: "linear-gradient(90deg, #01528C, #A3BB13)",
              }}
            />

            <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 4, md: 6 } }}>
              <TripTypeSection
                value={form.tipoViaje}
                onChange={handleTipoViaje}
              />
              <ContactSection form={form} onChange={handleChange} />
              <RouteSection form={form} onChange={handleChange} />
              <ScheduleSection form={form} onChange={handleChange} />
              <BenefitsMarquee />
              <DescriptionSection
                value={form.descripcion}
                onChange={handleChange}
              />
              <SubmitSection onSubmit={handleSubmit} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default QuoteForm;
