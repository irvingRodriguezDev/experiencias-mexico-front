import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
          <App />
        </LocalizationProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </StrictMode>
);
