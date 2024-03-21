import { create } from "zustand";

type meetingState = {
  stream: MediaStream | null;
  setStream: (stream: MediaStream) => void;
};
const meetingStore = create<meetingState>()((set) => ({
  stream: null,
  setStream: (stream) => set({ stream: stream }),
}));

export default meetingStore;
