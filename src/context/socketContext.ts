import { createContext } from "react";

import type { Socket } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);

export default SocketContext;
