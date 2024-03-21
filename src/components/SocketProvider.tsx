import React, { useEffect, ReactNode, useState } from "react";

// import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import getUserInfo from "@/utils/getUserInfo";
import SocketContext from "@/context/socketContext";
import { message } from "antd";
import useMessageStore from "@/store/modules/messageStore";
// const SocketContext = createContext<Socket | null>(null);

const SocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const socket = io(import.meta.env.VITE_SOCKET_URL);
  // const [receivedMsg,setReceivedMsg]=useState()
  const cacheMessage=useMessageStore(state=>state.cacheMessage)
  useEffect(() => {
    // socket.emit("connect");
    socket.emit("online", getUserInfo(["id"]));
    socket.connect() && console.log("socket 已连接");
    socket.on("receive-msg", (msgs) => {
      message.info(`来自${msgs.from}消息:${msgs.msg}`)
      cacheMessage(msgs);
    });
    return () => {
      socket.disconnect() && console.log("socket 已断开连接");
    };
  });
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
