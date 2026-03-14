import { Routes, Route, Navigate } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";

import Home from "../containers/Home/Home";
import TourDetail from "../components/Tours/TourDetail";
import About from "../containers/About/About";
import Transport from "../containers/Transport/Transport";
function AppRouter({}) {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicRoute isAuthenticated={false} />}>
        <Route path='/' element={<Home />} />
        <Route path='/tour/:slug' element={<TourDetail />} />
        <Route path='/nosotros' element={<About />} />
        <Route path='/transport' element={<Transport />} />
      </Route>

      {/* Ruta por defecto */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default AppRouter;
