import { AnyAction } from "redux";

import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./actions";

interface StateType {
  basketItems: {
    id: string;
    title: string;
    price: string;
    rating: number;
    image: string;
  }[];
}

const initialState: StateType = {
  basketItems: [],
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
    default:
      return state;
  }
};

export default reducer;
