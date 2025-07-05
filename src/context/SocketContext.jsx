// import React, { createContext, useContext, useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import { useApi } from './ApiContext';

// const SocketContext = createContext();

// export const useSocket = () => {
//     const context = useContext(SocketContext);
//     if (!context) {
//         throw new Error('useSocket must be used within a SocketProvider');
//     }
//     return context;
// };

// export const SocketProvider = ({ children }) => {
//     const { API_URL } = useApi();
//     const [socket, setSocket] = useState(null);
//     const [isConnected, setIsConnected] = useState(false);
//     const [connectionError, setConnectionError] = useState(null);

//     useEffect(() => {
//         // Get token from cookie
//         const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
        
//         if (token) {
//             // Initialize socket connection
//             const newSocket = io(API_URL, {
//                 auth: { token },
//                 transports: ['websocket', 'polling'],
//                 reconnection: true,
//                 reconnectionAttempts: 5,
//                 reconnectionDelay: 1000,
//                 timeout: 10000
//             });

//             // Socket event handlers
//             newSocket.on('connect', () => {
//                 console.log('Connected to socket server');
//                 setIsConnected(true);
//                 setConnectionError(null);
//             });

//             newSocket.on('connect_error', (error) => {
//                 console.error('Socket connection error:', error);
//                 setIsConnected(false);
//                 setConnectionError(error.message);
//             });

//             newSocket.on('disconnect', (reason) => {
//                 console.log('Disconnected from socket server:', reason);
//                 setIsConnected(false);
//             });

//             newSocket.on('error', (error) => {
//                 console.error('Socket error:', error);
//                 setConnectionError(error.message);
//             });

//             setSocket(newSocket);

//             // Cleanup on unmount
//             return () => {
//                 if (newSocket) {
//                     newSocket.disconnect();
//                 }
//             };
//         } else {
//             console.error('No authentication token found');
//             setConnectionError('Authentication token not found');
//         }
//     }, [API_URL]);

//     const value = {
//         socket,
//         isConnected,
//         connectionError
//     };

//     return (
//         <SocketContext.Provider value={value}>
//             {children}
//         </SocketContext.Provider>
//     );
// }; 


import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
// import { SOCKET_URL } from "../config";
// const SOCKET_URL = "http://localhost:5000"
const SOCKET_URL = "https://haus.menthealventures.com"

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
//   const { userdata, authUser } = useContext(AuthContext);
//   const userId = userdata?.userdata?._id;
//   console.log("useridis",userId)
const [isConnected,setIsConnected] = useState(false)
  const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

  useEffect(() => {
    if (token) {
      const socket = io(SOCKET_URL, {
        query: { token },
      });
      setSocket(socket);
      setIsConnected(true)

      return () => socket.close();
    } else if (socket) {
      socket.close();
      setSocket(null);
    }
  }, [token]); // Include userId and authUser as dependencies

  return (
    <SocketContext.Provider value={{ socket, setSocket,isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};