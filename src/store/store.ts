import { combineReducers, createStore } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import reducer from "./reducer";

const rootReducer = combineReducers({
  data: reducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
