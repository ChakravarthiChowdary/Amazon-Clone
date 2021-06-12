import { AnyAction } from "redux";

const initialState = {
  basketItems: [],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
