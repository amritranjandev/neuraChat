import { Server } from 'socket.io';
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
    }
});


export function getReceiverSocketId(userId) {
    return userSocketMap[userId]; // Retrieve the socket ID for the given user ID
}

// used to store online users
const userSocketMap = {};

io.on("connection", (socket) => {
    console.log("New client connected", socket.id);
    const userId = socket.handshake.query.userId; // Get userId from the query parameters
    if (userId) {
        userSocketMap[userId] = socket.id; // Store the socket ID for the user
    }
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Emit the list of online users to all clients

    socket.on("disconnect", () => {
        console.log("Client disconnected", socket.id);
        // Remove the user from the online users list when they disconnect
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Emit the updated list of online users
    });

    // socket.on("message", (message) => {
    //     console.log("Message received:", message);
    //     io.emit("message", message); // Broadcast the message to all clients
    // });
});

export { io, app, server };