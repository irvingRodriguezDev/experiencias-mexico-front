import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import avion from "../../assets/avion.webp";
import piramides from "../../assets/piramides.webp";
import volcan from "../../assets/volcan.webp";
import ToursContext from "../../context/Tours/ToursContext";
import TourCard from "./TourCard";
import TourDetailModal from "./TourDetailModal";
import Pagination from "../Pagination/Pagination";
import SearchComponent from "../Search/Search";
import MethodGet from "../../config/Service";
import TourSkeleton from "./TourSkeleton";

const DEBOUNCE_TIME = 500;

const Tours = () => {
  const { tours, pages, loading, getAllTours } = useContext(ToursContext);

  /* =====================
     🔍 BUSCADOR + PAGINA
  ===================== */
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  /* =====================
     ⏳ DEBOUNCE REF
  ===================== */
  const debounceRef = useRef(null);

  /* =====================
     📌 MODAL
  ===================== */
  const [open, setOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  /* =====================
     📡 FETCH TOURS (DEBOUNCE)
  ===================== */
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams();

      if (search) {
        params.append("search", search);
      } else {
        params.append("page", page);
        params.append("limit", 9);
      }

      getAllTours(params.toString());
    }, DEBOUNCE_TIME);

    return () => clearTimeout(debounceRef.current);
  }, [search, page]);

  /* =====================
     🔍 MODAL DATA
  ===================== */
  const handleOpen = async (tour) => {
    setOpen(true);
    try {
      const { data } = await MethodGet(`/tours/slug/${tour.slug}`);
      setSelectedTour(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // 🛠️ Cambiamos el Grid exterior por un Box para evitar conflictos de layouts anidados
    <Box sx={{ bgcolor: "#F4F4F5", width: "100%", minHeight: "100vh" }}>
      <Box sx={{ p: 4 }}>
        {/* Imágenes decorativas superiores */}
        <Grid container justifyContent='flex-end'>
          <Grid size={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <img src={avion} alt='Avion' />
          </Grid>
          <Grid size={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <img src={piramides} alt='Piramides' />
          </Grid>
        </Grid>

        <Typography
          textAlign='center'
          fontSize='40px'
          fontWeight='bold'
          color='#01528C'
          sx={{ mt: -30, mb: 4, position: "relative", zIndex: 1 }}
        >
          Algo Increíble Te Espera
        </Typography>

        {/* 🔍 BUSCADOR */}
        <Grid container sx={{ mb: 6 }}>
          <Grid size={12}>
            <SearchComponent
              value={search}
              onChange={(value) => {
                setSearch(value);
                setPage(1);
              }}
              title='Encuentra tu próximo viaje'
              placeholder='Playa, Acapulco, Cancun, Aventura...'
            />
          </Grid>
        </Grid>

        {/* 🎒 TOURS (GRID PRINCIPAL) */}
        {/* 🛠️ Añadimos justifyContent="center" para balancear filas incompletas si es necesario */}
        <Grid container spacing={3} justifyContent='flex-start'>
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <TourSkeleton />
              </Grid>
            ))
          ) : tours.length > 0 ? (
            tours.map((tour) => (
              <Grid key={tour.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <TourCard tour={tour} onOpen={() => handleOpen(tour)} />
              </Grid>
            ))
          ) : (
            <Grid size={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  py: 6,
                  px: 3,
                  mx: "auto",
                  maxWidth: "500px",
                  background: "#ffffff",
                  borderRadius: "20px",
                  border: "1.5px solid rgba(1,82,140,0.06)",
                  // Mantenemos una sombra sumamente sutil para no romper el look plano
                  boxShadow: "0 4px 20px rgba(1,82,140,0.03)",
                  mt: 2,
                }}
              >
                {/* Título Premium en tu azul institucional */}
                <Typography
                  variant='h6'
                  sx={{
                    color: "#01528C",
                    fontWeight: 600,
                    fontSize: "20px",
                    mb: 1,
                  }}
                >
                  No encontramos coincidencias
                </Typography>

                {/* Mensaje descriptivo secundario */}
                <Typography
                  variant='body2'
                  sx={{
                    color: "text.secondary",
                    maxWidth: "360px",
                    mb: 3,
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  No logramos encontrar tours para "
                  <Box
                    component='span'
                    sx={{ fontWeight: 600, color: "#01528C" }}
                  >
                    {search}
                  </Box>
                  ". Intenta buscando otro destino o palabra clave.
                </Typography>

                {/* Botón de acción plano y limpio para reajustar la búsqueda */}
                <Button
                  variant='contained'
                  onClick={() => {
                    setSearch("");
                    setPage(1);
                  }}
                  sx={{
                    background: "rgba(1,82,140,0.08)",
                    color: "#01528C",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "10px",
                    px: 3,
                    py: 1,
                    boxShadow: "none",
                    "&:hover": {
                      background: "rgba(1,82,140,0.15)",
                      boxShadow: "none",
                    },
                  }}
                >
                  Ver todos los tours
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>

        {/* 📄 PAGINACIÓN (SOLO SIN BÚSQUEDA) */}
        {!search && pages > 1 && (
          <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
            <Pagination
              currentPage={page}
              totalPages={pages}
              onPageChange={setPage}
            />
          </Box>
        )}

        {/* MODAL */}
        <TourDetailModal
          open={open}
          onClose={() => setOpen(false)}
          tour={selectedTour}
          loading={loading}
        />
      </Box>

      {/* Imagen decorativa inferior */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          mt: 4,
        }}
      >
        <Grid size={12}>
          <img src={volcan} alt='Volcan' />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tours;
