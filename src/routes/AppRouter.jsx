import { Routes, Route, Navigate } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { Box, Grid } from "@mui/material";

import Home from "../containers/Home/Home";
function AppRouter({}) {
  //   if (cargando) {
  //     return (
  //       <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
  //         <Box
  //           sx={{
  //             width: "105%",
  //             height: "177%",
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           cargando
  //         </Box>
  //       </Grid>
  //     );
  //   }
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicRoute isAuthenticated={false} />}>
        <Route path='/' element={<Home />} />
      </Route>

      {/* Ruta por defecto */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default AppRouter;
