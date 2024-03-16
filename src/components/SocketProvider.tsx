import React, { useEffect, ReactNode } from "react";

// import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import getUserInfo from "@/utils/getUserInfo";
import SocketContext from "@/context/socketContext";

// const SocketContext = createContext<Socket | null>(null);

const SocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const socket = io(import.meta.env.VITE_SOCKET_URL);
  useEffect(() => {
    // socket.emit("connect");
    socket.emit("online", getUserInfo(["id"]));
    socket.connect() && console.log("socket 已连接");
    return () => {
      socket.disconnect() && console.log("socket 已断开连接");
    };
  });
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
