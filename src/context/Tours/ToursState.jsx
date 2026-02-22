import React, { useReducer } from "react";
import MethodGet from "../../config/Service";
import ToursReducer from "./ToursReducer";
import ToursContext from "./ToursContext";
import { GET_ALL_TOURS, GET_CURRENT_TOUR, LATEST_TOURS } from "../../types";

const ToursState = ({ children }) => {
  const initialState = {
    tours: [],
    total: 0,
    pages: 0,
    loading: false,
    tour: null,
    ErrorsApi: [],
  };

  const [state, dispatch] = useReducer(ToursReducer, initialState);

  /* =========================
     📄 LISTADO / BÚSQUEDA
  ========================= */
  const getAllTours = (query = "") => {
    const url = query ? `/tours?${query}` : "/tours";
    dispatch({ type: "LOADING" });
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: GET_ALL_TOURS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error("Error al obtener tours", error);
      });
  };

  /* =========================
     📌 TOUR DETALLE
  ========================= */
  const getCurrentTour = (id) => {
    MethodGet(`/tours/${id}`)
      .then((res) => {
        dispatch({
          type: GET_CURRENT_TOUR,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error("Error al obtener el tour", error);
      });
  };

  /* =========================
     🆕 ÚLTIMOS TOURS
  ========================= */
  const getLatestTours = () => {
    MethodGet("/tours/latest")
      .then((res) => {
        dispatch({
          type: LATEST_TOURS,
          payload: res.data.tours,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ToursContext.Provider
      value={{
        tours: state.tours,
        total: state.total,
        pages: state.pages,
        tour: state.tour,
        loading: state.loading,
        getAllTours,
        getCurrentTour,
        getLatestTours,
      }}
    >
      {children}
    </ToursContext.Provider>
  );
};

export default ToursState;
