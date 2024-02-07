import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type RecordPC = Record<string, RTCPeerConnection>;

type TypedPeerConnection = RTCPeerConnection 
export interface AddPeerConnectionPayload {
  userId: string;
  peerConnection: TypedPeerConnection;
}

const peerConnectionSlice = createSlice({
  name: "rtcPeerConnection",
  initialState: {
    peerConnectionBucket: {} as RecordPC,
  },
  reducers: {
    removeConnection(state, { payload }) {
      const { userId } = payload;
      const { [userId]: removeConnction, ...linkedConnetions } = state.peerConnectionBucket;
      if (removeConnction) removeConnction.close();

      state.peerConnectionBucket = linkedConnetions; //✔遵循不可变性原则
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPeerConnection.fulfilled, (state, { payload }) => {
      const { userId, peerConnection } = payload;
      state.peerConnectionBucket[userId] = peerConnection;
    });
  },
});

export const addPeerConnection = createAsyncThunk(
  "rtcPeerConnection/addPeerConnection",
  async ({ userId, peerConnection }: AddPeerConnectionPayload) => ({ userId, peerConnection })
);
        
export const { removeConnection } = peerConnectionSlice.actions;
export default peerConnectionSlice.reducer;
