import { createSlice } from "@reduxjs/toolkit";

export interface IRoomState{
    roomId:string,
    maxSupportNum:number,
    currentOnline:unknown,
    mapPeerConnection:Map<string,RTCPeerConnection>

}
const roomSlice=createSlice({
    name:"room",
    initialState:{
        roomId:'0',
        maxSupportNum:2
    },
    reducers:{
        changeMsgAction(state,{payload}){
            state.maxSupportNum=payload
        }
    }
})

export const {changeMsgAction} = roomSlice.actions
export default roomSlice.reducer