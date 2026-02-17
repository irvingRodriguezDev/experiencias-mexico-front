import { GET_ALL_TOURS, GET_CURRENT_TOUR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_TOURS:
      return {
        ...state,
        tours: action.payload.tours,
        ErrorsApi: [],
      };

    case GET_CURRENT_TOUR:
      return {
        ...state,
        success: true,
        tour: action.payload,
      };
    default:
      return state;
  }
};
