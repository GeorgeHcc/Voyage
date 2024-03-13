import React, { useEffect, ReactNode } from "react";
import SocketContext from "@/context/socketContext";
import { io } from "socket.io-client";

const SocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const socket = io(import.meta.env.VITE_SOCKET_URL);
  useEffect(() => {
    socket.emit("connection");
    socket.connect() && console.log("socket 已连接");
    return () => {
      socket.disconnect() && console.log("socket 已断开连接");
    };
  });
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
