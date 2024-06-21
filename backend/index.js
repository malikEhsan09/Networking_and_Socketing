import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();

const server = http.createServer(app);

// ? socket-io
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

// ? Middlewares
app.use(cors());

// ? Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

// ! Evenets of socket io
io.on("connection", (socket) => {
  console.log("New user connected");
  console.log(socket.id);
  // Emit data periodically (example)
//   setInterval(() => {
    socket.emit("networkBehavior", "Network Data");
    socket.emit("mouseBehavior", "Mouse Data");
    socket.emit("keyboardBehavior", "Keyboard Data");
    // socket.emit("networkd_Behaviour", (data)=>{
    //     console.log(data)
    // })

//   }, 5000);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(5000, () => {
  console.log("Serever is listening on port 5000");
});
