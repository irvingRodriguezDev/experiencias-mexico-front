import React, { useReducer } from "react";
import MethodGet, { MethodDelete, MethodPost } from "../../config/Service";
import Swal from "sweetalert2";
import ToursReducer from "./ToursReducer";
import ToursContext from "./ToursContext";
import { GET_ALL_TOURS, GET_CURRENT_TOUR } from "../../types";
const ToursState = ({ children }) => {
  const initialState = {
    tours: [],
    ErrorsApi: [],
  };
  const [state, dispatch] = useReducer(ToursReducer, initialState);

  const getAllTours = () => {
    let url = "/tours";
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: GET_ALL_TOURS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "ocurrio un error al obtener las lineas");
      });
  };

  const getCurrentTour = (id) => {
    let url = `/tours/${id}`;
    MethodGet(url)
      .then((res) => {
        dispatch({
          type: GET_CURRENT_TOUR,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "ocurrio un error al obtener el curso");
      });
  };

  return (
    <ToursContext.Provider
      value={{
        tours: state.tours,
        getAllTours,
        getCurrentTour,
      }}
    >
      {children}
    </ToursContext.Provider>
  );
};

export default ToursState;
