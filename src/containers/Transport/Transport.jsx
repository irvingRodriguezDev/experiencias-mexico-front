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
import clienteAxios from "../../config/Axios";
import { MethodPost } from "../../config/Service";
import Swal from "sweetalert2";
import SuccessView from "./SuccessView";

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

const QuoteForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [typeUnit, setTypeUnit] = useState(null);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleTipoViaje = (val) =>
    setForm((prev) => ({ ...prev, tipoViaje: val }));

  const handleSubmit = async () => {
    const fechaCombinada = new Date(`${form.fechaInicio} ${form.horaInicio}`);
    const tieneFechaFin = form.fechaFin && form.horaFin;

    // 2. Creamos la fecha solo si los datos están presentes
    const fechaCombinadaFin = tieneFechaFin
      ? new Date(`${form.fechaFin} ${form.horaFin}`)
      : null;

    // 3. Validamos si la fecha resultante es válida antes de convertirla a ISO
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

    // Conecta tu API aquí:
    // 1. Mostrar Spinner de carga inmediatamente
    Swal.fire({
      title: "Procesando cotización...",
      text: "Por favor espera un momento",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading(); // Esto activa el spinner oficial de SweetAlert2
      },
    });

    try {
      const url = "/quotation";
      const res = await MethodPost(url, data);

      // 2. Si la respuesta es exitosa (Status 200 o 201)
      if (res.status === 200 || res.status === 201) {
        Swal.fire({
          title: "¡Exitoso!",
          text: "Tu cotización se ha creado con éxito, en breve nuestro equipo se contactará contigo.",
          icon: "success",
          timer: 3500,
          showConfirmButton: false,
        });

        setSubmitted(true);
        // Aquí podrías resetear el formulario si es necesario
      }
    } catch (error) {
      // 3. Manejo de errores con fallback por si el servidor no envía mensaje
      const errorMessage =
        error.response?.data?.message ||
        "No pudimos procesar tu solicitud en este momento.";

      Swal.fire({
        title: "Ocurrió un problema",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#01528C", // Usando tu azul corporativo
      });
    }
    // console.log("Payload →", form);
  };

  if (submitted)
    return (
      <SuccessView
        contractorName={form.nombre}
        onReset={() => {
          setForm(initialForm);
          setSubmitted(false);
        }}
      />
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
              <RouteSection
                form={form}
                setForm={setForm}
                onChange={handleChange}
                setTypeUnit={setTypeUnit}
                typeUnit={typeUnit}
              />
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
