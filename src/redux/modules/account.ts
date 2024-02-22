import { createSlice } from "@reduxjs/toolkit";

export type IMeetingState = {
  video?: boolean;
  audio?: boolean;
};
export type AccountState={
  userId:string,
  nickName:string,
  meetingState:IMeetingState
}
const accountSlice = createSlice({
  name: "account",
  initialState: {
    userId: "",
    nickName: "",
    meetingState: {
      audio:false,
      video:true
    } as IMeetingState,
  },
  reducers: {
    changeMeetingState(state,{payload}){
      state.meetingState=payload
    }
  },
});

export const {changeMeetingState} = accountSlice.actions;
export default accountSlice.reducer;
