import socketio from "socket.io-client";
import { createContext, React, useContext, useEffect, useState } from 'react';
import { WSS_END_POINT } from "config/env";

export const SocketContext = createContext({});

function SocketProvider({ children }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const ws = new WebSocket(WSS_END_POINT);

    ws.onopen = () => {
      console.log("Connection Established!");
    };
    ws.onmessage = (message) => {
      console.log(JSON.parse(message.data));
      setData(JSON.parse(message.data).data)
      //ws.close();
    };
    ws.onclose = () => {
      console.log("Connection Closed!");
      //initWebsocket();
    };

    ws.onerror = () => {
      console.log("WS Error");
    };

    return () => {
      ws.close();
    };
  }, [])

  
  return (
    <SocketContext.Provider
      value={{
        data
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export default SocketProvider;
