import { useContext } from "react";
import SocketContext from "@/context/socketContext";
function useSocket() {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socket;
}

export default useSocket;
