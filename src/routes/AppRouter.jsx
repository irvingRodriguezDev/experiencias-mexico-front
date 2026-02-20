import { Routes, Route, Navigate } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";

import Home from "../containers/Home/Home";
import TourDetail from "../components/Tours/TourDetail";
function AppRouter({}) {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicRoute isAuthenticated={false} />}>
        <Route path='/' element={<Home />} />
        <Route path='/tour/:slug' element={<TourDetail />} />
      </Route>

      {/* Ruta por defecto */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default AppRouter;
