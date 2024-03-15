import { create } from "zustand";


type UserState = {
  userId: string;
  setUserId:(userId:string)=>void
};
const userStore = create<UserState>()((set) => ({
  userId: "",
  setUserId:(userId)=>set({userId})
}));


export default userStore