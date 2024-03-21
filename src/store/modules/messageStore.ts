import { create } from "zustand";
import { ReceivedMsg } from "@/views/messages/RightContainer";
import { produce } from "immer";


type MessageState = {
  messages: Map<string, ReceivedMsg[]>;
  totalMessage: number;
  friendList:[];
  cacheMessage: (msg: ReceivedMsg) => void; //缓存消息（未读）
  consumeMessage: (key: ReceivedMsg["from"]) => void; //消费消息（已读）
  increment: () => void;
  decrement: (num: number) => void;
  
};
const useMessageStore = create<MessageState>()((set, get) => ({
  messages: new Map(),
  totalMessage: 0,
  friendList:[],
  cacheMessage: (msg) =>
    //@ts-ignore
    set((state) => {
      const pre = state.messages;
      const key = msg["from"];
      get().increment();
      return {
        messages: produce(pre, (draft) => {
          if (draft.has(key)) {
            draft.get(key)!.push(msg);
          }
          draft.set(key, [msg]);
        }) as Map<string, ReceivedMsg[]>,
      };
    }),

  consumeMessage: (key) => {
    const currentState = get().messages;
    const num = currentState.get(key)?.length;
    if (num) get().decrement(num);
    //@ts-ignore
    set((state) => ({
      messages: produce(state.messages, (draft) => {
        if (draft.has(key)) {
          draft.delete(key);
        }
      }),
    }));
  },
  increment: () => set((state) => ({ totalMessage: state.totalMessage + 1 })),
  decrement: (num) => set((state) => ({ totalMessage: state.totalMessage - num })),
}));

export default useMessageStore;
