import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./modules/room";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import peerConnetionReducer from "./modules/peerConnetion";

const store = configureStore({
  reducer: { roomReducer, peerConnetionReducer },
});

type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;
