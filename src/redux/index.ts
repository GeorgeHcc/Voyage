import { configureStore } from "@reduxjs/toolkit"
import roomReducer from "./modules/room"
import { TypedUseSelectorHook, useSelector } from "react-redux"

// const peerConnetionState={
//     "new":0,
//     "connecting":1,
//     "connected":2,
//     "disconnected":3,
//     "failed":4,
//     "closed":5
// }

const store=configureStore({
    reducer:{roomReducer}
})

type IRootState=ReturnType<typeof store.getState>

export const useAppSelector:TypedUseSelectorHook<IRootState>=useSelector

export default store