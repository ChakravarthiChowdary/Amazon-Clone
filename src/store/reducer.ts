import { AnyAction } from "redux";

import {
  ADD_TO_BASKET,
  LOGGED_IN,
  LOGOUT,
  REMOVE_FROM_BASKET,
} from "./actions";

interface StateType {
  basketItems: {
    id: string;
    title: string;
    price: number;
    rating: number;
    image: string;
  }[];
  user: {
    displayName: string;
    email: string;
  } | null;
}

const initialState: StateType = {
  basketItems: [],
  user: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload],
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (product) => product.id !== action.payload
        ),
      };
    case LOGGED_IN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
