import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    userId: "",
    nickName: "",
  },
  reducers: {},
});

// export const {} = accountSlice.actions;
export default accountSlice.reducer;
