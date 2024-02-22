import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import roomReducer from "./modules/room";
import peerConnetionReducer from "./modules/peerConnetion";
import accountReducer from "./modules/account";
const store = configureStore({
  reducer: { accountReducer, roomReducer, peerConnetionReducer },
});

type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;
