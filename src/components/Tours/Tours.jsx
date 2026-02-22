import { Box, Grid, Typography } from "@mui/material";
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
    // limpiamos cualquier debounce anterior
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

    // cleanup SIEMPRE
    return () => clearTimeout(debounceRef.current);
  }, [search, page]);

  /* =====================
     🔍 MODAL DATA
  ===================== */
  const handleOpen = async (tour) => {
    setOpen(true);
    setLoading(true);

    try {
      const { data } = await MethodGet(`/tours/slug/${tour.slug}`);
      setSelectedTour(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={2} sx={{ bgcolor: "#F4F4F5" }}>
      <Box sx={{ backgroundColor: "#F4F4F5", p: 4 }}>
        <Grid size={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <img src={avion} />
        </Grid>
        <Grid size={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <img src={piramides} />
        </Grid>
        <Typography
          textAlign='center'
          fontSize='40px'
          fontWeight='bold'
          color='#01528C'
          sx={{ mt: -30 }}
        >
          Algo Increíble Te Espera
        </Typography>

        {/* 🔍 BUSCADOR */}
        <SearchComponent
          value={search}
          onChange={(value) => {
            setSearch(value);
            setPage(1); // reset page cuando se busca
          }}
          title='Encuentra tu próximo viaje'
          placeholder='Playa, Europa, aventura...'
        />

        {/* 🎒 TOURS */}
        <Grid container spacing={3}>
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
              <Typography align='center' color='text.secondary'>
                No se encontraron tours 😕
              </Typography>
            </Grid>
          )}
        </Grid>

        {/* 📄 PAGINACIÓN (SOLO SIN BÚSQUEDA) */}
        {!search && pages > 1 && (
          <Box sx={{ mt: 4 }}>
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
      <Grid
        size={12}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          bgcolor: "#F4F4F5",
        }}
      >
        <img src={volcan} />
      </Grid>
    </Grid>
  );
};

export default Tours;
