import {
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import QuoteHeader from "./QuoteHeader";
import TripTypeSection from "./TripTypeSection";
import ContactSection from "./ContactSection";
import RouteSection from "./RouteSection";
import ScheduleSection from "./ScheduleSection";
import DescriptionSection from "./DescriptionSection";
import BenefitsMarquee from "./BenefitsMarquee";
import MainLayout from "../../components/Layout/Layout";
import { MethodPost } from "../../config/Service";
import Swal from "sweetalert2";
import SuccessView from "./SuccessView";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const initialForm = {
  tipoViaje: "one_way",
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

// Pasos del Stepper
const steps = [
  "Tipo de Viaje",
  "Ruta y Unidad",
  "Fechas y Horarios",
  "Datos de Contacto y Detalles",
];

const QuoteForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [typeUnit, setTypeUnit] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleTipoViaje = (val) =>
    setForm((prev) => ({ ...prev, tipoViaje: val }));

  // --- VALIDACIONES POR PASO ---
  const validateStep = (step) => {
    let requiredFields = [];

    switch (step) {
      case 0: // Tipo de viaje
        requiredFields = [{ key: "tipoViaje", label: "Tipo de Viaje" }];
        break;
      case 1: // Ruta y Unidad
        requiredFields = [
          { key: "origen", label: "Origen" },
          { key: "destino", label: "Destino" },
          { key: "tipoUnidad", label: "Tipo de Unidad" },
        ];
        break;
      case 2: // Fechas y Horarios
        requiredFields = [
          { key: "fechaInicio", label: "Fecha de Salida" },
          { key: "horaInicio", label: "Hora de Salida" },
        ];
        if (form.tipoViaje === "round_trip") {
          requiredFields.push(
            { key: "fechaFin", label: "Fecha de Regreso" },
            { key: "horaFin", label: "Hora de Regreso" }
          );
        }
        break;
      case 3: // Contacto y Descripción
        requiredFields = [
          { key: "nombre", label: "Nombre" },
          { key: "telefono", label: "Teléfono" },
          { key: "correo", label: "Correo" },
          { key: "descripcion", label: "Descripción" },
        ];
        break;
      default:
        break;
    }

    for (const field of requiredFields) {
      if (!form[field.key] || form[field.key].toString().trim() === "") {
        Swal.fire({
          title: "Atención",
          text: `El campo "${field.label}" es obligatorio para continuar.`,
          icon: "warning",
          confirmButtonText: "Entendido",
          confirmButtonColor: "#01528C",
        });
        return false;
      }
    }

    // Validar Email únicamente en el último paso
    if (step === 3) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.correo)) {
        Swal.fire({
          title: "Atención",
          text: "Por favor, ingresa un correo electrónico válido.",
          icon: "warning",
          confirmButtonText: "Corregir",
          confirmButtonColor: "#01528C",
        });
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      window.scrollTo({ top: 200, behavior: "smooth" }); // Feedback visual para móviles
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    const fechaCombinada = new Date(`${form.fechaInicio} ${form.horaInicio}`);
    const tieneFechaFin = form.fechaFin && form.horaFin;

    const fechaCombinadaFin = tieneFechaFin
      ? new Date(`${form.fechaFin} ${form.horaFin}`)
      : null;

    const returnAtValue =
      fechaCombinadaFin && !isNaN(fechaCombinadaFin.getTime())
        ? fechaCombinadaFin.toISOString()
        : null;

    const data = {
      tripType: form.tipoViaje,
      contractorName: form.nombre,
      contractorPhone: form.telefono,
      contractorEmail: form.correo,
      origin: form.origen,
      destination: form.destino,
      unitTypeId: form.tipoUnidad,
      departureAt: fechaCombinada.toISOString(),
      returnAt: returnAtValue,
      description: form.descripcion ?? null,
    };

    Swal.fire({
      title: "Procesando cotización...",
      text: "Por favor espera un momento",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const url = "/quotation";
      const res = await MethodPost(url, data);

      if (res.status === 200 || res.status === 201) {
        Swal.fire({
          title: "¡Exitoso!",
          text: "Tu cotización se ha creado con éxito, en breve nuestro equipo se contactará contigo.",
          icon: "success",
          timer: 3500,
          showConfirmButton: false,
        });

        setSubmitted(true);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "No pudimos procesar tu solicitud en este momento.";

      Swal.fire({
        title: "Ocurrió un problema",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#01528C",
      });
    }
  };

  // Renderizado dinámico según el paso actual
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <TripTypeSection value={form.tipoViaje} onChange={handleTipoViaje} />
        );
      case 1:
        return (
          <RouteSection
            form={form}
            setForm={setForm}
            onChange={handleChange}
            setTypeUnit={setTypeUnit}
            typeUnit={typeUnit}
          />
        );
      case 2:
        return <ScheduleSection form={form} onChange={handleChange} />;
      case 3:
        return (
          <>
            <ContactSection form={form} onChange={handleChange} />
            <Box sx={{ my: 4 }}>
              <BenefitsMarquee />
            </Box>
            <DescriptionSection
              value={form.descripcion}
              onChange={handleChange}
            />
          </>
        );
      default:
        return null;
    }
  };

  if (submitted)
    return (
      <SuccessView
        contractorName={form.nombre}
        onReset={() => {
          setForm(initialForm);
          setActiveStep(0);
          setSubmitted(false);
        }}
      />
    );

  return (
    <MainLayout>
      <Grid
        container
        spacing={2}
        sx={{
          background: "#fff",
          px: { xs: 2, md: 8, lg: 14 },
          py: { xs: 4, md: 12 },
        }}
      >
        <Grid size={12} sx={{ mt: 2 }}>
          <QuoteHeader />
        </Grid>

        <Grid size={12}>
          {/* Contenedor Principal Plano */}
          <Box
            sx={{
              mx: "auto",
              background: "#ffffff",
              borderRadius: "24px",
              border: "1.5px solid rgba(1,82,140,0.08)",
              boxShadow: "0 8px 40px rgba(1,82,140,0.07)",
              // overflow: "hidden",
            }}
          >
            {/* Barra superior con degradado dinámico */}
            <Box
              sx={{
                height: 5,
                background: "linear-gradient(90deg, #01528C, #A3BB13)",
              }}
            />

            {/* Encabezado del Stepper */}
            <Box
              sx={{
                px: { xs: 2, md: 6 },
                pt: 5,
                pb: 2,
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <Stepper
                activeStep={activeStep}
                alternativeLabel={!isMobile}
                orientation={isMobile ? "vertical" : "horizontal"}
                sx={{
                  "& .MuiStepIcon-root.Mui-active": { color: "#01528C" },
                  "& .MuiStepIcon-root.Mui-completed": { color: "#A3BB13" },
                  "& .MuiStepLabel-label.Mui-active": {
                    color: "#01528C",
                    fontWeight: 600,
                  },
                  "& .MuiStepLabel-label.Mui-completed": { color: "#A3BB13" },
                }}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            {/* Cuerpo dinámico del paso activo */}
            <Box sx={{ px: { xs: 3, md: 6 }, py: { xs: 4, md: 6 } }}>
              {renderStepContent(activeStep)}

              {/* Botonera de Navegación Plana */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 6,
                  pt: 3,
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  startIcon={<ArrowBackIosNewIcon />}
                  sx={{
                    color: "#01528C",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "12px",
                    px: 3,
                    "&:disabled": { color: "#ccc" },
                  }}
                >
                  Atrás
                </Button>

                {activeStep === steps.length - 1 ? (
                  <Button
                    variant='contained'
                    onClick={handleSubmit}
                    sx={{
                      background: "#01528C",
                      color: "#ffffff",
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: "12px",
                      px: 4,
                      py: 1.5,
                      boxShadow: "none", // Manteniendo estética plana tipo app
                      "&:hover": {
                        background: "#013d6a",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Solicitar Cotización
                  </Button>
                ) : (
                  <Button
                    variant='contained'
                    onClick={handleNext}
                    endIcon={<ArrowForwardIosIcon />}
                    sx={{
                      background: "#01528C",
                      color: "#ffffff",
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: "12px",
                      px: 4,
                      py: 1.5,
                      boxShadow: "none",
                      "&:hover": {
                        background: "#013d6a",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Siguiente
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default QuoteForm;
