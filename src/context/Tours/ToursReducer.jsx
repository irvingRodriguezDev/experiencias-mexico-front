import { GET_ALL_TOURS, GET_CURRENT_TOUR, LATEST_TOURS } from "../../types";

const ToursReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_TOURS:
      return {
        ...state,
        tours: action.payload.tours,
        total: action.payload.total,
        pages: action.payload.pages,
        loading: false,
      };

    case LATEST_TOURS:
      return {
        ...state,
        latest_tours: action.payload,
        ErrorsApi: [],
      };

    case GET_CURRENT_TOUR:
      return {
        ...state,
        tour: action.payload,
      };

    default:
      return state;
  }
};

export default ToursReducer;
