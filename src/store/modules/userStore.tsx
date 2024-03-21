import { create } from "zustand";
// import { produce } from "immer";
import type { ChatListItemData } from "@/views/messages/LeftContainer/ChatListItem";
type UserState = {
  userId: string;
  friendList: ChatListItemData[];
  setUserId: (userId: string) => void;
  setFriendList: (friends: ChatListItemData[]) => void;
};
const userStore = create<UserState>()((set) => ({
  userId: "",
  friendList: [],
  setUserId: (userId) => set({ userId }),
  setFriendList: (friends) => set({ friendList: [...friends] }),
}));

export default userStore;
